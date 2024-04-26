package com.menrva.controllers

import com.menrva.data.user.AuthenticationRequest
import com.menrva.data.user.AuthenticationResponse
import com.menrva.data.user.RegistrationResponse
import com.menrva.entities.User
import com.menrva.security.JwtUtil
import com.menrva.services.UserDetailsServiceImpl
import org.apache.http.auth.AuthenticationException
import org.springframework.http.ResponseEntity
import org.springframework.security.authentication.AuthenticationManager
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken
import org.springframework.web.bind.annotation.CrossOrigin
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.RequestBody
import org.springframework.web.bind.annotation.RestController

@RestController
@CrossOrigin("*", "http://localhost")
class AuthController(
    private val jwtUtil: JwtUtil,
    private val userDetailsService: UserDetailsServiceImpl,
    private val authenticationManager: AuthenticationManager,
) {

    @PostMapping("/authenticate")
    fun createAuthenticationToken(@RequestBody authenticationRequest: AuthenticationRequest): ResponseEntity<AuthenticationResponse> {
        val processedTag = "@${authenticationRequest.tag}"
        println("Attempting to authenticate with tag: $processedTag")

        try {
            val authenticationToken = UsernamePasswordAuthenticationToken(processedTag, authenticationRequest.password)
            println("Token created with tag: $processedTag, attempting to authenticate...")
            val authentication = authenticationManager.authenticate(authenticationToken)
            println("Authentication successful for tag: $processedTag")
        } catch (e: AuthenticationException) {
            println("Authentication failed for tag: $processedTag with error: ${e.message}")
            throw Exception("Incorrect tag or password.", e)
        }

        println("Loading user details for tag: $processedTag")
        val userDetails = userDetailsService.loadUserByUsername(processedTag)
        val user = userDetailsService.loadFullUserByTag(processedTag)
        println("User details loaded, generating JWT...")
        val jwt = jwtUtil.generateToken(userDetails)
        println("JWT generated: $jwt for user: $processedTag")

        return ResponseEntity.ok(AuthenticationResponse(jwt, user))
    }

    @PostMapping("/register")
    fun registerUser(@RequestBody newUser: User): ResponseEntity<RegistrationResponse> {
        val tag = newUser.tag ?: ""
        // Check if user already exists to prevent duplicates
        if (userDetailsService.existsByTag(tag)) {
            throw Exception("Error: Username is already taken!")
        }

        try {
            println("################### IN TRY")
            val savedUser = userDetailsService.save(newUser)
            println("*************** SAVED USER $savedUser")
            val userDetails = userDetailsService.loadUserByUsername(tag)
            println("*************** USER DETAILS $userDetails")
            val existingUser = userDetailsService.loadFullUserByTag(tag)
            println("*************** EXISTING USER $existingUser")
            val jwt = jwtUtil.generateToken(userDetails)
            return ResponseEntity.ok(RegistrationResponse(jwt, existingUser))
        } catch (e: Exception) {
            e.printStackTrace()
            throw Exception("Failed to register user.")
        }
    }
}

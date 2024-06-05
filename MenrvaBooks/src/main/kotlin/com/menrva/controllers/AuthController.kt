package com.menrva.controllers

import com.menrva.data.user.AuthenticationRequest
import com.menrva.data.user.AuthenticationResponse
import com.menrva.data.user.RegistrationRequest
import com.menrva.data.user.RegistrationResponse
import com.menrva.entities.User
import com.menrva.security.JwtUtil
import com.menrva.services.UserDetailsServiceImpl
import com.menrva.services.UserProfileService
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
    private val userProfileService: UserProfileService,
) {

    @PostMapping("/authenticate")
    fun createAuthenticationToken(@RequestBody authenticationRequest: AuthenticationRequest): ResponseEntity<AuthenticationResponse> {
        val input = authenticationRequest.identifier.trim()

        // Determine if the input is an email or tag based on the presence of '@' and absence of whitespace
        val isEmail = input.contains("@") && !input.contains(" ")

        val processedInput = if (isEmail) input else "@$input"  // Prepend '@' only if it's a tag


        try {
            val authenticationToken =
                UsernamePasswordAuthenticationToken(processedInput, authenticationRequest.password)
            val authentication = authenticationManager.authenticate(authenticationToken)
            println("Authentication successful for identifier: $processedInput")
        } catch (e: AuthenticationException) {
            println("Authentication failed for identifier: $processedInput with error: ${e.message}")
            throw Exception("Incorrect tag or password.", e)
        }

        val userDetails = userDetailsService.loadUserByUsername(processedInput)
        val user = userDetailsService.loadFullUserByIdentifier(processedInput)
        val jwt = jwtUtil.generateToken(userDetails)

        return ResponseEntity.ok(AuthenticationResponse(jwt, user))
    }

    @PostMapping("/register")
    fun registerUser(@RequestBody newUser: RegistrationRequest): ResponseEntity<RegistrationResponse> {
        print("%%%%%%%%%%%%% $newUser")
        val tag = "@$newUser.tag" ?: ""
        // Check if user already exists to prevent duplicates
        if (userDetailsService.existsByTag(tag)) {
            throw Exception("Error: Tag is already taken!")
        }

        try {
            val savedUser = userDetailsService.save(newUser)
            userProfileService.initializeOrUpdateUserProfile(savedUser.id!!)
            val userDetails = userDetailsService.loadUserByUsername(tag)
            val existingUser = userDetailsService.loadFullUserByIdentifier(tag)
            val jwt = jwtUtil.generateToken(userDetails)
            return ResponseEntity.ok(RegistrationResponse(jwt, existingUser))
        } catch (e: Exception) {
            e.printStackTrace()
            throw Exception("Failed to register user.")
        }
    }
}

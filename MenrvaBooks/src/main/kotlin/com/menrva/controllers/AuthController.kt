package com.menrva.controllers

import com.menrva.data.user.AuthenticationRequest
import com.menrva.data.user.AuthenticationResponse
import com.menrva.data.user.RegistrationResponse
import com.menrva.entities.User
import com.menrva.security.JwtUtil
import com.menrva.services.UserDetailsServiceImpl
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
        runCatching {
            authenticationManager.authenticate(
                UsernamePasswordAuthenticationToken(authenticationRequest.username, authenticationRequest.password)
            )
        }.getOrElse {
            throw Exception("Incorrect username or password.")
        }

        val userDetails = userDetailsService.loadUserByUsername(authenticationRequest.username)
        val user = userDetailsService.loadFullUserByUsername(authenticationRequest.username)
        val jwt = jwtUtil.generateToken(userDetails)
        return ResponseEntity.ok(AuthenticationResponse(jwt, user))
    }

    @PostMapping("/register")
    fun registerUser(@RequestBody newUser: User): ResponseEntity<RegistrationResponse> {
        // Check if user already exists to prevent duplicates
        if (userDetailsService.existsByUsername(newUser.username)) {
            throw Exception ("Error: Username is already taken!")
        }

        try {
            println("################### IN TRY")
            val savedUser = userDetailsService.save(newUser)
            println("*************** SAVED USER $savedUser")
            val userDetails = userDetailsService.loadUserByUsername(savedUser.username)
            println("*************** USER DETAILS $userDetails")
            val existingUser = userDetailsService.loadFullUserByUsername(savedUser.username)
            println("*************** EXISTING USER $existingUser")
            val jwt = jwtUtil.generateToken(userDetails)
            return ResponseEntity.ok(RegistrationResponse(jwt, existingUser))
        } catch (e: Exception) {
            e.printStackTrace()
            throw Exception("Failed to register user.")
        }
    }
}

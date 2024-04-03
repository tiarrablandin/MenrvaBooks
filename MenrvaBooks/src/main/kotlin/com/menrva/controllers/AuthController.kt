package com.menrva.controllers

import com.menrva.data.AuthenticationRequest
import com.menrva.data.AuthenticationResponse
import com.menrva.data.RegistrationResponse
import com.menrva.entities.User
import com.menrva.exceptions.UserNotFoundException
import com.menrva.security.JwtUtil
import com.menrva.services.UserDetailsServiceImpl
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.http.ResponseEntity
import org.springframework.security.authentication.AuthenticationManager
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken
import org.springframework.security.crypto.password.PasswordEncoder
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
    fun registerUser(@RequestBody newUser: User): ResponseEntity<Any> {
        // Check if user already exists to prevent duplicates
        if (userDetailsService.existsByUsername(newUser.username)) {
            return ResponseEntity.badRequest().body("Error: Username is already taken!")
        }

        try {
            val savedUser = userDetailsService.save(newUser)
            val userDetails = userDetailsService.loadUserByUsername(savedUser.username)
            val existingUser = userDetailsService.loadFullUserByUsername(savedUser.username)
            val jwt = jwtUtil.generateToken(userDetails)
            return ResponseEntity.ok(RegistrationResponse(jwt, existingUser))
        } catch (e: Exception) {
            return ResponseEntity.badRequest().body("An error occurred during registration.")
        }
    }
}

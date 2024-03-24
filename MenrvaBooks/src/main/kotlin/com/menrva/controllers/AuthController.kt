package com.menrva.controllers

import com.menrva.data.AuthenticationRequest
import com.menrva.data.AuthenticationResponse
import com.menrva.exceptions.UserNotFoundException
import com.menrva.security.JwtUtil
import com.menrva.services.UserDetailsServiceImpl
import org.springframework.beans.factory.annotation.Autowired
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
    private val userService: UserDetailsServiceImpl,
    private val authenticationManager: AuthenticationManager
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

        val userDetails = userService.loadUserByUsername(authenticationRequest.username)
        if (userDetails != null) {
            val jwt = jwtUtil.generateToken(userDetails)
            return ResponseEntity.ok(AuthenticationResponse(jwt, userDetails))
        } else {
            throw UserNotFoundException("Unable to authenticate user with username ${authenticationRequest.username}")
        }
    }
}
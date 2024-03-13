package com.menrva.security

import org.springframework.beans.factory.annotation.Autowired
import org.springframework.context.annotation.Bean
import org.springframework.context.annotation.Configuration
import org.springframework.security.authentication.AuthenticationManager
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration
import org.springframework.security.config.annotation.web.builders.HttpSecurity
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity
import org.springframework.security.core.userdetails.UserDetailsService
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder
import org.springframework.security.crypto.password.PasswordEncoder
import org.springframework.security.web.SecurityFilterChain
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter

@Configuration
@EnableWebSecurity
class SecurityConfig {
    @Autowired
    private lateinit var jwtRequestFilter: JwtRequestFilter

    @Bean
    fun securityFilterChain(http: HttpSecurity): SecurityFilterChain {
        http
                .cors() { it.disable() }
                .authorizeHttpRequests { requests ->
                    requests
                            .requestMatchers("api/books", "/authenticate").permitAll()
                            .anyRequest().authenticated()
                }
                .csrf() {
                    it.ignoringRequestMatchers("api/authors", "api/books", "authenticate")
                }
        return http.addFilterBefore(jwtRequestFilter, UsernamePasswordAuthenticationFilter::class.java).build()
    }

    @Bean
    fun authenticationManager(authenticationConfiguration: AuthenticationConfiguration): AuthenticationManager {
        return authenticationConfiguration.authenticationManager
    }

    @Bean
    fun passwordEncoder(): PasswordEncoder {
        return BCryptPasswordEncoder()
    }
}
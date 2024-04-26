package com.menrva.security

import com.menrva.repositories.UserRepository
import com.menrva.services.UserDetailsServiceImpl
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.context.annotation.Bean
import org.springframework.context.annotation.Configuration
import org.springframework.security.authentication.AuthenticationManager
import org.springframework.security.authentication.ProviderManager
import org.springframework.security.authentication.dao.DaoAuthenticationProvider
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
                    .requestMatchers(
                        "authenticate",
                        "api/authors/**",
                        "api/books/**",
                        "api/comments/**",
                        "api/genres/**",
                        "api/keywords/**",
                        "api/recommendations/**",
                        "api/search/**",
                        "api/series/**",
                        "api/tags/**",
                        "api/users/**",
                        "register",
                    ).permitAll()
                    .anyRequest().authenticated()
            }
            .csrf() {
                it.ignoringRequestMatchers(
                    "authenticate",
                    "api/authors/**",
                    "api/books/**",
                    "api/comments/**",
                    "api/genres/**",
                    "api/keywords/**",
                    "api/recommendations/**",
                    "api/search/**",
                    "api/series/**",
                    "api/tags/**",
                    "api/users/**",
                    "register",
                )
            }
        return http.addFilterBefore(jwtRequestFilter, UsernamePasswordAuthenticationFilter::class.java).build()
    }

    @Bean
    fun daoAuthenticationProvider(userDetailsService: UserDetailsService, passwordEncoder: PasswordEncoder): DaoAuthenticationProvider {
        val provider = DaoAuthenticationProvider()
        provider.setUserDetailsService(userDetailsService)
        provider.setPasswordEncoder(passwordEncoder)
        return provider
    }

    @Bean
    fun userDetailsService(userRepository: UserRepository, passwordEncoder: PasswordEncoder): UserDetailsServiceImpl {
        return UserDetailsServiceImpl(userRepository, passwordEncoder)
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
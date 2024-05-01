package com.menrva.security

import com.menrva.repositories.UserRepository
import com.menrva.services.UserDetailsServiceImpl
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.context.ApplicationContext
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
import org.springframework.web.cors.CorsConfiguration
import org.springframework.web.cors.CorsConfigurationSource
import org.springframework.web.cors.UrlBasedCorsConfigurationSource

@Configuration
@EnableWebSecurity
class SecurityConfig {
    @Autowired
    private lateinit var applicationContext: ApplicationContext

    @Bean
    fun securityFilterChain(http: HttpSecurity): SecurityFilterChain {
        val jwtRequestFilter: JwtRequestFilter = applicationContext.getBean(JwtRequestFilter::class.java)
        http
            .cors() { it.configurationSource(corsConfigurationSource()) }
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
                        "api/subgenres/**",
                        "api/tags/**",
                        "api/users/**",
                        "register",
                    ).permitAll()
                    .anyRequest().authenticated()
            }
            .csrf() { it.disable() }
            .addFilterBefore(jwtRequestFilter, UsernamePasswordAuthenticationFilter::class.java)
        return http.build()
    }

    @Bean
    fun corsConfigurationSource(): CorsConfigurationSource {
        val configuration = CorsConfiguration()
        configuration.allowedOrigins = listOf("http://localhost:3000") // Adjust this to match your front-end URL
        configuration.allowedMethods = listOf("GET", "POST", "PUT", "DELETE", "OPTIONS")
        configuration.allowedHeaders = listOf("*")
        configuration.allowCredentials = true
        val source = UrlBasedCorsConfigurationSource()
        source.registerCorsConfiguration("/**", configuration)
        return source    }

    @Bean
    fun daoAuthenticationProvider(
        userDetailsService: UserDetailsService,
        passwordEncoder: PasswordEncoder
    ): DaoAuthenticationProvider {
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
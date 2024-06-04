package com.menrva.security

import com.menrva.services.UserDetailsServiceImpl
import jakarta.servlet.FilterChain
import jakarta.servlet.ServletException
import jakarta.servlet.http.HttpServletRequest
import jakarta.servlet.http.HttpServletResponse
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.context.annotation.Lazy
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken
import org.springframework.security.core.context.SecurityContextHolder
import org.springframework.security.core.userdetails.UserDetailsService
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource
import org.springframework.stereotype.Component
import org.springframework.web.filter.OncePerRequestFilter
import java.io.IOException


@Component
class JwtRequestFilter(
    private val jwtUtil: JwtUtil,
//        private val userService: UserDetailsService,
) : OncePerRequestFilter() {
    //    private lateinit var jwtUtil: JwtUtil
    private lateinit var userDetailsService: UserDetailsServiceImpl

    @Autowired
    fun setUserDetailsService(@Lazy userDetailsService: UserDetailsServiceImpl) {
        this.userDetailsService = userDetailsService
    }

    override fun doFilterInternal(request: HttpServletRequest, response: HttpServletResponse, chain: FilterChain) {
        val authorizationHeader = request.getHeader("Authorization")
        if (authorizationHeader != null && authorizationHeader.startsWith("Bearer ")) {
            val jwt = authorizationHeader.substring(7)
            val username = jwtUtil.extractTag(jwt)

            if (username != null && SecurityContextHolder.getContext().authentication == null) {
                val userDetails = userDetailsService.loadUserByUsername(username)
                if (jwtUtil.validateToken(jwt, userDetails)) {
                    val authentication = UsernamePasswordAuthenticationToken(userDetails, null, userDetails.authorities)
                    SecurityContextHolder.getContext().authentication = authentication
                }
            }
        }
        chain.doFilter(request, response)
    }

}

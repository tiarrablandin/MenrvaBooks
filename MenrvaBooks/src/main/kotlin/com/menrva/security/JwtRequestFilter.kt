package com.menrva.security

import com.menrva.services.UserDetailsServiceImpl
import jakarta.servlet.FilterChain
import jakarta.servlet.ServletException
import jakarta.servlet.http.HttpServletRequest
import jakarta.servlet.http.HttpServletResponse
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

    @Throws(ServletException::class, IOException::class)
    override fun doFilterInternal(request: HttpServletRequest, response: HttpServletResponse, chain: FilterChain) {
        val authorizationHeader = request.getHeader("Authorization")
        var tag: String? = null
        var jwt: String? = null
        if (authorizationHeader != null && authorizationHeader.startsWith("Bearer ")) {
            jwt = authorizationHeader.substring(7)
            if (jwt.split("\\.".toRegex()).dropLastWhile { it.isEmpty() }.toTypedArray().size == 3) {
                tag = jwtUtil.extractTag(jwt)
            }
        }
        if (tag != null && SecurityContextHolder.getContext().authentication == null) {
            val userDetails = userDetailsService.loadUserByUsername(tag)
            if (jwtUtil.validateToken(jwt, userDetails)) {
                val usernamePasswordAuthenticationToken = UsernamePasswordAuthenticationToken(userDetails, null, userDetails.authorities)
                usernamePasswordAuthenticationToken.details = WebAuthenticationDetailsSource().buildDetails(request)
                SecurityContextHolder.getContext().authentication = usernamePasswordAuthenticationToken
            }
        }
        chain.doFilter(request, response)
    }
}

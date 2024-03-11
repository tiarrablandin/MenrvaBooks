package com.menrva.security

import com.menrva.services.UserDetailsServiceImpl
import jakarta.servlet.FilterChain
import jakarta.servlet.http.HttpServletRequest
import jakarta.servlet.http.HttpServletResponse
import org.springframework.web.filter.OncePerRequestFilter

class AuthTokenFilter(
    private val jwtUtil: JwtUtil?, private val userDetailsService: UserDetailsServiceImpl?,
) : OncePerRequestFilter() {

    override fun doFilterInternal(
        request: HttpServletRequest,
        response: HttpServletResponse,
        filterChain: FilterChain,
    ) {
        val jwt = parseJwt(request)
//        if (jwt != null && jwtUtil != null && jwtUtil.validateToken(jwt)) {
//            val username = jwtUtil.extractUsername(jwt)
//            val userDetails = userDetailsService?.loadUserByUsername(username)
//            val authentication = UsernamePasswordAuthenticationToken(userDetails, null, userDetails?.authorities)
//            authentication.details = WebAuthenticationDetailsSource().buildDetails(request)
//            SecurityContextHolder.getContext().authentication = authentication
        }
//        filterChain.doFilter(request, response)
//    }

    private fun parseJwt(request: HttpServletRequest): String? {
        val headerAuth = request.getHeader("Authorization")
        if (headerAuth != null && headerAuth.startsWith("Bearer ")) {
            return headerAuth.substring(7, headerAuth.length)
        }
        return null
    }
}
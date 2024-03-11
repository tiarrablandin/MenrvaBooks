package com.menrva.services

import com.menrva.data.UserDetailsImpl
import com.menrva.repositories.UserRepository
import org.springframework.security.core.userdetails.UserDetails
import org.springframework.security.core.userdetails.UserDetailsService
import org.springframework.stereotype.Service

@Service
class UserDetailsServiceImpl(
    private val userRepository: UserRepository
) : UserDetailsService {

    override fun loadUserByUsername(username: String): UserDetails? {
        val user = userRepository.findByUsername(username)
        println("*******************************************")
        println(user)
        println(user?.password)

        return if (user != null) UserDetailsImpl.build(user) else null
    }
}
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
//    THIS IS AN IMPLEMENTATION OF THE SPRING SECURITY USER DETAILS SERVICE
//    DOES NOT RETURN FULL USER OBJECTS

    override fun loadUserByUsername(username: String): UserDetails? {
        val user = userRepository.findByUsername(username)

        return if (user != null) UserDetailsImpl.build(user) else null
    }
}
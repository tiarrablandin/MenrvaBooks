package com.menrva.services

import com.menrva.data.user.UserDetailsImpl
import com.menrva.entities.Subscription
import com.menrva.entities.User
import com.menrva.repositories.UserRepository
import org.springframework.security.core.userdetails.UserDetails
import org.springframework.security.core.userdetails.UserDetailsService
import org.springframework.security.core.userdetails.UsernameNotFoundException
import org.springframework.security.crypto.password.PasswordEncoder
import org.springframework.stereotype.Service

@Service
class UserDetailsServiceImpl(
    private val userRepository: UserRepository,
    private val passwordEncoder: PasswordEncoder,
) : UserDetailsService {
//    THIS IS AN IMPLEMENTATION OF THE SPRING SECURITY USER DETAILS SERVICE
//    DOES NOT RETURN FULL USER OBJECTS

    override fun loadUserByUsername(username: String): UserDetails {
        val user: User = userRepository.findByUsername(username)
            ?: throw UsernameNotFoundException("User Not Found with username: $username")

        return UserDetailsImpl.build(user)
    }

    fun loadFullUserByUsername(username: String): User {
        val user: User = userRepository.findByUsername(username)
            ?: throw UsernameNotFoundException("User Not Found with username: $username")

        return user
    }

    fun existsByUsername(username: String): Boolean = userRepository.existsByUsername(username)

    fun save(user: User): User {
        println("$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$ IN SERVICE 1")
        // Ensure you encode the password if not already done before calling this method
        val newPassword = passwordEncoder.encode(user.password)
        println("$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$ IN SERVICE 2 $newPassword")
        val updatedUser = user.copy(password = newPassword, subscription = Subscription(1))
        println("$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$ IN SERVICE 3 $updatedUser")


        return userRepository.save(updatedUser)
    }

}
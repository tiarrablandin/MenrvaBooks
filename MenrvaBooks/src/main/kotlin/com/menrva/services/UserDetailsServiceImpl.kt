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

    override fun loadUserByUsername(tag: String): UserDetails {
        println("Loading user by tag: $tag")
        val user = userRepository.findByTag(tag) ?: throw UsernameNotFoundException("User Not Found with tag: $tag")
        println("User loaded: $user")
        return UserDetailsImpl.build(user)
    }

    fun loadFullUserByTag(tag: String): User {
        val user: User = userRepository.findByTag(tag)
            ?: throw UsernameNotFoundException("User Not Found with tag: $tag")

        return user
    }

    fun existsByTag(tag: String): Boolean = userRepository.existsByTag(tag)

    fun save(user: User): User {
        println("$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$ IN SERVICE 1")
        // Ensure you encode the password if not already done before calling this method
        val newPassword = passwordEncoder.encode(user.password)
        println("$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$ IN SERVICE 2 $newPassword")
        val updatedUser = User(password = newPassword, subscription = Subscription(1))
        println("$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$ IN SERVICE 3 $updatedUser")


        return userRepository.save(updatedUser)
    }

}
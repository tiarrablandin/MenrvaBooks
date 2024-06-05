package com.menrva.services

import com.menrva.data.user.RegistrationRequest
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

    override fun loadUserByUsername(identifier: String): UserDetails {
        val user: User = userRepository.findByTag(identifier)  // Use a simple method for testing
            ?: userRepository.findByEmail(identifier)
            ?: throw UsernameNotFoundException("User not found with identifier: $identifier")
        return UserDetailsImpl.build(user)
    }

    fun loadFullUserByIdentifier(identifier: String): User {
        val user: User = userRepository.findByTag(identifier)  // Use a simple method for testing
            ?: userRepository.findByEmail(identifier)
            ?: throw UsernameNotFoundException("User not found with identifier: $identifier")

        return user
    }

    fun existsByTag(tag: String): Boolean = userRepository.existsByTag(tag)

    fun save(user: RegistrationRequest): User {
        // Ensure you encode the password if not already done before calling this method
        val newPassword = passwordEncoder.encode(user.password)
        val updatedUser = User(
            email = user.email,
            tag = "@" + user.tag,
            password = newPassword,
            firstName = user.firstName,
            lastName = user.lastName,
            active = true,
            role = "User",
            subscription = Subscription(1)
        )


        return userRepository.saveAndFlush(updatedUser)
    }

}
package com.menrva.services

import com.menrva.data.user.UserDTO
import com.menrva.data.user.UserSummary
import com.menrva.entities.User
import com.menrva.repositories.UserRepository
import org.springframework.security.core.userdetails.UsernameNotFoundException
import org.springframework.security.crypto.password.PasswordEncoder
import org.springframework.stereotype.Service
import org.springframework.transaction.annotation.Transactional
import java.time.LocalDateTime
import java.util.*

@Service
class UserService(
    private val userRepository: UserRepository, private val passwordEncoder: PasswordEncoder
) {

    fun index(): List<User> = userRepository.findAll()

    fun findById(id: Long): Optional<User> = userRepository.findById(id)

    fun loadUserSummaryByIdentifier(identifier: String): UserSummary {
        val user: UserSummary =
            userRepository.findUserSummaryByTag(identifier) ?: userRepository.findUserSummaryByEmail(identifier)
            ?: throw UsernameNotFoundException("User not found with identifier: $identifier")

        return user
    }

    fun loadFullUserByIdentifier(identifier: String): User {
        val user: User = userRepository.findByTag(identifier) ?: userRepository.findByEmail(identifier)
        ?: throw UsernameNotFoundException("User not found with identifier: $identifier")

        return user
    }

    fun findByTag(tag: String): User? = userRepository.findByTag(tag)

    fun toggleActive(id: Long): User {
        val user = userRepository.findById(id).orElseThrow {
            throw RuntimeException("User not found with id: $id")
        }

        user.active = !user.active!!
        return userRepository.save(user)
    }

    @Transactional
    fun changePassword(identifier: String, oldPassword: String, newPassword: String) {
        val user: User = userRepository.findByTag(identifier) ?: userRepository.findByEmail(identifier)
        ?: throw UsernameNotFoundException("User not found with identifier: $identifier")

        if (!passwordEncoder.matches(oldPassword, user.password)) {
            throw Exception("Old password is incorrect.")
        }

        user.password = passwordEncoder.encode(newPassword)
        userRepository.save(user)
    }

    fun generatePasswordResetToken(identifier: String): String {
        val user: User = userRepository.findByTag(identifier) ?: userRepository.findByEmail(identifier)
        ?: throw UsernameNotFoundException("User not found with identifier: $identifier")
        val token = UUID.randomUUID().toString()
        println("################################ $token")
        val expirationTime = LocalDateTime.now().plusHours(1)
        user.passwordResetToken = token
        user.passwordResetTokenExpiration = expirationTime
        userRepository.save(user)

        return token
    }

    fun resetPassword(token: String, newPassword: String) {
        val user = userRepository.findByPasswordResetToken(token).orElseThrow { Exception("Invalid or expired token") }

        if (user.passwordResetTokenExpiration!!.isBefore(LocalDateTime.now())) {
            throw Exception("Token has expired")
        }

        user.password = passwordEncoder.encode(newPassword)
        user.passwordResetToken = null
        user.passwordResetTokenExpiration = null
        userRepository.save(user)
    }

    @Transactional
    fun create(user: User): User = userRepository.save(user)

    @Transactional
    fun update(id: Long, userDTO: UserDTO): User {
        val user: User = userRepository.findById(id).orElse(null)
            ?: throw UsernameNotFoundException("User not found with id: $id")
//        val updatedUser = User(
//            firstName = userDTO.firstName,
//            lastName = userDTO.lastName,
//            tag = userDTO.tag,
//            role = userDTO.role,
//            email = userDTO.email,
//            avatar = user.avatar,
//            // Do not update creation timestamp as it's auto-generated
//        )

        user.firstName = userDTO.firstName
        user.lastName = userDTO.lastName
        user.tag = userDTO.tag
        user.email = userDTO.email
        user.role = userDTO.role
//        user.avatar = userDTO.avatar

        return userRepository.save(user)
    }

    @Transactional
    fun delete(id: Long): Boolean {
        val user = userRepository.findById(id).orElseThrow { RuntimeException("User not found") }
        userRepository.delete(user)
        return userRepository.existsById(id)
    }
}

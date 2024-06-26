package com.menrva.services

import com.menrva.data.user.UserDTO
import com.menrva.data.user.UserSummary
import com.menrva.entities.User
import com.menrva.repositories.UserRepository
import org.springframework.security.core.userdetails.UsernameNotFoundException
import org.springframework.stereotype.Service
import org.springframework.transaction.annotation.Transactional
import java.util.*

@Service
class UserService(private val userRepository: UserRepository) {

    fun index(): List<User> = userRepository.findAll()

    fun findById(id: Long): Optional<User> = userRepository.findById(id)

    fun loadUserSummaryByIdentifier(identifier: String): UserSummary {
        val user: UserSummary = userRepository.findUserSummaryByTag(identifier)
            ?: userRepository.findUserSummaryByEmail(identifier)
            ?: throw UsernameNotFoundException("User not found with identifier: $identifier")

        return user
    }

    fun loadFullUserByIdentifier(identifier: String): User {
        val user: User = userRepository.findByTag(identifier)  // Use a simple method for testing
            ?: userRepository.findByEmail(identifier)
            ?: throw UsernameNotFoundException("User not found with identifier: $identifier")

        return user
    }

    fun findByTag(username: String): User? = userRepository.findByTag(username)

    fun toggleActive(id: Long): User {
        val user = userRepository.findById(id).orElseThrow{
            throw RuntimeException("User not found with id: $id")
        }

        user.active = !user.active!!
        return userRepository.save(user)
    }

    @Transactional
    fun create(user: User): User = userRepository.save(user)

    @Transactional
    fun update(id: Long, userDTO: UserDTO): User? {
        val user: User = userRepository.findById(id).orElse(null) ?: return null
        val updatedUser = User(
            firstName = userDTO.firstName,
            lastName = userDTO.lastName,
            tag = userDTO.tag,
            password = userDTO.password,
            active = userDTO.active,
            role = userDTO.role,
            email = userDTO.email,
            // Do not update creation timestamp as it's auto-generated
        )
        return userRepository.save(updatedUser)
    }

    @Transactional
    fun delete(id: Long) {
        userRepository.deleteById(id)
    }
}

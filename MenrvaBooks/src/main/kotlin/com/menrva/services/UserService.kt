package com.menrva.services

import com.menrva.data.UserDTO
import com.menrva.entities.User
import com.menrva.repositories.UserRepository
import org.springframework.stereotype.Service
import org.springframework.transaction.annotation.Transactional
import java.util.*

@Service
class UserService(private val userRepository: UserRepository) {

    fun findAll(): List<User> = userRepository.findAll()

    fun findById(id: Long): Optional<User> = userRepository.findById(id)

    @Transactional
    fun create(user: User): User = userRepository.save(user)

    @Transactional
    fun update(id: Long, userDTO: UserDTO): User? {
        val user: User = userRepository.findById(id).orElse(null) ?: return null
        val updatedUser= user.copy(
            firstName = userDTO.firstName ?: user.firstName,
            lastName = userDTO.lastName ?: user.lastName,
            tag = userDTO.tag ?:user.tag,
            username = userDTO.username ?: user.username,
            password = userDTO.password ?: user.password,
            active = userDTO.active ?: user.active,
            role = userDTO.role ?: user.role,
            email = userDTO.email ?: user.email,
            // Do not update creation timestamp as it's auto-generated
        )
        return userRepository.save(updatedUser)
    }

    @Transactional
    fun delete(id: Long) {
        userRepository.deleteById(id)
    }
}

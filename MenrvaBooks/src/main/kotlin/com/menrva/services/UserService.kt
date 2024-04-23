package com.menrva.services

import com.menrva.data.user.UserDTO
import com.menrva.entities.Book
import com.menrva.entities.User
import com.menrva.repositories.UserRepository
import org.springframework.stereotype.Service
import org.springframework.transaction.annotation.Transactional
import java.util.*

@Service
class UserService(private val userRepository: UserRepository) {

    fun index(): List<User> = userRepository.findAll()

    fun findById(id: Long): Optional<User> = userRepository.findById(id)

    @Transactional
    fun create(user: User): User = userRepository.save(user)

    @Transactional
    fun update(id: Long, userDTO: UserDTO): User? {
        val user: User = userRepository.findById(id).orElse(null) ?: return null
        val updatedUser = User(
            firstName = userDTO.firstName,
            lastName = userDTO.lastName,
            tag = userDTO.tag,
            username = userDTO.username,
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

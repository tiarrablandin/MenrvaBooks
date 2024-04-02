package com.menrva.services

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
    fun update(id: Long, updateUser: User): User? {
        val user: User = userRepository.findById(id).orElse(null) ?: return null
        user.apply {
            firstName = updateUser.firstName
            lastName = updateUser.lastName
            tag = updateUser.tag
            username = updateUser.username
            password = updateUser.password
            active = updateUser.active
            role = updateUser.role
            email = updateUser.email
            // Do not update creation timestamp as it's auto-generated
        }
        return userRepository.save(user)
    }

    @Transactional
    fun delete(id: Long) {
        userRepository.deleteById(id)
    }
}

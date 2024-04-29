package com.menrva.repositories

import com.menrva.entities.User
import jakarta.transaction.Transactional
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.data.jpa.repository.Modifying
import org.springframework.data.jpa.repository.Query
import org.springframework.stereotype.Repository


@Repository
interface UserRepository : JpaRepository<User, Long> {
    fun findByTag(tag: String): User?
    fun findByEmail(email: String): User?
    fun existsByTag(tag: String): Boolean
}
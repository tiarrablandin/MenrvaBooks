package com.menrva.repositories

import com.menrva.entities.User
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.stereotype.Repository


@Repository
interface UserRepository : JpaRepository<User, Int> {
    fun findByUsername(username: String): User?
}
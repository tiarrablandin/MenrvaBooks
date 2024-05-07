package com.menrva.repositories

import com.menrva.data.user.UserSummary
import com.menrva.entities.User
import jakarta.transaction.Transactional
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.data.jpa.repository.Modifying
import org.springframework.data.jpa.repository.Query
import org.springframework.data.repository.query.Param
import org.springframework.stereotype.Repository


@Repository
interface UserRepository : JpaRepository<User, Long> {
    fun findByTag(tag: String): User?
    fun findByEmail(email: String): User?
    @Query("SELECT u FROM User u WHERE u.email = :email")
    fun findUserSummaryByEmail(@Param("email") email: String): UserSummary?
    @Query("SELECT u FROM User u WHERE u.tag = :tag")
    fun findUserSummaryByTag(@Param("tag") tag: String): UserSummary?
    fun existsByTag(tag: String): Boolean
}
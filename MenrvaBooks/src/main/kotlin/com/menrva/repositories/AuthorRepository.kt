package com.menrva.repositories

import com.menrva.entities.Author
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.stereotype.Repository

@Repository
interface AuthorRepository : JpaRepository<Author, Int> {
    fun findByPenName(penName: String): Author?
}

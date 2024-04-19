package com.menrva.repositories

import com.menrva.data.author.AuthorSummary
import com.menrva.data.book.BookSummary
import com.menrva.entities.Author
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.data.jpa.repository.Query
import org.springframework.stereotype.Repository

@Repository
interface AuthorRepository : JpaRepository<Author, Long> {
    fun findByPenName(penName: String): Author?
    fun existsByPenName(penName: String): Boolean
    @Query("SELECT a FROM Author a")
    fun findAllAuthorsAsSummaries(): List<AuthorSummary>
}

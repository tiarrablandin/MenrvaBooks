package com.menrva.repositories

import com.menrva.data.author.AuthorSummary
import com.menrva.data.book.BookSummary
import com.menrva.data.series.SeriesSummary
import com.menrva.entities.Author
import com.menrva.entities.Book
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.data.jpa.repository.Query
import org.springframework.data.repository.query.Param
import org.springframework.stereotype.Repository

@Repository
interface AuthorRepository : JpaRepository<Author, Long> {
    @Query("SELECT a FROM Author a WHERE LOWER(a.penName) LIKE LOWER(CONCAT('%', :penName, '%'))")
    fun findByPenNameContainingIgnoreCase(@Param("penName") penName: String): List<AuthorSummary>
    fun existsByPenName(penName: String): Boolean
    @Query("SELECT a FROM Author a")
    fun findAllAuthorsAsSummaries(): List<AuthorSummary>
    @Query("SELECT b FROM Book b JOIN b.authors a WHERE a.id = :authorId")
    fun findBooksByAuthorId(@Param("authorId") authorId: Long): List<BookSummary>
    @Query("SELECT s FROM Series s JOIN s.authors a WHERE a.id = :authorId")
    fun findSeriesByAuthorId(@Param("authorId") authorId: Long): List<SeriesSummary>
}


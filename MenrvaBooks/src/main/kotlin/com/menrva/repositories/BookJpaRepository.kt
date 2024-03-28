package com.menrva.repositories

import com.menrva.data.BookGenreKeywordSummary
import com.menrva.entities.Book
import com.menrva.entities.Genre
import com.menrva.entities.Keyword
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.data.jpa.repository.Query
import org.springframework.data.repository.query.Param
import org.springframework.stereotype.Repository

@Repository
interface BookJpaRepository : JpaRepository<Book, Long> {
    fun findByTitle(title: String): List<Book>

    @Query(
        "SELECT DISTINCT b FROM Book b " +
                "Left JOIN b.keywords k " +
                "Left JOIN b.genres g " +
                "Left JOIN b.tags t " +
                "Left JOIN b.series s " +
                "WHERE lower(b.title) like lower(concat('%', :searchTerm, '%')) OR " +
                "lower(k.name) like lower(concat('%', :searchTerm, '%')) OR " +
                "lower(g.name) like lower(concat('%', :searchTerm, '%')) OR " +
                "lower(s.name) like lower(concat('%', :searchTerm, '%')) OR " +
                "lower(t.name) like lower(concat('%', :searchTerm, '%')) "
    )
    fun findBySearchTerm(@Param("searchTerm") searchTerm: String): List<Book>

    @Query("SELECT b FROM Book b")
    fun findAllBooksWithGenreKeyword(): List<BookGenreKeywordSummary>

    //    fun findByTitleWithGenresKeywords(title: String): List<BookGenreKeywordSummary>
    @Query(
        "SELECT DISTINCT b FROM Book b " +
                "JOIN b.genres g " +
                "JOIN b.keywords k " +
                "WHERE g IN :genres AND k IN :keywords"
    )
    fun findBooksByGenresAndKeywords(
        @Param("genres") genres: List<Genre>,
        @Param("keywords") keywords: List<Keyword>
    ): List<Book>
}

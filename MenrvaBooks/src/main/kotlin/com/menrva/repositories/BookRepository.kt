package com.menrva.repositories

import com.menrva.entities.Author
import com.menrva.entities.Book
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.data.jpa.repository.Query
import org.springframework.data.repository.query.Param
import org.springframework.stereotype.Repository

@Repository
interface BookRepository : JpaRepository<Book, Int> {
    fun findByTitle(title: String): List<Book>

//    @Query("SELECT b FROM Book b " +
//           "Left JOIN b.keywords k " +
//           "Left JOIN b.genre g " +
//           "Left JOIN b.series s " +
//           "Left JOIN b.tag t " +
//           "WHERE " +
//           "lower(k.name) like lower(concat('%', :searchTerm, '%')) OR " +
//           "lower(g.name) like lower(concat('%', :searchTerm, '%')) OR " +
//           "lower(s.name) like lower(concat('%', :searchTerm, '%')) OR " +
//           "lower(t.name) like lower(concat('%', :searchTerm, '%')) ")
//    fun findBySearchTerm(@Param("searchTerm") searchTerm: String): List<Book>
}

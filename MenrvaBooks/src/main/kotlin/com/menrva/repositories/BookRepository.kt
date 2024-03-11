package com.menrva.repositories

import com.menrva.entities.Author
import com.menrva.entities.Book
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.stereotype.Repository

@Repository
interface BookRepository : JpaRepository<Book, Int> {
    fun findByTitle(title: String): List<Book>
}
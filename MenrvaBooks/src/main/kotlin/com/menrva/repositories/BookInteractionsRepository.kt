package com.menrva.repositories

import com.menrva.entities.BookInteractions
import org.springframework.data.jpa.repository.JpaRepository

interface BookInteractionsRepository : JpaRepository<BookInteractions, Int> {
    fun findByUserId(userId: Long): List<BookInteractions>
    fun findByBookId(bookId: Int): List<BookInteractions>
}
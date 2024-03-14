package com.menrva.services

import com.menrva.entities.Book
import com.menrva.repositories.BookRepository
import org.springframework.stereotype.Service

@Service
class BookService(
) {
    private lateinit var bookRepo: BookRepository
    fun index(): List<Book> {
        return bookRepo.findAll()
    }
}

package com.menrva.services

import com.menrva.data.BookGenreKeywordSummary
import com.menrva.entities.Book
import com.menrva.repositories.BookRepository
import org.springframework.stereotype.Service
import java.time.LocalDate
import java.util.*

@Service
class BookService(
        private val bookRepo: BookRepository
) {
    fun index(): List<Book> {
        return bookRepo.findAll()
    }

    fun indexWithGenresKeywords(): List<BookGenreKeywordSummary> {
        return bookRepo.findAllBooksWithGenreKeyword();
    }

    fun getNewReleases(): List<Book> {
        val releases: MutableList<Book> = bookRepo.findAll()
        releases.sortBy { it.publicationDate }
        releases.removeIf { it.publicationDate.isBefore(LocalDate.now().minusDays(30)) }
        return releases;
    }

    fun search(searchTerm: String): List<Book> {
        val results: List<Book> = bookRepo.findBySearchTerm(searchTerm)
        return results
    }
}

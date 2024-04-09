package com.menrva.services

import com.menrva.data.book.BookSummary
import com.menrva.entities.Book
import com.menrva.repositories.BookJpaRepository
import org.springframework.stereotype.Service
import java.time.LocalDate

@Service
class BookService(
        private val bookRepo: BookJpaRepository
) {
    fun index(): List<Book> {
        return bookRepo.findAll()
    }

    fun indexWithGenresKeywords(): List<BookSummary> {
        return bookRepo.findAllBooksWithGenreKeyword();
    }

    fun getNewReleases(): List<Book> {
        val releases: MutableList<Book> = bookRepo.findAll()
        releases.sortBy { it.publicationDate }
        releases.removeIf { it.publicationDate.isBefore(LocalDate.now().minusDays(90)) }
        return releases;
    }

    fun search(searchTerm: String): List<Book> {
        val results: List<Book> = bookRepo.findBySearchTerm(searchTerm)
        return results
    }
}

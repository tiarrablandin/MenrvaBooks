package com.menrva.services

import com.menrva.data.book.BookDTO
import com.menrva.data.book.BookSummary
import com.menrva.entities.Book
import com.menrva.repositories.BookJpaRepository
import org.springframework.stereotype.Service
import java.time.LocalDate
import java.util.*

@Service
class BookService(
    private val bookRepo: BookJpaRepository
) {
    fun index(): List<Book> {
        return bookRepo.findAll()
    }

    fun findById(id: Long): BookSummary {
        return bookRepo.findBookById(id)
    }

    fun toggleReviewed(id: Long): Book {
        val book = bookRepo.findById(id).orElseThrow { RuntimeException("Book not found") }
        val newReviewedStatus = book.reviewed?.not() ?: true
        book.reviewed = newReviewedStatus
        return bookRepo.save(book)
    }

    fun findAllById(ids: List<Long>): List<BookSummary> {
        return bookRepo.findSummariesByIds(ids)
    }

    fun indexWithGenresKeywords(): List<BookSummary> {
        return bookRepo.findAllBooksAsSummaries();
    }

    fun getNewReleases(): List<Book> {
        val releases: MutableList<Book> = bookRepo.findAll()
        releases.sortBy { it.publicationDate }
        releases.removeIf { it.publicationDate!!.isBefore(LocalDate.now().minusDays(90)) }
        return releases;
    }

    fun search(searchTerm: String): List<BookSummary> {
        val results: List<BookSummary> = bookRepo.findBySearchTerm(searchTerm)
        return results
    }


    fun createBook(bookDto: BookDTO): Book {
        val book = Book(
            title = bookDto.title,
            description = bookDto.description,
            pageCount = bookDto.pageCount,
            publicationDate = bookDto.publicationDate,
            cover = bookDto.cover,
        )
        return bookRepo.save(book)
    }

    fun updateBook(id: Long, bookDto: BookDTO): Book {
        val book = bookRepo.findById(id).orElseThrow { RuntimeException("Book not found") }
        book.title = bookDto.title
        book.description = bookDto.description
        book.pageCount = bookDto.pageCount
        book.publicationDate = bookDto.publicationDate
        book.cover = bookDto.cover
        return bookRepo.save(book)
    }

}

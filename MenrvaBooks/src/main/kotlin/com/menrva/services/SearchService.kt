package com.menrva.services

import com.menrva.data.book.BookDTO
import com.menrva.data.book.BookSummary
import com.menrva.entities.Book
import com.menrva.repositories.BookJpaRepository
import com.menrva.repositories.elasticsearch.BookSearchRepository
import org.springframework.stereotype.Service

@Service
class SearchService(
    private val bookSearchRepository: BookSearchRepository,
    private val bookJpaRepository: BookJpaRepository
) {

    fun getSearchResultsByTitle(title: String): List<BookSummary> {
        val books = bookSearchRepository.findByTitleMatching(title)
        print("######### $books")
        val bookIds = books.map { book -> book.id }
        val bookSummaries = bookJpaRepository.findSummariesByIds(bookIds)
        print("$$$$$$$$$$$ $bookSummaries")
        return bookSummaries
    }
}
package com.menrva.services

import com.menrva.data.book.BookSummary
import com.menrva.entities.Book
import com.menrva.repositories.elasticsearch.BookSearchRepository
import org.springframework.stereotype.Service

@Service
class SearchService(
    private val bookSearchRepository: BookSearchRepository
) {

    fun getSearchResultsByTitle(title: String): List<Book> {
        val books = bookSearchRepository.findByTitleMatching(title)
        print("IN SERVICE: $books")
        return books
    }
}
package com.menrva.services

import com.menrva.entities.Book
import com.menrva.repositories.elasticsearch.BookSearchRepository
import org.springframework.stereotype.Service

@Service
class SearchService(
    private val bookSearchRepository: BookSearchRepository
) {

    fun getSearchResultsByTitle(title: String): List<Book> {
        return bookSearchRepository.findByTitleMatching(title)
    }
}
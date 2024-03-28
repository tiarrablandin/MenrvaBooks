package com.menrva.repositories.elasticsearch

import com.menrva.entities.Book
import org.springframework.data.elasticsearch.repository.ElasticsearchRepository
import org.springframework.stereotype.Repository

@Repository
interface BookSearchRepository : ElasticsearchRepository<Book, Long> {
    fun findByTitle(title: String): List<Book>
}
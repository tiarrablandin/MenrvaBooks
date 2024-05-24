package com.menrva.repositories.elasticsearch

import com.menrva.data.book.BookDTO
import com.menrva.data.book.BookSummary
import com.menrva.entities.Book
import org.springframework.data.elasticsearch.annotations.Query
import org.springframework.data.elasticsearch.repository.ElasticsearchRepository
import org.springframework.stereotype.Repository

@Repository
interface BookSearchRepository : ElasticsearchRepository<Book, Long> {
    fun findByTitle(title: String): List<Book>


    @Query("""
    {
        "query_string": {
            "query": "*?0*",
            "fields": ["title", "authors.penName", "series.name"],
            "default_operator": "or"
        }
    }
    """)
    fun findByQueryString(query: String): List<Book>

}
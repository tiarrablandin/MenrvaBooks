package com.menrva.repositories.elasticsearch

import com.menrva.entities.Book
import org.springframework.data.elasticsearch.annotations.Query
import org.springframework.data.elasticsearch.repository.ElasticsearchRepository
import org.springframework.stereotype.Repository

@Repository
interface BookSearchRepository : ElasticsearchRepository<Book, Long> {
    fun findByTitle(title: String): List<Book>


    @Query("{\"query_string\": {\"default_field\": \"title\", \"query\": \"?0*\"}}")
    fun findByTitleMatching(title: String): List<Book>

}
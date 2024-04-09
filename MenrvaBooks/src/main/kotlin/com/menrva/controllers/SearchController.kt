package com.menrva.controllers

import com.menrva.data.book.BookDTO
import com.menrva.data.book.BookSummary
import com.menrva.entities.Book
import com.menrva.services.SearchService
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.CrossOrigin
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RequestParam
import org.springframework.web.bind.annotation.RestController

@RestController
@RequestMapping("/api/search")
@CrossOrigin("*", "http://localhost")
class SearchController(private val searchService: SearchService) {

    @GetMapping("/books")
    fun searchBooksByTitle(@RequestParam title: String): ResponseEntity<List<BookDTO>> {
        print("IN CONTROLLER 1")
        val searchResults = searchService.getSearchResultsByTitle(title)
        print("IN CONTROLLER: $searchResults")
        return ResponseEntity.ok(searchResults.map { BookDTO(it) })
    }
}
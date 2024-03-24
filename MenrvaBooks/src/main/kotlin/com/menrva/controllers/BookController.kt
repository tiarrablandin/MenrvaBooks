package com.menrva.controllers

import com.menrva.data.BookDTO
import com.menrva.data.BookGenreKeywordSummary
import com.menrva.entities.Book
import com.menrva.services.BookService
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.CrossOrigin
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RequestParam
import org.springframework.web.bind.annotation.RestController

@RestController
@RequestMapping("api")
@CrossOrigin("*", "http://localhost")
class BookController(private val bookService: BookService) {

    @GetMapping("books")
    fun index(): ResponseEntity<List<BookDTO>> {
        return ResponseEntity.ok(bookService.index().map { BookDTO(it) })
    }

    @GetMapping("books/genres-keywords")
    fun allWithGenreKeyword(): ResponseEntity<List<BookGenreKeywordSummary>> {
        return ResponseEntity.ok(bookService.indexWithGenresKeywords())
    }

    @GetMapping("books/newReleases")
    fun newReleases(): ResponseEntity<List<BookDTO>> {
        return ResponseEntity.ok(bookService.getNewReleases().map { BookDTO(it) })
    }

    @PostMapping("books/search")
    fun search(@RequestParam searchTerm: String): ResponseEntity<List<BookDTO>> {
        return ResponseEntity.ok(bookService.search(searchTerm).map { BookDTO(it) })
    }

}
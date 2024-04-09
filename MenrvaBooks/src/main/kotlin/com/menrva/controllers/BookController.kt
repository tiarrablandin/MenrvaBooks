package com.menrva.controllers

import com.menrva.data.book.BookDTO
import com.menrva.data.book.BookSummary
import com.menrva.services.BookService
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.*

@RestController
@RequestMapping("api")
@CrossOrigin("*", "http://localhost")
class BookController(private val bookService: BookService) {

    @GetMapping("books")
    fun index(): ResponseEntity<List<BookDTO>> {
        return ResponseEntity.ok(bookService.index().map { BookDTO(it) })
    }

    @GetMapping("books/genres-keywords")
    fun allWithGenreKeyword(): ResponseEntity<List<BookSummary>> {
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
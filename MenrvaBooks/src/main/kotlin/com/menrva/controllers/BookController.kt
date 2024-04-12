package com.menrva.controllers

import com.menrva.data.book.BookDTO
import com.menrva.data.book.BookSummary
import com.menrva.services.BookService
import com.sun.security.auth.UserPrincipal
import org.springframework.http.ResponseEntity
import org.springframework.security.core.annotation.AuthenticationPrincipal
import org.springframework.web.bind.annotation.*

@RestController
@RequestMapping("api/books")
@CrossOrigin("*", "http://localhost")
class BookController(private val bookService: BookService) {

    @GetMapping("books")
    fun index(): ResponseEntity<List<BookDTO?>> {
        return ResponseEntity.ok(bookService.index().map { BookDTO(it) })
    }

    @PostMapping("/{id}/toggle-reviewed")
    fun toggleBookReviewed(@PathVariable id: Long): ResponseEntity<BookDTO> {
        val updatedBook = bookService.toggleReviewed(id)
        return ResponseEntity.ok(BookDTO(updatedBook))
    }

    @GetMapping("{id}")
    fun findById(@PathVariable id: Long): ResponseEntity<Any> {
        val book = bookService.findById(id)
        return ResponseEntity.ok(book)
    }

    @GetMapping("summary")
    fun allWithGenreKeyword(): ResponseEntity<List<BookSummary>> {
        return ResponseEntity.ok(bookService.indexWithGenresKeywords())
    }

    @GetMapping("books/newReleases")
    fun newReleases(): ResponseEntity<List<BookDTO>> {
        return ResponseEntity.ok(bookService.getNewReleases().map { BookDTO(it) })
    }

    @PostMapping("search")
    fun search(@RequestParam searchTerm: String): ResponseEntity<List<BookSummary>> {
        return ResponseEntity.ok(bookService.search(searchTerm))
    }

    @PostMapping("{bookId}/react")
    fun toggleLikeDislike(@PathVariable bookId: Long, @AuthenticationPrincipal user: UserPrincipal, @RequestParam("status") status: Int) {

    }

}
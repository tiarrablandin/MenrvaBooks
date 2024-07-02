package com.menrva.controllers

import com.menrva.data.book.BookDTO
import com.menrva.data.book.BookSummary
import com.menrva.services.BookInteractionService
import com.menrva.services.BookService
import com.menrva.services.UserService
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.*

@RestController
@RequestMapping("api/books")
@CrossOrigin("*", "http://localhost")
class BookController(
    private val bookService: BookService,
    private val bookInteractionService: BookInteractionService,
    private val userService: UserService,
) {

    @GetMapping("")
    fun index(): ResponseEntity<List<BookDTO?>> {
        return ResponseEntity.ok(bookService.index().map { BookDTO(it) })
    }

    @GetMapping("{id}")
    fun findById(@PathVariable id: Long): ResponseEntity<BookSummary> {
        return ResponseEntity.ok(bookService.findById(id))
    }

    @GetMapping("summary")
    fun allWithGenreKeyword(): ResponseEntity<List<BookSummary>> {
        return ResponseEntity.ok(bookService.indexWithGenresKeywords())
    }

    @GetMapping("newReleases")
    fun newReleases(): ResponseEntity<List<BookDTO>> {
        return ResponseEntity.ok(bookService.getNewReleases().map { BookDTO(it) })
    }

    @PostMapping("search")
    fun search(@RequestParam searchTerm: String): ResponseEntity<List<BookSummary>> {
        return ResponseEntity.ok(bookService.search(searchTerm))
    }

    @PostMapping("")
    fun createBook(@RequestBody bookDto: BookDTO): ResponseEntity<BookDTO> {
        val book = bookService.createBook(bookDto)
        return ResponseEntity.ok(BookDTO(book))
    }

    @PutMapping("{id}")
    fun updateBook(@PathVariable id: Long, @RequestBody bookDto: BookDTO): ResponseEntity<BookDTO> {
        val book = bookService.updateBook(id, bookDto)
        return ResponseEntity.ok(BookDTO(book))
    }

    @DeleteMapping("{id}")
    fun deleteBook(@PathVariable id: Long): ResponseEntity<Any> {
        val deleted = bookService.delete(id)
        return ResponseEntity.ok(deleted)
    }

}
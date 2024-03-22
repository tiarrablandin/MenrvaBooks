package com.menrva.controllers

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
    fun index(): ResponseEntity<List<Book>> {
        return ResponseEntity.ok(bookService.index())
    }

    @GetMapping("books/newReleases")
    fun newReleases(): ResponseEntity<List<Book>> {
        return ResponseEntity.ok(bookService.getNewReleases())
    }

    @PostMapping("books/search")
    fun search(@RequestParam searchTerm: String): ResponseEntity<List<Book>> {
        return ResponseEntity.ok(bookService.search(searchTerm))
    }

}
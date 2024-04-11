package com.menrva.controllers

import com.menrva.data.book.BookInteractionSummary
import com.menrva.data.book.BookSummary
import com.menrva.services.BookInteractionService
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.*

@RestController
@RequestMapping("/api/users")
@CrossOrigin("*", "http://localhost")
class UserController(private val bookInteractionService: BookInteractionService) {
    @GetMapping("/{username}/liked-books")
    fun getLikedBooks(@PathVariable username: String): ResponseEntity<List<BookInteractionSummary>> {
        return ResponseEntity.ok(bookInteractionService.findLikedBooksByUsername(username))
    }

    @GetMapping("/{username}/read-books")
    fun getReadBooks(@PathVariable username: String): ResponseEntity<List<BookInteractionSummary>> {
        return ResponseEntity.ok(bookInteractionService.findReadBooksByUsername(username))
    }

}
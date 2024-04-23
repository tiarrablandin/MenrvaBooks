package com.menrva.controllers

import com.menrva.data.book.BookDTO
import com.menrva.data.book.BookInteractionSummary
import com.menrva.data.book.BookSummary
import com.menrva.data.user.UserDTO
import com.menrva.services.BookInteractionService
import com.menrva.services.UserService
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.*

@RestController
@RequestMapping("/api/users")
@CrossOrigin("*", "http://localhost")
class UserController(
    private val bookInteractionService: BookInteractionService,
    private val userService: UserService
) {

    @GetMapping("")
    fun index(): ResponseEntity<List<UserDTO?>> {
        return ResponseEntity.ok(userService.index().map { UserDTO(it) })
    }

    @GetMapping("{id}")
    fun findById(@PathVariable id: Long): ResponseEntity<Any> {
        return ResponseEntity.ok(userService.findById(id))
    }

    @GetMapping("/{username}/liked-books")
    fun getLikedBooks(@PathVariable username: String): ResponseEntity<List<BookInteractionSummary>> {
        return ResponseEntity.ok(bookInteractionService.findLikedBooksByUsername(username))
    }

    @GetMapping("/{username}/read-books")
    fun getReadBooks(@PathVariable username: String): ResponseEntity<List<BookInteractionSummary>> {
        return ResponseEntity.ok(bookInteractionService.findReadBooksByUsername(username))
    }

}
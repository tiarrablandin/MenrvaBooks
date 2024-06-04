package com.menrva.controllers

import com.menrva.data.book.BookDTO
import com.menrva.data.book.BookInteractionSummary
import com.menrva.data.book.BookSummary
import com.menrva.data.user.UserDTO
import com.menrva.data.user.UserSummary
import com.menrva.entities.User
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

    @GetMapping("{tag}/info")
    fun findByTag(@PathVariable tag: String): ResponseEntity<UserSummary> {
//        return ResponseEntity.ok(userService.loadUserSummaryByIdentifier(tag))
        return ResponseEntity.ok(userService.loadUserSummaryByIdentifier(tag))
    }

    @GetMapping("{id}")
    fun findById(@PathVariable id: Long): ResponseEntity<Any> {
        return ResponseEntity.ok(userService.findById(id))
    }

    @PostMapping("{id}/active")
    fun toggleActive(@PathVariable id: Long): ResponseEntity<UserDTO> {
        return ResponseEntity.ok(UserDTO(userService.toggleActive(id)))
    }

    @GetMapping("/{tag}/liked-books")
    fun getLikedBooks(@PathVariable tag: String): ResponseEntity<List<BookInteractionSummary.Book>> {
        return ResponseEntity.ok(bookInteractionService.findLikedBooksByTag(tag))
    }

    @GetMapping("/{tag}/read-books")
    fun getReadBooks(@PathVariable tag: String): ResponseEntity<List<BookInteractionSummary.Book>> {
        return ResponseEntity.ok(bookInteractionService.findReadBooksByTag(tag))
    }

}
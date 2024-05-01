package com.menrva.controllers

import com.menrva.data.BookInteractionDTO
import com.menrva.data.book.BookDTO
import com.menrva.data.book.BookInteractionSummary
import com.menrva.entities.BookInteraction
import com.menrva.services.BookInteractionService
import com.menrva.services.BookService
import com.menrva.services.UserService
import org.springframework.http.ResponseEntity
import org.springframework.security.core.annotation.AuthenticationPrincipal
import org.springframework.web.bind.annotation.*
import java.security.Principal

@RestController
@RequestMapping("api/books")
@CrossOrigin("*", "http://localhost")
class InteractionsController(
    private val bookService: BookService,
    private val bookInteractionService: BookInteractionService,
    private val userService: UserService,
) {

    @GetMapping("{bookId}/interaction")
    fun getBookInteraction(
        @PathVariable bookId: Long, @AuthenticationPrincipal principal: Principal
    ): ResponseEntity<BookInteractionSummary> {
        val tag = principal.name
        return ResponseEntity.ok(bookInteractionService.findInteractionByBookAndUser(bookId, tag))
    }

    @PostMapping("/{id}/toggle-reviewed")
    fun toggleBookReviewed(@PathVariable id: Long): ResponseEntity<BookDTO> {
        val updatedBook = bookService.toggleReviewed(id)
        return ResponseEntity.ok(BookDTO(updatedBook))
    }

    @PostMapping("/{id}/favorite")
    fun toggleBookFavorite(@PathVariable id: Long, @AuthenticationPrincipal principal: Principal): ResponseEntity<BookInteractionDTO> {
        val user = userService.loadFullUserByIdentifier(principal.name)
        val updatedInteraction = bookInteractionService.toggleFavorite(id, user.id!!)
        return ResponseEntity.ok(BookInteractionDTO(updatedInteraction))
    }

    @PostMapping("/{id}/hasRead")
    fun toggleHasRead(@PathVariable id: Long, @AuthenticationPrincipal principal: Principal): ResponseEntity<BookInteractionDTO> {
        val user = userService.loadFullUserByIdentifier(principal.name)
        val updatedInteraction = bookInteractionService.toggleHasRead(id, user.id!!)
        return ResponseEntity.ok(BookInteractionDTO(updatedInteraction))
    }

    @PostMapping("/{id}/interested")
    fun toggleInterested(@PathVariable id: Long, @AuthenticationPrincipal principal: Principal): ResponseEntity<BookInteractionDTO> {
        val user = userService.loadFullUserByIdentifier(principal.name)
        val updatedInteraction = bookInteractionService.toggleInterested(id, user.id!!)
        return ResponseEntity.ok(BookInteractionDTO(updatedInteraction))
    }

    @PostMapping("{bookId}/react")
    fun toggleLikeDislike(
        @PathVariable bookId: Long, @AuthenticationPrincipal principal: Principal, @RequestParam("status") status: Int
    ): ResponseEntity<BookInteraction> {
        val user = userService.loadFullUserByIdentifier(principal.name)
        return ResponseEntity.ok(bookInteractionService.toggleLikeDislike(bookId, user.id!!, status))
    }
}
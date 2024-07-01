package com.menrva.controllers

import com.menrva.data.author.AuthorDTO
import com.menrva.data.author.AuthorSummary
import com.menrva.data.book.BookDTO
import com.menrva.data.book.BookSummary
import com.menrva.data.user.UserDTO
import com.menrva.entities.Author
import com.menrva.services.AuthorService
import com.menrva.services.UserService
import org.springframework.http.ResponseEntity
import org.springframework.security.core.annotation.AuthenticationPrincipal
import org.springframework.web.bind.annotation.*
import java.security.Principal
import java.util.*

@RestController
@RequestMapping("api/authors")
@CrossOrigin("*", "http://localhost")
class AuthorController(
    private val authorService: AuthorService,
    private val userService: UserService,
) {

    @GetMapping("")
    fun index(): ResponseEntity<List<AuthorSummary>> {
        return ResponseEntity.ok(authorService.index())
    }

    @GetMapping("/name/{penName}")
    fun findByPenName(@PathVariable penName: String): ResponseEntity<List<AuthorSummary>> {
        val author = authorService.findByPenName(penName)
        return ResponseEntity.ok(authorService.findByPenName(penName))
    }

    @GetMapping("{id}")
    fun findById(@PathVariable id: Long): ResponseEntity<Optional<Author>> {
        val author = authorService.findById(id)
        return ResponseEntity.ok(authorService.findById(id))
    }

    @GetMapping("{id}/books")
    fun findBooksByAuthorId(@PathVariable id: Long): ResponseEntity<List<BookSummary>> {
        return ResponseEntity.ok(authorService.findByAuthorId(id))
    }

    @PostMapping("{id}/toggleFollow")
    fun toggleFollowAuthor(
        @PathVariable id: Long, @AuthenticationPrincipal principal: Principal
    ): ResponseEntity<Boolean> {
        val user = userService.loadFullUserByIdentifier(principal.name)
        val isFollowing = user.authors.any { it.id == id }
        val updatedUser = if (isFollowing) {
            authorService.unfollowAuthor(user.id!!, id)
        } else {
            authorService.followAuthor(user.id!!, id)
        }
        return ResponseEntity.ok(!isFollowing)
    }

    @GetMapping("{id}/follows")
    fun checkIfFollowingAuthor(
        @PathVariable id: Long, @AuthenticationPrincipal principal: Principal
    ): ResponseEntity<Boolean> {
        val user = userService.loadFullUserByIdentifier(principal.name)
        return ResponseEntity.ok(user.authors.any { it.id == id })
    }

    @PostMapping("{id}/toggle-reviewed")
    fun toggleAuthorReviewed(@PathVariable id: Long): ResponseEntity<AuthorDTO> {
        val updatedAuthor = authorService.toggleReviewed(id)
        return ResponseEntity.ok(AuthorDTO(updatedAuthor))
    }

    @PostMapping("")
    fun create(@RequestBody author: Author): ResponseEntity<Author> {
        return ResponseEntity.ok(authorService.create(author))
    }

    @DeleteMapping("{id}")
    fun deleteAuthor(@PathVariable id: Long): ResponseEntity<Any> {
        val deleted = authorService.delete(id)
        return ResponseEntity.ok(deleted)
    }

}
package com.menrva.controllers

import com.menrva.data.author.AuthorDTO
import com.menrva.data.book.BookDTO
import com.menrva.entities.Author
import com.menrva.services.AuthorService
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.*
import java.util.*

@RestController
@RequestMapping("api/authors")
@CrossOrigin("*", "http://localhost")
class AuthorController(
    private val authorService: AuthorService
) {

    @GetMapping("")
    fun index(): ResponseEntity<List<Author>> {
        return ResponseEntity.ok(authorService.index())
    }

    @GetMapping("{id}")
    fun findById(@PathVariable id: Long): ResponseEntity<Optional<Author>> {
        val author = authorService.findById(id)
        return ResponseEntity.ok(authorService.findById(id))
    }

    @PostMapping("/{id}/toggle-reviewed")
    fun toggleAuthorReviewed(@PathVariable id: Long): ResponseEntity<AuthorDTO> {
        val updatedAuthor = authorService.toggleReviewed(id)
        return ResponseEntity.ok(AuthorDTO(updatedAuthor))
    }

    @PostMapping("")
    fun create(@RequestBody author: Author): ResponseEntity<Author> {
        return ResponseEntity.ok(authorService.create(author))
    }

}
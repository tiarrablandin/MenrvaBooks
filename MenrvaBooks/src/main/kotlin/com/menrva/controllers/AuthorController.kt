package com.menrva.controllers

import com.menrva.entities.Author
import com.menrva.services.AuthorService
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.*

@RestController
@RequestMapping("api")
@CrossOrigin("*", "http://localhost")
class AuthorController(
    private val authorService: AuthorService
) {

    @GetMapping("authors")
    fun index(): ResponseEntity<List<Author>> {
        return ResponseEntity.ok(authorService.index())
    }

    @PostMapping("authors")
    fun create(@RequestBody author: Author): ResponseEntity<Author> {
        return ResponseEntity.ok(authorService.create(author))
    }

}
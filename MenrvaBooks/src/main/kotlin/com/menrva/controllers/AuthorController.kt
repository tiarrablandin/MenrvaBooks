package com.menrva.controllers

import com.menrva.entities.Author
import com.menrva.services.AuthorService
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.CrossOrigin
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController

@RestController
@RequestMapping("api")
@CrossOrigin("*", "http://localhost")
class AuthorController(
    private val authorService: AuthorService
) {

    @GetMapping("authors")
    fun index(): ResponseEntity<List<Author>> {
        println("#################################")
        println("in author controller")
        val authors = authorService.index()
        return ResponseEntity.ok(authors)
    }

}
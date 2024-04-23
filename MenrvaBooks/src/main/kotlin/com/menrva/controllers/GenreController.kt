package com.menrva.controllers

import com.menrva.data.GenreDTO
import com.menrva.data.book.BookDTO
import com.menrva.entities.Book
import com.menrva.entities.Genre
import com.menrva.entities.Keyword
import com.menrva.services.BookService
import com.menrva.services.GenreService
import com.menrva.services.KeywordService
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.*

@RestController
@RequestMapping("api/genres")
@CrossOrigin("*", "http://localhost")
class GenreController(private val genreService: GenreService) {
    @GetMapping("")
    fun index(): ResponseEntity<List<GenreDTO>> {
        return ResponseEntity.ok(genreService.index().map { GenreDTO(it) })
    }

    @GetMapping("{id}")
    fun findById(@PathVariable id: Long): ResponseEntity<Any> {
        return ResponseEntity.ok(genreService.findById(id))
    }

    @PostMapping("/{id}/toggle-reviewed")
    fun toggleGenreReviewed(@PathVariable id: Long): ResponseEntity<GenreDTO> {
        val updatedGenre = genreService.toggleReviewed(id)
        return ResponseEntity.ok(GenreDTO(updatedGenre))
    }
}
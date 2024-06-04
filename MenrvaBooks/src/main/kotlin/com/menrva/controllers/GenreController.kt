package com.menrva.controllers

import com.menrva.data.GenreDTO
import com.menrva.services.GenreService
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

    @PostMapping("")
    fun createGenre(@RequestBody genreName: String): ResponseEntity<GenreDTO> {
        val genre = genreService.create(genreName)
        return ResponseEntity.ok(GenreDTO(genre))
    }

    @PutMapping("{id}")
    fun updateGenre(@PathVariable id: Long, @RequestBody genreName: String): ResponseEntity<GenreDTO> {
        val genre = genreService.updateGenreName(id, genreName)
        return ResponseEntity.ok(GenreDTO(genre))
    }

    @PostMapping("/{id}/toggle-reviewed")
    fun toggleGenreReviewed(@PathVariable id: Long): ResponseEntity<GenreDTO> {
        val updatedGenre = genreService.toggleReviewed(id)
        return ResponseEntity.ok(GenreDTO(updatedGenre))
    }
}
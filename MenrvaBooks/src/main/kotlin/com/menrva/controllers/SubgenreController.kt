package com.menrva.controllers

import com.menrva.data.GenreDTO
import com.menrva.data.KeywordDTO
import com.menrva.data.SubGenreDTO
import com.menrva.entities.SubGenre
import com.menrva.services.SubgenreService
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.*

@RestController
@RequestMapping("api/subgenres")
@CrossOrigin("*", "http://localhost")
class SubgenreController(private val subgenreService: SubgenreService) {
    @GetMapping("")
    fun index(): ResponseEntity<List<SubGenreDTO>> {
        return ResponseEntity.ok(subgenreService.index().map { SubGenreDTO(it) })
    }

    @GetMapping("{id}")
    fun findById(@PathVariable id: Long): ResponseEntity<Any> {
        return ResponseEntity.ok(subgenreService.findById(id))
    }

    @PostMapping("")
    fun createSubgenre(@RequestBody subgenreName: String): ResponseEntity<SubGenreDTO> {
        val subgenre = subgenreService.create(subgenreName)
        return ResponseEntity.ok(SubGenreDTO(subgenre))
    }

    @PutMapping("{id}")
    fun updateSubgenre(@PathVariable id: Long, @RequestBody subgenreName: String): ResponseEntity<SubGenreDTO> {
        val subgenre = subgenreService.updateGenreName(id, subgenreName)
        return ResponseEntity.ok(SubGenreDTO(subgenre))
    }

    @PostMapping("/{id}/toggle-reviewed")
    fun toggleSubGenreReviewed(@PathVariable id: Long): ResponseEntity<SubGenreDTO> {
        val updatedSubgenre = subgenreService.toggleReviewed(id)
        return ResponseEntity.ok(SubGenreDTO(updatedSubgenre))
    }

    @DeleteMapping("{id}")
    fun deleteSubgenre(@PathVariable id: Long): ResponseEntity<Any> {
        val deleted = subgenreService.delete(id)
        return ResponseEntity.ok(deleted)
    }
}
package com.menrva.controllers

import com.menrva.data.KeywordDTO
import com.menrva.data.TagDTO
import com.menrva.entities.Book
import com.menrva.entities.Keyword
import com.menrva.entities.Tag
import com.menrva.services.BookService
import com.menrva.services.KeywordService
import com.menrva.services.TagService
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.*

@RestController
@RequestMapping("api/tags")
@CrossOrigin("*", "http://localhost")
class TagController(private val tagService: TagService) {
    @GetMapping("")
    fun index(): ResponseEntity<List<TagDTO>> {
        return ResponseEntity.ok(tagService.index().map { TagDTO(it) })
    }

    @GetMapping("{id}")
    fun findById(@PathVariable id: Long): ResponseEntity<Any> {
        return ResponseEntity.ok(tagService.findById(id))
    }

    @PostMapping("/{id}/toggle-reviewed")
    fun toggleTagReviewed(@PathVariable id: Long): ResponseEntity<TagDTO> {
        val updatedTag = tagService.toggleReviewed(id)
        return ResponseEntity.ok(TagDTO(updatedTag))
    }
}
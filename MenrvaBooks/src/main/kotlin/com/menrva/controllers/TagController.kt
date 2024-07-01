package com.menrva.controllers

import com.menrva.data.KeywordDTO
import com.menrva.data.SubGenreDTO
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

    @PostMapping("")
    fun createTag(@RequestBody tagName: String): ResponseEntity<TagDTO> {
        val tag = tagService.create(tagName)
        return ResponseEntity.ok(TagDTO(tag))
    }

    @PutMapping("{id}")
    fun updateKeyword(@PathVariable id: Long, @RequestBody tagName: String): ResponseEntity<TagDTO> {
        val tag = tagService.updateTagName(id, tagName)
        return ResponseEntity.ok(TagDTO(tag))
    }

    @PostMapping("/{id}/toggle-reviewed")
    fun toggleTagReviewed(@PathVariable id: Long): ResponseEntity<TagDTO> {
        val updatedTag = tagService.toggleReviewed(id)
        return ResponseEntity.ok(TagDTO(updatedTag))
    }

    @DeleteMapping("{id}")
    fun deleteTag(@PathVariable id: Long): ResponseEntity<Any> {
        val deleted = tagService.delete(id)
        return ResponseEntity.ok(deleted)
    }
}
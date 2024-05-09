package com.menrva.controllers

import com.menrva.data.GenreDTO
import com.menrva.data.KeywordDTO
import com.menrva.entities.Book
import com.menrva.entities.Keyword
import com.menrva.services.BookService
import com.menrva.services.KeywordService
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.*

@RestController
@RequestMapping("api/keywords")
@CrossOrigin("*", "http://localhost")
class KeywordController(private val keywordService: KeywordService) {
    @GetMapping("")
    fun index(): ResponseEntity<List<KeywordDTO>> {
        return ResponseEntity.ok(keywordService.index().map { KeywordDTO(it) })
    }

    @GetMapping("{id}")
    fun findById(@PathVariable id: Long): ResponseEntity<Any> {
        return ResponseEntity.ok(keywordService.findById(id))
    }

    @PostMapping("")
    fun createKeyword(@RequestBody keywordName: String): ResponseEntity<KeywordDTO> {
        val keyword = keywordService.create(keywordName)
        return ResponseEntity.ok(KeywordDTO(keyword))
    }

    @PutMapping("{id}")
    fun updateKeyword(@PathVariable id: Long, @RequestBody keywordName: String): ResponseEntity<KeywordDTO> {
        val keyword = keywordService.updateKeywordName(id, keywordName)
        return ResponseEntity.ok(KeywordDTO(keyword))
    }

    @PostMapping("/{id}/toggle-reviewed")
    fun toggleKeywordReviewed(@PathVariable id: Long): ResponseEntity<KeywordDTO> {
        val updatedKeyword = keywordService.toggleReviewed(id)
        return ResponseEntity.ok(KeywordDTO(updatedKeyword))
    }
}
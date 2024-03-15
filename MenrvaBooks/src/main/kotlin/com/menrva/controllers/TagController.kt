package com.menrva.controllers

import com.menrva.entities.Book
import com.menrva.entities.Keyword
import com.menrva.entities.Tag
import com.menrva.services.BookService
import com.menrva.services.KeywordService
import com.menrva.services.TagService
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.CrossOrigin
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController

@RestController
@RequestMapping("api")
@CrossOrigin("*", "http://localhost")
class TagController(private val tagService: TagService) {
    @GetMapping("tags")
    fun index(): ResponseEntity<List<Tag>> {
        return ResponseEntity.ok(tagService.index())
    }
}
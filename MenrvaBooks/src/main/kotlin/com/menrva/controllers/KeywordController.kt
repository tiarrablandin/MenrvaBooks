package com.menrva.controllers

import com.menrva.entities.Book
import com.menrva.entities.Keyword
import com.menrva.services.BookService
import com.menrva.services.KeywordService
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.CrossOrigin
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController

@RestController
@RequestMapping("api")
@CrossOrigin("*", "http://localhost")
class KeywordController(private val keywordService: KeywordService) {
    @GetMapping("keywords")
    fun index(): ResponseEntity<List<Keyword>> {
        return ResponseEntity.ok(keywordService.index())
    }
}
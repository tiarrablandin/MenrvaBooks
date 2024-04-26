package com.menrva.controllers

import com.menrva.data.book.BookDTO
import com.menrva.services.RecommendationService
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.*

@RestController
@RequestMapping("/api/recommendations")
@CrossOrigin("*", "http://localhost")
class RecommendationController(private val recommendationService: RecommendationService) {

    @GetMapping("/forUser")
    fun getRecommendations(@RequestParam("tag") tag: String): ResponseEntity<List<BookDTO>> {
        val recommendedBooks = recommendationService.getRecommendationsForUser(tag)
        return ResponseEntity.ok(recommendedBooks)
    }
}
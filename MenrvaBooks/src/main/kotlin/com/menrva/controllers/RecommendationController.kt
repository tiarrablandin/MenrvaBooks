package com.menrva.controllers

import com.menrva.data.BookDTO
import com.menrva.entities.Book
import com.menrva.services.RecommendationService
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.*

@RestController
@RequestMapping("/api/recommendations")
@CrossOrigin("*", "http://localhost")
class RecommendationController(private val recommendationService: RecommendationService) {

    @GetMapping("/forUser")
    fun getRecommendations(@RequestParam("username") username: String): ResponseEntity<List<BookDTO>> {
        val recommendedBooks = recommendationService.getRecommendationsForUser(username)
        return ResponseEntity.ok(recommendedBooks)
    }
}
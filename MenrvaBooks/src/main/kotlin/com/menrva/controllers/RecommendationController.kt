package com.menrva.controllers

import com.menrva.data.book.BookDTO
import com.menrva.services.RecommendationService
import org.springframework.http.ResponseEntity
import org.springframework.security.core.annotation.AuthenticationPrincipal
import org.springframework.web.bind.annotation.*
import java.security.Principal

@RestController
@RequestMapping("/api/recommendations")
@CrossOrigin("*", "http://localhost")
class RecommendationController(private val recommendationService: RecommendationService) {

    @GetMapping("/user")
    fun getRecommendations(@AuthenticationPrincipal principal: Principal): ResponseEntity<List<BookDTO>> {
        val recommendedBooks = recommendationService.getRecommendationsForUser(principal.name)
        return ResponseEntity.ok(recommendedBooks)
    }
}
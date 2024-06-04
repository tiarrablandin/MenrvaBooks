package com.menrva.controllers

import com.menrva.entities.UserProfile
import com.menrva.services.RecommendationService
import com.menrva.services.UserProfileService
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.*

@RestController
@RequestMapping("/api/profile")
@CrossOrigin("*", "http://localhost")
class UserProfileController(
    private val userProfileService: UserProfileService
) {
    @PostMapping("/initialize/{userId}")
    fun initializeUserProfile(@PathVariable userId: Long): ResponseEntity<UserProfile> {
        return ResponseEntity.ok(userProfileService.initializeOrUpdateUserProfile(userId))
    }

}

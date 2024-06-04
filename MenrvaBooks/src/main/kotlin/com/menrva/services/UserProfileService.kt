package com.menrva.services

import com.google.gson.Gson
import com.google.gson.JsonObject
import com.menrva.entities.UserProfile
import com.menrva.exceptions.UserNotFoundException
import com.menrva.repositories.UserRepository
import org.springframework.stereotype.Service

@Service
class UserProfileService(
    private val userRepo: UserRepository,
) {
    fun initializeOrUpdateUserProfile(userId: Long): UserProfile {
        val user = userRepo.findById(userId).orElseThrow { UserNotFoundException("User not found: $userId") }
        if (user.userProfile == null) {
            user.userProfile = UserProfile(user = user)
        }

        val interactions = user.bookInteractions
        val genreWeights = mutableMapOf<String, Double>()
        val keywordWeights = mutableMapOf<String, Double>()

        // Aggregate weights for genres, subgenres, keywords, and tags
        interactions.forEach { interaction ->
            interaction.book.genres.forEach { genre ->
                genreWeights[genre.name!!] = genreWeights.getOrDefault(genre.name, 0.0) + 1.0
            }
            interaction.book.subGenres.forEach { subGenre ->
                genreWeights[subGenre.name!!] = genreWeights.getOrDefault(subGenre.name, 0.0) + 1.0
            }
            interaction.book.keywords.forEach { keyword ->
                keywordWeights[keyword.name!!] = keywordWeights.getOrDefault(keyword.name, 0.0) + 1.0
            }
            interaction.book.tags.forEach { tag ->
                keywordWeights[tag.name!!] = keywordWeights.getOrDefault(tag.name, 0.0) + 1.0
            }
        }

        // Convert the map to a JSON string and store in preference_vector
        val gson = Gson()
        user.userProfile!!.preferenceVector = gson.toJson(mapOf("Genres" to genreWeights, "Keywords" to keywordWeights))
        userRepo.save(user)

        return user.userProfile!!
    }
}
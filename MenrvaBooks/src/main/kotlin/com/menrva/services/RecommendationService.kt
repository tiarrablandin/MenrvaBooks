package com.menrva.services

import com.google.gson.Gson
import com.google.gson.reflect.TypeToken
import com.menrva.data.book.BookDTO
import com.menrva.exceptions.UserNotFoundException
import com.menrva.exceptions.UserProfileNotFoundException
import com.menrva.repositories.BookInteractionRepository
import com.menrva.repositories.BookJpaRepository
import com.menrva.repositories.UserRepository
import org.springframework.stereotype.Service

@Service
class RecommendationService(
    private val userRepo: UserRepository,
    private val bookRepo: BookJpaRepository,
    private val bookInteractionRepo: BookInteractionRepository,
) {
    fun getRecommendationsForUser(tag: String): List<BookDTO> {
        val user = userRepo.findByTag(tag) ?: throw UserNotFoundException()
        val userProfile =
            user.userProfile ?: throw UserProfileNotFoundException("User profile not found for user: $tag")

        val gson = Gson()
        val type = object : TypeToken<Map<String, Map<String, Double>>>() {}.type
        println("************************************ ${userProfile.preferenceVector}")
        val preferenceVector: Map<String, Map<String, Double>> = gson.fromJson(userProfile.preferenceVector, type) as Map<String, Map<String, Double>>
        println("################################### $preferenceVector")

        // Extract top genres and keywords
        val genres = preferenceVector["Genres"]?.entries?.sortedByDescending { it.value }?.map { it.key }?.take(3) ?: listOf()
        val keywords = preferenceVector["Keywords"]?.entries?.sortedByDescending { it.value }?.map { it.key }?.take(3) ?: listOf()

        val recommendedBooks = bookRepo.findBooksByGenresSubgenresOrKeywordsTags(genres, keywords)
            .filterNot { user.bookInteractions.any { interaction -> interaction.book.id == it.id } }
            .map { book -> BookDTO(book) }
        return recommendedBooks
    }
}
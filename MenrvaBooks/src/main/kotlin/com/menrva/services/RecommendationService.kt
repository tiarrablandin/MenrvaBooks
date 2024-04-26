package com.menrva.services

import com.menrva.data.book.BookDTO
import com.menrva.exceptions.UserNotFoundException
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
        val interactions = bookInteractionRepo.findByUserId(user.id!!)
        val preferredGenres = interactions.flatMap { it.book.genres }.groupBy { it }.maxBy { it.value.size }
        val preferredKeywords = interactions.flatMap { it.book.keywords }.groupBy { it }.maxBy { it.value.size }

        val recommendedBooks = bookRepo.findBooksByGenresAndKeywords(preferredGenres.value, preferredKeywords.value)
            .filterNot { user.bookInteractions.any { interaction -> interaction.book.id == it.id } }
            .map { book -> BookDTO(book) }
        return recommendedBooks
    }
}
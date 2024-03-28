package com.menrva.services

import com.menrva.data.BookDTO
import com.menrva.exceptions.UserNotFoundException
import com.menrva.repositories.BookInteractionsRepository
import com.menrva.repositories.BookJpaRepository
import com.menrva.repositories.UserRepository
import org.springframework.stereotype.Service

@Service
class RecommendationService(
    private val userRepo: UserRepository,
    private val bookRepo: BookJpaRepository,
    private val bookInteractionsRepo: BookInteractionsRepository,
) {
    fun getRecommendationsForUser(username: String): List<BookDTO> {
        val user = userRepo.findByUsername(username) ?: throw UserNotFoundException()
        val interactions = bookInteractionsRepo.findByUserId(user.id)
        val preferredGenres = interactions.flatMap { it.book.genres }.groupBy { it }.maxBy { it.value.size }
        val preferredKeywords = interactions.flatMap { it.book.keywords }.groupBy { it }.maxBy { it.value.size }

        val recommendedBooks = bookRepo.findBooksByGenresAndKeywords(preferredGenres.value, preferredKeywords.value)
            .filterNot { user.bookInteractions.any { interaction -> interaction.book.id == it.id } }
            .map { book -> BookDTO(book) }
        return recommendedBooks
    }
}
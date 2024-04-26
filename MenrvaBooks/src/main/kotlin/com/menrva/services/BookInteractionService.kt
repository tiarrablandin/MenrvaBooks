package com.menrva.services

import com.menrva.data.book.BookInteractionSummary
import com.menrva.entities.BookInteraction
import com.menrva.entities.BookInteractionId
import com.menrva.repositories.BookInteractionRepository
import org.springframework.stereotype.Service

@Service
class BookInteractionService(private val bookInteractionRepository: BookInteractionRepository) {

    fun findLikedBooksByTag(tag: String): List<BookInteractionSummary> {
        return bookInteractionRepository.findLikedBooksByUserSummary(tag)
    }

    fun findReadBooksByTag(tag: String): List<BookInteractionSummary> {
        return bookInteractionRepository.findReadBooksByTag(tag)
    }

    fun toggleLikeDislike(bookId: Long, userId: Long, status: Int): BookInteraction {
        val bookInteractionId = BookInteractionId(bookId, userId)
        val interaction = bookInteractionRepository.findById(bookInteractionId).orElseGet {
            BookInteraction(bookInteractionId, status)
        }

        interaction.likeDislike = when (status) {
            1, -1 -> status // Like or Dislike
            else -> 0 // Neutral or reset
        }

        return bookInteractionRepository.save(interaction)
    }
}
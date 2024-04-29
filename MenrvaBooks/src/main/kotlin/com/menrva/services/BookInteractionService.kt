package com.menrva.services

import com.menrva.data.book.BookInteractionSummary
import com.menrva.entities.BookInteraction
import com.menrva.entities.BookInteractionId
import com.menrva.repositories.BookInteractionRepository
import com.menrva.repositories.BookJpaRepository
import com.menrva.repositories.UserRepository
import org.springframework.stereotype.Service

@Service
class BookInteractionService(
    private val bookInteractionRepository: BookInteractionRepository,
    private val bookRepository: BookJpaRepository,
    private val userRepository: UserRepository
) {

    fun findLikedBooksByTag(tag: String): List<BookInteractionSummary> {
        return bookInteractionRepository.findLikedBooksByUserSummary(tag)
    }

    fun findReadBooksByTag(tag: String): List<BookInteractionSummary> {
        return bookInteractionRepository.findReadBooksByTag(tag)
    }

    fun toggleLikeDislike(bookId: Long, userId: Long, status: Int): BookInteraction {
        val bookInteractionId = BookInteractionId(userId, bookId)
        println("********** $bookInteractionId")
        val interaction = bookInteractionRepository.findById(bookInteractionId).orElseGet {
            val existingBook = bookRepository.findById(bookId).orElseThrow {
                RuntimeException("Book not found with id: $bookId")
            }
            val existingUser = userRepository.findById(userId).orElseThrow {
                RuntimeException("User not found with id: $userId")
            }
            BookInteraction(bookInteractionId, existingBook, existingUser, status)
        }
        println("########## $interaction")

        interaction.likeDislike = when (status) {
            1, -1 -> status
            else -> 0
        }

        return bookInteractionRepository.save(interaction)
    }

    fun findInteractionByBookAndUser(bookId: Long, tag: String): BookInteractionSummary? {
        val interaction = bookInteractionRepository.findByBookIdAndUserTag(bookId, tag)
        println("************* $interaction")
        return interaction
    }
}
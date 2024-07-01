package com.menrva.services

import com.menrva.data.comment.CommentSummary
import com.menrva.data.comment.CreateCommentDTO
import com.menrva.entities.Comment
import com.menrva.entities.User
import com.menrva.repositories.BookJpaRepository
import com.menrva.repositories.CommentRepository
import com.menrva.repositories.UserRepository
import org.springframework.security.core.userdetails.UsernameNotFoundException
import org.springframework.stereotype.Service
import java.util.*

@Service
class CommentService(
    private val commentRepo: CommentRepository,
    private val userRepo: UserRepository,
    private val bookRepo: BookJpaRepository,
) {
    fun index(): List<CommentSummary> {
        return commentRepo.index()
    }

    fun findById(id: Long): CommentSummary {
        return commentRepo.findCommentById(id)
    }

    fun findByBookId(id: Long): List<CommentSummary> {
        return commentRepo.findByBookId(id)
    }

    fun create(commentDTO: CreateCommentDTO, identifier: String, bookId: Long): Comment {
        val user: User = userRepo.findByTag(identifier)  // Use a simple method for testing
            ?: userRepo.findByEmail(identifier)
            ?: throw UsernameNotFoundException("User not found with identifier: $identifier")

        val book = bookRepo.findById(bookId).orElseThrow { RuntimeException("Book not found.") }

        val comment = Comment(
            comment = commentDTO.comment,
            user = user,
            book = book,
        )
        return commentRepo.save(comment)
    }

    fun delete(id: Long): Boolean {
        val comment = commentRepo.findById(id).orElseThrow { RuntimeException("Comment not found") }
        commentRepo.delete(comment)
        return commentRepo.existsById(id)
    }

    fun toggleReviewed(id: Long): Comment {
        val comment = commentRepo.findById(id).orElseThrow { RuntimeException("Comment not found") }
        val newReviewedStatus = comment.reviewed?.not() ?: true
        comment.reviewed = newReviewedStatus
        return commentRepo.save(comment)
    }
}
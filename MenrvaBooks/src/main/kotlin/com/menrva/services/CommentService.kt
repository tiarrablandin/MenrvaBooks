package com.menrva.services

import com.menrva.entities.Comment
import com.menrva.repositories.CommentRepository
import org.springframework.stereotype.Service
import java.util.*

@Service
class CommentService(
    private val commentRepo: CommentRepository
) {
    fun index(): List<Comment> {
        return commentRepo.findAll()
    }

    fun findById(id: Long): Optional<Comment> {
        return commentRepo.findById(id)
    }

    fun toggleReviewed(id: Long): Comment {
        val comment = commentRepo.findById(id).orElseThrow { RuntimeException("Book not found") }
        val newReviewedStatus = comment.reviewed?.not() ?: true
        comment.reviewed = newReviewedStatus
        return commentRepo.save(comment)
    }
}
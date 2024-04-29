package com.menrva.services

import com.menrva.data.comment.CommentSummary
import com.menrva.entities.Comment
import com.menrva.repositories.CommentRepository
import org.springframework.stereotype.Service
import java.util.*

@Service
class CommentService(
    private val commentRepo: CommentRepository
) {
    fun index(): List<CommentSummary> {
        return commentRepo.index()
    }

    fun findById(id: Long): CommentSummary {
        return commentRepo.findCommentById(id)
    }

    fun toggleReviewed(id: Long): Comment {
        val comment = commentRepo.findById(id).orElseThrow { RuntimeException("Book not found") }
        val newReviewedStatus = comment.reviewed?.not() ?: true
        comment.reviewed = newReviewedStatus
        return commentRepo.save(comment)
    }
}
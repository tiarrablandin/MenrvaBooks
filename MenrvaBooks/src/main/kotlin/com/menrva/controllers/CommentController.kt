package com.menrva.controllers

import com.menrva.data.comment.CommentDTO
import com.menrva.data.comment.CommentSummary
import com.menrva.services.CommentService
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.*

@RestController
@RequestMapping("api/comments")
@CrossOrigin("*", "http://localhost")
class CommentController (private val commentService: CommentService) {
    @GetMapping("")
    fun index(): ResponseEntity<List<CommentSummary>> {
        return ResponseEntity.ok(commentService.index())
    }

    @GetMapping("{id}")
    fun findById(@PathVariable id: Long): ResponseEntity<CommentSummary> {
        return ResponseEntity.ok(commentService.findById(id))
    }

    @PostMapping("/{id}/toggle-reviewed")
    fun toggleCommentReviewed(@PathVariable id: Long): ResponseEntity<CommentDTO> {
        val updatedComment = commentService.toggleReviewed(id)
        return ResponseEntity.ok(CommentDTO(updatedComment))
    }
}
package com.menrva.controllers

import com.menrva.data.CommentDTO
import com.menrva.services.CommentService
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.*

@RestController
@RequestMapping("api/comments")
@CrossOrigin("*", "http://localhost")
class CommentController (private val commentService: CommentService) {
    @GetMapping("")
    fun index(): ResponseEntity<List<CommentDTO>> {
        return ResponseEntity.ok(commentService.index().map { CommentDTO(it) })
    }

    @GetMapping("{id}")
    fun findById(@PathVariable id: Long): ResponseEntity<Any> {
        return ResponseEntity.ok(commentService.findById(id))
    }

    @PostMapping("/{id}/toggle-reviewed")
    fun toggleCommentReviewed(@PathVariable id: Long): ResponseEntity<CommentDTO> {
        val updatedComment = commentService.toggleReviewed(id)
        return ResponseEntity.ok(CommentDTO(updatedComment))
    }
}
package com.menrva.controllers

import com.menrva.data.comment.CommentDTO
import com.menrva.data.comment.CommentSummary
import com.menrva.data.comment.CreateCommentDTO
import com.menrva.services.CommentService
import com.menrva.services.UserService
import org.springframework.http.ResponseEntity
import org.springframework.security.core.annotation.AuthenticationPrincipal
import org.springframework.web.bind.annotation.*
import java.security.Principal

@RestController
@RequestMapping("api/comments")
@CrossOrigin("*", "http://localhost")
class CommentController(
    private val commentService: CommentService,
    private val userService: UserService,
) {

    @GetMapping("")
    fun index(): ResponseEntity<List<CommentSummary>> {
        return ResponseEntity.ok(commentService.index())
    }

    @GetMapping("{id}")
    fun findById(@PathVariable id: Long): ResponseEntity<CommentSummary> {
        return ResponseEntity.ok(commentService.findById(id))
    }

    @GetMapping("book/{id}")
    fun findByBookId(@PathVariable id: Long): ResponseEntity<List<CommentSummary>> {
        return ResponseEntity.ok(commentService.findByBookId(id))
    }

    @DeleteMapping("{id}")
    fun deleteById(@PathVariable id: Long): ResponseEntity<Boolean> {
        return ResponseEntity.ok(commentService.deleteById(id))
    }

    @PostMapping("")
    fun create(
        @RequestBody comment: CreateCommentDTO,
        @AuthenticationPrincipal principal: Principal
    ): ResponseEntity<CommentDTO> {
        return ResponseEntity.ok(CommentDTO(commentService.create(comment, principal.name, comment.bookId)))
    }

    @PostMapping("{id}/toggle-reviewed")
    fun toggleCommentReviewed(@PathVariable id: Long): ResponseEntity<CommentDTO> {
        val updatedComment = commentService.toggleReviewed(id)
        return ResponseEntity.ok(CommentDTO(updatedComment))
    }
}
package com.menrva.repositories

import com.menrva.entities.Comment
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.stereotype.Repository

@Repository
interface CommentRepository : JpaRepository<Comment, Int>{
    fun findCommentById(id: Int): Comment?
}
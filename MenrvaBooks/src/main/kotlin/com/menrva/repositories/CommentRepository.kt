package com.menrva.repositories

import com.menrva.data.comment.CommentSummary
import com.menrva.data.series.SeriesSummary
import com.menrva.entities.Comment
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.data.jpa.repository.Query
import org.springframework.data.repository.query.Param
import org.springframework.stereotype.Repository

@Repository
interface CommentRepository : JpaRepository<Comment, Long>{
    @Query("SELECT c FROM Comment c")
    fun index(): List<CommentSummary>
    @Query("SELECT c FROM Comment c WHERE c.user.tag = :tag")
    fun findByTag(@Param("tag") tag: String): List<CommentSummary>
    @Query("SELECT c FROM Comment c WHERE c.id = :id")
    fun findCommentById(@Param("id") id: Long): CommentSummary
}
package com.menrva.data.comment

import com.menrva.entities.Comment
import java.time.LocalDate

data class CommentDTO(
    val id: Long?,
    val comment: String?,
    val dateAdded: LocalDate?,
    val reviewed: Boolean?,
) {
    constructor(comment: Comment) : this(
        id = comment.id,
        comment = comment.comment,
        dateAdded = comment.dateAdded,
        reviewed = comment.reviewed,
    )
}
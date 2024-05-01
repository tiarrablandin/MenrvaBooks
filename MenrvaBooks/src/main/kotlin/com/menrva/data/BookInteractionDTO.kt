package com.menrva.data

import com.menrva.data.author.AuthorDTO
import com.menrva.data.book.BookDTO
import com.menrva.data.series.SeriesDTO
import com.menrva.data.user.UserDTO
import com.menrva.entities.Book
import com.menrva.entities.BookInteraction
import com.menrva.entities.BookInteractionId
import java.time.LocalDate

data class BookInteractionDTO(
    val id:  BookInteractionId,
    val interested: Boolean?,
    val hasRead: Boolean?,
    val favorite: Boolean?,
    val likeDislike: Int?,
    val user: UserDTO,
    val book: BookDTO,
) {
    constructor(bookInteraction: BookInteraction) : this(
        id = bookInteraction.id,
        interested = bookInteraction.interested,
        hasRead = bookInteraction.hasRead,
        favorite = bookInteraction.favorite,
        likeDislike = bookInteraction.likeDislike,
        user = UserDTO(bookInteraction.user),
        book = BookDTO(bookInteraction.book),
    )
}

package com.menrva.data

import com.menrva.data.book.BookDTO
import com.menrva.data.user.UserDTO

data class BookInteractionDTO(
    val interested: Boolean,
    val hasRead: Boolean,
    val favorite: Boolean,
    val likeDislike: Int,
    val user: UserDTO,
    val book: BookDTO,
)

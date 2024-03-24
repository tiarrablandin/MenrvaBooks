package com.menrva.data

data class BookInteractionDTO(
    val interested: Boolean,
    val hasRead: Boolean,
    val favorite: Boolean,
    val likeDislike: Int,
    val user: UserDTO,
    val book: BookDTO,
)

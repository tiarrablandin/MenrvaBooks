package com.menrva.data.author

data class AuthorUpdateDTO(
    val id: Long,
    val photo: String,
    val penName: String,
    val bio: String,
    val text: String
)

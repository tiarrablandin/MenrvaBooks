package com.menrva.data.author

import com.menrva.data.user.UserDTO
import com.menrva.entities.Author
import com.menrva.entities.Book
import com.menrva.entities.User
import java.time.LocalDate

data class AuthorDTO(
    val id: Long?,
    val photo: String?,
    val penName: String?,
    val reviewed: Boolean?,
    val dateAdded: LocalDate?,
    val bio: String?,
    val user: UserDTO?,
) {
    constructor(author: Author) : this(
        id = author.id,
        photo = author.photo.toString(),
        penName = author.penName.toString(),
        reviewed = author.reviewed ?: false,
        dateAdded = author.dateAdded ?: LocalDate.now(),
        bio = author.bio.toString(),
        user = author.user?.let { UserDTO(it) }
    )
}
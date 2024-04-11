package com.menrva.data

import com.menrva.entities.Genre

data class GenreDTO(
    val id: Long,
    val name: String,
) {
    constructor(genre: Genre) : this(
        id = genre.id!!,
        name = genre.name!!,
    )
}

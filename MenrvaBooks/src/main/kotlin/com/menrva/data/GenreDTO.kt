package com.menrva.data

import com.menrva.entities.Genre
import java.time.LocalDate

data class GenreDTO(
    val id: Long?,
    val name: String?,
    val dateAdded: LocalDate?,
    val reviewed: Boolean?,
) {
    constructor(genre: Genre) : this(
        id = genre.id,
        name = genre.name,
        dateAdded = genre.dateAdded,
        reviewed = genre.reviewed,
    )
}

package com.menrva.data

import com.menrva.entities.Genre
import com.menrva.entities.SubGenre
import java.time.LocalDate

data class SubGenreDTO(
    val id: Long?,
    val name: String?,
    val dateAdded: LocalDate?,
    val reviewed: Boolean?,
) {
    constructor(subgenre: SubGenre) : this(
        id = subgenre.id,
        name = subgenre.name,
        dateAdded = subgenre.dateAdded,
        reviewed = subgenre.reviewed,
    )
}

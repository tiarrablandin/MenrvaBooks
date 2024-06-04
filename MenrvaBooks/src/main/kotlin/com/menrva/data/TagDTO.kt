package com.menrva.data

import com.menrva.entities.Series
import com.menrva.entities.Tag
import java.time.LocalDate

data class TagDTO(
    val id: Long?,
    val name: String?,
    val dateAdded: LocalDate?,
    val reviewed: Boolean?,
) {
    constructor(tag: Tag) : this(
        id = tag.id,
        name = tag.name,
        dateAdded = tag.dateAdded,
        reviewed = tag.reviewed,
    )
}

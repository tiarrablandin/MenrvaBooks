package com.menrva.data

import com.menrva.entities.Series
import com.menrva.entities.Tag

data class TagDTO(
    val id: Long,
    val name: String,
) {
    constructor(tag: Tag) : this(
        id = tag.id,
        name = tag.name,
    )
}

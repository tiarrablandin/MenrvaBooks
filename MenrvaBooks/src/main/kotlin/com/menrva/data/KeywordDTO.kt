package com.menrva.data

import com.menrva.entities.Book
import com.menrva.entities.Keyword
import com.menrva.entities.Series
import java.time.LocalDate

data class KeywordDTO(
    val id: Long?,
    val name: String?,
    val dateAdded: LocalDate?,
    val reviewed: Boolean?,
) {
    constructor(keyword: Keyword) : this(
        id = keyword.id,
        name = keyword.name,
        dateAdded = keyword.dateAdded,
        reviewed = keyword.reviewed,
    )
}

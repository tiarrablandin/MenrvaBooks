package com.menrva.data

import com.menrva.entities.Book
import com.menrva.entities.Keyword
import com.menrva.entities.Series

data class KeywordDTO(
    val id: Long?,
    val name: String?,
) {
    constructor(keyword: Keyword) : this(
        id = keyword.id,
        name = keyword.name,
    )
}

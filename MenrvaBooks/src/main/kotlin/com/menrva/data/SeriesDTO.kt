package com.menrva.data

import com.menrva.entities.Genre
import com.menrva.entities.Series

data class SeriesDTO(
    val id: Long,
    val name: String,
    val books: Set<MinimalBookDTO>,
) {
    constructor(series: Series) : this(
        id = series.id,
        name = series.name,
        books = series.books.map { MinimalBookDTO(it) }.toSet()
    )
}

package com.menrva.data

import com.menrva.data.book.MinimalBookDTO
import com.menrva.entities.Series
import java.time.LocalDate

data class SeriesDTO(
    val id: Long?,
    val name: String?,
    val dateAdded: LocalDate?,
    val reviewed: Boolean?,
    val books: Set<MinimalBookDTO>,
) {
    constructor(series: Series) : this(
        id = series.id,
        name = series.name,
        dateAdded = series.dateAdded,
        reviewed = series.reviewed,
        books = series.books.map { MinimalBookDTO(it) }.toSet()
    )
}

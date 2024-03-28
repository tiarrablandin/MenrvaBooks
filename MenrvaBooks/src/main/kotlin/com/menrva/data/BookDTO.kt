package com.menrva.data

import com.menrva.entities.Book

data class BookDTO(
    val id: Long,
    val title: String,
    val cover: String,
    val genres: Set<GenreDTO>,
    val keywords: Set<KeywordDTO>,
    val series: SeriesDTO?,
) {
    constructor(book: Book) : this(
        id = book.id,
        title = book.title.toString(),
        cover = book.cover.toString(),
        genres = book.genres.map { GenreDTO(it) }.toSet(),
        keywords = book.keywords.map { KeywordDTO(it) }.toSet(),
        series = book.series?.let { SeriesDTO(it) } // Convert Series entity to DTO
    )
}

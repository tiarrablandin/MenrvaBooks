package com.menrva.data.book

import com.menrva.data.GenreDTO
import com.menrva.data.KeywordDTO
import com.menrva.data.SeriesDTO
import com.menrva.data.author.AuthorDTO
import com.menrva.entities.Book

data class BookDTO(
    val id: Long?,
    val title: String,
    val cover: String,
    val genres: Set<GenreDTO>,
    val keywords: Set<KeywordDTO>,
    val series: SeriesDTO?,
    val authors: Set<AuthorDTO>
) {
    constructor(book: Book) : this(
        id = book.id,
        title = book.title.toString(),
        cover = book.cover.toString(),
        genres = book.genres.map { GenreDTO(it) }.toSet(),
        keywords = book.keywords.map { KeywordDTO(it) }.toSet(),
        series = book.series?.let { SeriesDTO(it) }, // Convert Series entity to DTO
        authors = book.authors.map { AuthorDTO(it) }.toSet()
    )
}

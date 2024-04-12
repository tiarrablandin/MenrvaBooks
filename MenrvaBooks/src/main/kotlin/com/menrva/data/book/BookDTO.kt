package com.menrva.data.book

import com.menrva.data.GenreDTO
import com.menrva.data.KeywordDTO
import com.menrva.data.SeriesDTO
import com.menrva.data.TagDTO
import com.menrva.data.author.AuthorDTO
import com.menrva.entities.Book
import java.time.LocalDate

data class BookDTO(
    val id: Long,
    val title: String,
    val cover: String,
    val reviewed: Boolean,
    val description: String,
    val dateAdded: LocalDate,
    val pageCount: Int,
    val genres: Set<GenreDTO>,
    val keywords: Set<KeywordDTO>,
    val tags: Set<TagDTO>,
    val series: SeriesDTO?,
    val authors: Set<AuthorDTO>
) {
    constructor(book: Book) : this(
        id = book.id ?: 0L,
        title = book.title.toString(),
        cover = book.cover.toString(),
        reviewed = book.reviewed ?: false,
        description = book.description.toString(),
        dateAdded = book.dateAdded ?: LocalDate.now(),
        pageCount = book.pageCount ?: 0,
        keywords = book.keywords.map { KeywordDTO(it) }.toSet(),
        genres = book.genres.map { GenreDTO(it) }.toSet(),
        tags = book.tags.map { TagDTO(it) }.toSet(),
        series = book.series?.let { SeriesDTO(it) }, // Convert Series entity to DTO
        authors = book.authors.map { AuthorDTO(it) }.toSet()
    )
}

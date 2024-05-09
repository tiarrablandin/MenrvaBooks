package com.menrva.data.book

import com.menrva.data.GenreDTO
import com.menrva.data.KeywordDTO
import com.menrva.data.series.SeriesDTO
import com.menrva.data.TagDTO
import com.menrva.data.author.AuthorDTO
import com.menrva.entities.Book
import com.menrva.entities.Series
import java.time.LocalDate

data class BookDTO(
    val id: Long?,
    val title: String,
    val cover: String,
    val reviewed: Boolean? = false,
    val description: String,
    val dateAdded: LocalDate?,
    val publicationDate: LocalDate?,
    val pageCount: Int?,
    val numberOfLikes: Int?,
    val numberOfDislikes: Int?,
    val genres: Set<GenreDTO>?,
    val keywords: Set<KeywordDTO>?,
    val tags: Set<TagDTO>?,
    val series: Series?,
    val authors: Set<AuthorDTO>?
) {
    constructor(book: Book) : this(
        id = book.id ?: 0L,
        title = book.title.toString(),
        cover = book.cover.toString(),
        reviewed = book.reviewed ?: false,
        description = book.description.toString(),
        dateAdded = book.dateAdded ?: LocalDate.now(),
        publicationDate = book.publicationDate ?: LocalDate.now(),
        pageCount = book.pageCount ?: 0,
        numberOfLikes = book.bookInteractions.map { it.likeDislike == 1 }.size,
        numberOfDislikes = book.bookInteractions.map { it.likeDislike == -1 }.size,
        keywords = book.keywords.map { KeywordDTO(it) }.toSet(),
        genres = book.genres.map { GenreDTO(it) }.toSet(),
        tags = book.tags.map { TagDTO(it) }.toSet(),
        series = book.series,
        authors = book.authors.map { AuthorDTO(it) }.toSet()
    )
}

package com.menrva.data.series

import com.menrva.data.book.BookSummary
import java.time.LocalDate

interface SeriesSummary {
    fun getId(): Long
    fun getName(): String
    fun getDateAdded(): LocalDate
    fun getReviewed(): Boolean
    fun getBooks(): Set<Book>
    fun getAuthors(): Set<Author>?
    fun getSeriesInteractions(): Set<SeriesInteraction>?

    interface Book {
        fun getId(): Long
        fun getTitle(): String
        fun getCover(): String?
        fun getDescription(): String?
        fun getPageCount(): Int?
        fun getPublicationDate(): LocalDate?
        fun getGenres(): Set<Genre>?
        fun getKeywords(): Set<Keyword>?
        fun getAuthors(): Set<Author>?
    }

    interface Genre {
        fun getName(): String
    }

    interface Keyword {
        fun getName(): String
    }

    interface Author {
        fun getId(): Long
        fun getPenName(): String
        fun getBio() :String
        fun getPhoto(): String
    }

    interface SeriesInteraction {
        fun getInterested(): Int
        fun getFavorite(): Int
        fun getInProgress(): Int
    }
}
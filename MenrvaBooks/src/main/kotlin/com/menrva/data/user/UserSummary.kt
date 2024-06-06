package com.menrva.data.user

import java.time.LocalDate

interface UserSummary {
    fun getId(): Long?
    fun getFirstName(): String?
    fun getLastName(): String?
    fun getTag(): String?
    fun getPassword(): String?
    fun getActive(): Boolean?
    fun getRole(): String?
    fun getEmail(): String?
    fun getDateAdded(): LocalDate?
    fun getBookInteractions(): Set<BookInteraction>?

    //    fun getSeriesInteractions(): Set<SeriesInteraction>?
    fun getSubscription(): Subscription?
    fun getComments(): Set<Comment>?
    fun getKeywords(): Set<Keyword>?
    fun getAuthors(): Set<Author>?
    fun getAuthor(): Set<Author>?
    fun getGenres(): Set<Genre>?
    fun getSubGenres(): Set<SubGenre>?

    interface BookInteractionId {
        fun getBookId(): Long?
        fun getUserId(): Long?
    }

    interface BookInteraction {
        fun getId(): BookInteractionId
        fun getBook(): Book?
        fun getHasRead(): Boolean?
        fun getInterested(): Boolean?
        fun getFavorite(): Boolean?
        fun getLikeDislike(): Int?
    }

    interface SeriesInteraction {
        fun getSeries(): Series?
        fun getInterested(): Boolean?
        fun getFavorite(): Boolean?
        fun getLikeDislike(): Int?
    }

    interface Genre {
        fun getId(): Long?
        fun getName(): String?
    }

    interface SubGenre {
        fun getId(): Long?
        fun getName(): String?
    }

    interface Keyword {
        fun getId(): Long?
        fun getName(): String?
    }

    interface Author {
        fun getId(): Long?
        fun getPenName(): String?
        fun getBio(): String?
        fun getPhoto(): String?
    }

    interface Book {
        fun getId(): Long?
        fun getTitle(): String?
        fun getCover(): String?
        fun getDescription(): String?
        fun getPageCount(): Int?
        fun getPublicationDate(): LocalDate?
        fun getDateAdded(): LocalDate?
        fun getAuthors(): Set<Author>?
//        fun getSeries(): Series?
    }

    interface Comment {
        fun getId(): Long?
        fun getComment(): String?
    }

    interface Series {
        fun getId(): Long?
        fun getName(): String?
        fun getBooks(): Set<Book>?
    }

    interface Subscription {
        fun getId(): Long
        fun getLevel(): String
        fun getPaid(): Int
    }
}
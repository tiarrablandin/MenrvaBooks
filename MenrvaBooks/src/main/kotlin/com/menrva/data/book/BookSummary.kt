package com.menrva.data.book

import com.menrva.data.user.UserSummary
import com.menrva.entities.User
import java.time.LocalDate

interface BookSummary {
    fun getId(): Long
    fun getTitle(): String
    fun getCover(): String?
    fun getDescription(): String?
    fun getPageCount(): Int?
    fun getPublicationDate(): LocalDate?
    fun getDateAdded(): LocalDate
    fun getReviewed(): Boolean
    fun getBookInteractions(): Set<BookInteraction>?
    fun getLinks(): Set<Link>?
    fun getGenres(): Set<Genre>?
    fun getSubGenres(): Set<SubGenre>?
    fun getKeywords(): Set<Keyword>?
    fun getAuthors(): Set<Author>?
    fun getSeries(): Series?
    fun getComments(): Set<Comment>?
    fun getTags(): Set<Tag>?


    interface BookOverview {
        fun getId(): Long
        fun getTitle(): String
        fun getCover(): String?
        fun getDescription(): String?
        fun getPageCount(): Int?
        fun getPublicationDate(): LocalDate?
        fun getDateAdded(): LocalDate
        fun getReviewed(): Boolean
    }

    interface Tag {
        fun getId(): Long?
        fun getName(): String?
    }

    interface BookInteraction {
        fun getHasRead(): Boolean?
        fun getInterested(): Boolean?
        fun getFavorite(): Boolean?
        fun getLikeDislike(): Int?
    }

    interface Link {
        fun getId(): Long?
        fun getLink(): String?
        fun getName(): String?
    }

    interface SubGenre {
        fun getId(): Long?
        fun getName(): String?
    }

    interface Genre {
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
        fun getUser(): User?
        fun getBooks(): Set<BookOverview>?
    }

    interface Series {
        fun getId(): Long?
        fun getName(): String?
        fun getBooks(): Set<BookOverview>?
    }

    interface Comment {
        fun getId(): Long?
        fun getComment(): String?
        fun getUser(): User?
    }

    interface User {
        fun getId(): Long?
        fun getTag(): String?
        fun getEmail(): String?
        fun getFirstName(): String?
        fun getLastName(): String?
        fun getActive(): Boolean?
    }

}
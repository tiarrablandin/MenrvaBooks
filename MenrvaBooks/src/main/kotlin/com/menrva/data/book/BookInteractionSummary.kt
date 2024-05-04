package com.menrva.data.book

import com.menrva.entities.BookInteractionId
import java.time.LocalDate

interface BookInteractionSummary {
    fun getId(): BookInteractionId?
    fun getHasRead(): Boolean
    fun getInterested(): Boolean
    fun getFavorite(): Boolean
    fun getLikeDislike(): Int
    fun getBook(): Book
    fun getUser(): User

    interface Book {
        fun getTitle(): String?
        fun getCover(): String?
        fun getDescription(): String?
        fun getPageCount(): Int?
        fun getPublicationDate(): LocalDate?
        fun getDateAdded(): LocalDate?
        fun getAuthors(): Set<Author>?
        fun getSeries(): BookSummary.Series?
    }

    interface User {
        fun getTag(): String?
        fun getEmail(): String?
        fun getFirstName(): String?
        fun getLastName(): String?
        fun getActive(): Boolean?
    }

    interface Author {
        fun getId(): Long
        fun getPenName(): String
        fun getBio(): String
        fun getPhoto(): String
        fun getUser(): User
    }

    interface Series {
        fun getId(): Long
        fun getName(): String
    }
}
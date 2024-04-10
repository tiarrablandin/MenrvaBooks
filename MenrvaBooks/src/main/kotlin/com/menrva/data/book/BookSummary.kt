package com.menrva.data.book

import com.menrva.entities.User
import java.time.LocalDate

interface BookSummary {
    fun getId(): Long
    fun getTitle(): String
    fun getCover(): String
    fun getDescription(): String
    fun getPageCount(): Int
    fun getPublicationDate(): LocalDate
    fun getGenres(): Set<Genre>
    fun getKeywords(): Set<Keyword>
    fun getAuthors(): Set<Author>
    fun getSeries(): Series
    fun getComments(): Set<Comment>

    interface Genre {
        fun getName(): String
    }

    interface Keyword {
        fun getId(): Long
        fun getName(): String
    }

    interface Author {
        fun getId(): Long
        fun getPenName(): String
        fun getBio() :String
        fun getPhoto(): String
        fun getUser(): User
    }

    interface Series {
        fun getId(): Long
        fun getName(): String
    }

    interface Comment {
        fun getId(): Long
        fun getComment(): String
        fun getUser(): User
    }

    interface User {
        fun getId(): Long
        fun getFirstName(): String
        fun getLastName(): String
        fun getUsername(): String
    }
}
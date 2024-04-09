package com.menrva.data.book

import com.menrva.entities.User

interface BookSummary {
    fun getId(): Long
    fun getTitle(): String
    fun getGenres(): Set<Genre>
    fun getKeywords(): Set<Keyword>
    fun getAuthors(): Set<Author>
    fun getSeries(): Series

    interface Genre {
        fun getName(): String
    }

    interface Keyword {
        fun getName(): String
    }

    interface Author {
        fun getPenName(): String
        fun getBio() :String
        fun getPhoto(): String
        fun getUser(): User
    }

    interface Series {
        fun getName(): String
    }

    interface Comment {
        fun getComment(): String
        fun getUser(): User
    }

    interface User {
        fun getFirstName(): String
        fun getLastName(): String
        fun getUsername(): String
    }
}
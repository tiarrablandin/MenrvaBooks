package com.menrva.data.book

import com.menrva.entities.BookInteractionId

interface BookInteractionSummary {
    fun getId(): BookInteractionId?
    fun getBook(): Book
    fun getUser(): User

    interface Book {
        fun getTitle(): String?
        fun getCover(): String?
        fun getAuthors(): Set<Author>?
        fun getSeries(): BookSummary.Series?

    }

    interface User {
        fun getUsername(): String?
        fun getFirstName(): String?
        fun getLastName(): String?
    }

    interface Author {
        fun getId(): Long?
        fun getPenName(): String?
    }
}
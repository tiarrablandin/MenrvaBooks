package com.menrva.data.comment

import java.time.LocalDate

interface CommentSummary {
    fun getId(): Long
    fun getComment(): String
    fun getDateAdded(): LocalDate
    fun getReviewed(): Boolean
    fun getUser(): User
    fun getBook(): Book

    interface User {
        fun getTag(): String
        fun getEmail(): String
        fun getFirstName(): String
        fun getLastName(): String
        fun getActive(): Boolean
    }

    interface Book {
        fun getId(): Long
        fun getTitle(): String
        fun getCover(): String?
        fun getDescription(): String?
    }
}
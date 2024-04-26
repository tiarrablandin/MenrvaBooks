package com.menrva.data.author

import java.time.LocalDate

interface AuthorSummary {

    fun getId(): Long?
    fun getPenName(): String?
    fun getDateAdded(): LocalDate?
    fun getReviewed(): Boolean?
    fun getUser(): User?

    interface User {
        fun getId(): Long?
        fun getFirstName(): String?
        fun getLastName(): String?
        fun getTag(): String?
    }

}
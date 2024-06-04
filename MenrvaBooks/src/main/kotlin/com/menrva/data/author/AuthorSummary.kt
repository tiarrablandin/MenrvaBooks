package com.menrva.data.author

import java.time.LocalDate

interface AuthorSummary {

    fun getId(): Long?
    fun getPenName(): String?
    fun getDateAdded(): LocalDate?
    fun getReviewed(): Boolean?
    fun getUser(): User?
    fun getSocialMedia(): Set<SocialMedia>?

    interface User {
        fun getId(): Long?
        fun getFirstName(): String?
        fun getLastName(): String?
        fun getTag(): String?
    }

    interface SocialMedia {
        fun getId(): Long?
        fun getLink(): String?
        fun getName(): String?
    }

}
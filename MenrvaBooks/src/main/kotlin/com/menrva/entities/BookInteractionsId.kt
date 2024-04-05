package com.menrva.entities

import jakarta.persistence.Column
import jakarta.persistence.Embeddable
import java.io.Serializable
import java.util.*

@Embeddable
data class BookInteractionsId(
    @Column(name = "user_id", nullable = false)
    val userId: Int,
    @Column(name = "book_id", nullable = false)
    val bookId: Int,
) : Serializable {
    override fun equals(other: Any?): Boolean {
        if (this === other) return true
        if (javaClass != other?.javaClass) return false

        other as BookInteractionsId

        if (userId != other.userId) return false
        if (bookId != other.bookId) return false

        return true
    }

    override fun hashCode(): Int = Objects.hash(userId, bookId)

    companion object {
        private const val serialVersionUID = -4782892237603728274L
    }
}

package com.menrva.entities

import jakarta.persistence.Column
import jakarta.persistence.Embeddable
import org.hibernate.Hibernate
import java.io.Serializable
import java.util.*

@Embeddable
class SeriesInteractionId(
    @Column(name = "series_id", nullable = false)
    var seriesId: Int? = null,
    @Column(name = "user_id", nullable = false)
    var userId: Int? = null
) : Serializable {

    override fun hashCode(): Int = Objects.hash(seriesId, userId)
    override fun equals(other: Any?): Boolean {
        if (this === other) return true
        if (other == null || Hibernate.getClass(this) != Hibernate.getClass(other)) return false

        other as SeriesInteractionId

        return seriesId == other.seriesId &&
                userId == other.userId
    }

    companion object {
        private const val serialVersionUID = -4782892237603728274L
    }
}
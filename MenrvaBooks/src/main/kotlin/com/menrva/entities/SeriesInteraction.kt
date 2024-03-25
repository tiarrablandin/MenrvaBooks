package com.menrva.entities

import jakarta.persistence.*

@Entity
@Table(name = "series_interactions")
data class SeriesInteraction (
    @EmbeddedId
    val id: SeriesInteractionId? = null,

    @MapsId("seriesId")
    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "series_id", nullable = false)
    val series: Series? = null,

    @MapsId("userId")
    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "user_id", nullable = false)
    val user: User? = null,

    @Column(name = "interested", nullable = false)
    val interested: Int? = null,

    @Column(name = "favorite", nullable = false)
    val favorite: Int? = null,

    @Column(name = "in_progress", nullable = false)
    val inProgress: Int? = null
)
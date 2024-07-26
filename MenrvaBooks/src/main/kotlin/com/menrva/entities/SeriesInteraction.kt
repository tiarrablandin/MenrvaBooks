package com.menrva.entities

import jakarta.persistence.*

@Entity
@Table(name = "series_interactions")
class SeriesInteraction(
    @EmbeddedId
    var id: SeriesInteractionId? = null,

    @MapsId("seriesId")
    @ManyToOne(
        fetch = FetchType.LAZY,
        optional = false,
    )
    @JoinColumn(name = "series_id", nullable = false)
    var series: Series? = null,

    @MapsId("userId")
    @ManyToOne(
        fetch = FetchType.LAZY,
        optional = false,
    )
    @JoinColumn(name = "user_id", nullable = false)
    var user: User? = null,

    @Column(name = "interested", nullable = false)
    var interested: Int? = null,

    @Column(name = "favorite", nullable = false)
    var favorite: Int? = null,

    @Column(name = "in_progress", nullable = false)
    var inProgress: Int? = null
)
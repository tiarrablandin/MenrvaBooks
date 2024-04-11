package com.menrva.entities

import com.fasterxml.jackson.annotation.JsonIgnore
import jakarta.persistence.*
import java.time.LocalDate

@Entity
@Table(name = "social_media")
class SocialMedia(
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false)
    var id: Int? = null,

    @Column(name = "name", nullable = false, length = 100)
    var name: String? = null,

    @Column(name = "link", nullable = false, length = 100)
    var link: String? = null,

    @Column(name = "date_added", nullable = false)
    var dateAdded: LocalDate? = null,

    @Column(name = "date_updated")
    var dateUpdated: LocalDate? = null,

    @JsonIgnore
    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "author_id", nullable = false)
    var author: Author? = null,
)
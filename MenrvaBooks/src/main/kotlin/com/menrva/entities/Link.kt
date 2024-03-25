package com.menrva.entities

import jakarta.persistence.*
import java.time.LocalDate

@Entity
@Table(name = "link")
data class Link(
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false)
    val id: Int? = null,

    @Column(name = "name", nullable = false, length = 20)
    val name: String? = null,

    @Column(name = "link", nullable = false, length = 100)
    val link: String? = null,

    @Column(name = "date_added", nullable = false)
    val dateAdded: LocalDate? = null,

    @Column(name = "reviewed", nullable = false)
    val reviewed: Byte? = null,

    @Column(name = "date_updated")
    val dateUpdated: LocalDate? = null,

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "book_id", nullable = false)
    val book: Book? = null
)
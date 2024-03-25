package com.menrva.entities

import jakarta.persistence.*
import java.time.LocalDate

@Entity
@Table(name = "comment")
data class Comment (
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false)
    val id: Int? = null,

    @Lob
    @Column(name = "comment", nullable = false)
    val comment: String? = null,

    @Column(name = "date_added", nullable = false)
    val dateAdded: LocalDate? = null,

    @Column(name = "reviewed", nullable = false)
    val reviewed: Byte? = null,

    @Column(name = "date_updated")
    val dateUpdated: LocalDate? = null,

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "user_id", nullable = false)
    val user: User? = null,

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "book_id", nullable = false)
    val book: Book? = null
)
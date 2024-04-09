package com.menrva.entities

import com.fasterxml.jackson.annotation.JsonIgnore
import jakarta.persistence.*
import java.time.LocalDate

@Entity
@Table(name = "comment")
data class Comment (
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false)
    val id: Int,

    @Lob
    @Column(name = "comment", nullable = false)
    val comment: String? = null,

    @Column(name = "date_added", nullable = false)
    val dateAdded: LocalDate? = null,

    @Column(name = "reviewed", nullable = false)
    val reviewed: Byte? = null,

    @Column(name = "date_updated")
    val dateUpdated: LocalDate? = null,

    @JsonIgnore
    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "user_id", nullable = false)
    val user: User? = null,

    @JsonIgnore
    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "book_id", nullable = false)
    val book: Book? = null
)
package com.menrva.entities

import jakarta.persistence.Column
import jakarta.persistence.Entity
import jakarta.persistence.GeneratedValue
import jakarta.persistence.GenerationType
import jakarta.persistence.Id
import java.time.LocalDateTime

@Entity
data class Book(
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    val id: Int,
    val cover: String,
    val title: String,
    val description: String,
    @Column(name = "page_count")
    val pageCount: Int,
    @Column(name = "publication_date")
    val publicationDate: LocalDateTime,
    @Column(name = "date_added")
    val dateAdded: LocalDateTime,
    @Column(name = "date_updated")
    val dateUpdated: LocalDateTime,
)

package com.menrva.entities

import com.fasterxml.jackson.annotation.JsonBackReference
import jakarta.persistence.*
import java.time.LocalDate
import java.time.LocalDateTime

@Entity
data class Author(
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    val id: Long,
    val photo: String,
    @Column(name = "pen_name")
    val penName: String,
    val bio: String,
    val text: String,
    @Column(name = "date_created")
    val dateCreated: LocalDate,
    @Column(name = "date_updated")
    val dateUpdated: LocalDate,
    @OneToOne @JoinColumn(name = "user_id")
    val user: User,
)

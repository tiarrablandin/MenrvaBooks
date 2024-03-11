package com.menrva.entities

import com.fasterxml.jackson.annotation.JsonBackReference
import jakarta.persistence.*
import java.time.LocalDateTime

@Entity
data class Author(
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    val id: Int,
    val photo: String,
    @Column(name = "pen_name")
    val penName: String,
    val bio: String,
    val text: String,
    @Column(name = "date_created")
    val dateCreated: LocalDateTime,
    @Column(name = "date_updated")
    val dateUpdated: LocalDateTime,
    @OneToOne @JoinColumn(name = "user_id")
    val user: User,
)

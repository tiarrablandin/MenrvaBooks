package com.menrva.entities

import com.fasterxml.jackson.annotation.JsonIgnore
import jakarta.persistence.*
import java.time.LocalDate

@Entity
@Table(name = "subscription")
data class Subscription(
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false)
    val id: Int? = null,

    @Column(name = "level", nullable = false, length = 20)
    val level: String? = null,

    @Column(name = "paid", nullable = false)
    val paid: Int? = null,

    @Column(name = "date_added", nullable = false)
    val dateAdded: LocalDate? = null,

    @Column(name = "date_updated")
    val dateUpdated: LocalDate? = null,

    @JsonIgnore
    @OneToMany(mappedBy = "subscription")
    val users: MutableSet<User> = mutableSetOf()
)
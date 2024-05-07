package com.menrva.entities

import com.fasterxml.jackson.annotation.JsonIgnore
import jakarta.persistence.*
import java.time.LocalDate

@Entity
@Table(name = "subscription")
class Subscription(
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false)
    var id: Long? = null,

    @Column(name = "level", nullable = false, length = 20)
    var level: String? = null,

    @Column(name = "paid", nullable = false)
    var paid: Int? = null,

    @Column(name = "date_added", nullable = false)
    var dateAdded: LocalDate? = null,

    @Column(name = "date_updated")
    var dateUpdated: LocalDate? = null,

    @JsonIgnore
    @OneToMany(mappedBy = "subscription")
    var users: MutableSet<User> = mutableSetOf()
)
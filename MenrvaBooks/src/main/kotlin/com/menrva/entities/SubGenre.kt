package com.menrva.entities

import com.fasterxml.jackson.annotation.JsonIgnore
import jakarta.persistence.*
import java.time.LocalDate

@Entity
@Table(name = "sub_genre")
data class SubGenre(
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false)
    val id: Int,

    @Column(name = "name", nullable = false, length = 20)
    val name: String,

    @Column(name = "date_added", nullable = false)
    val dateAdded: LocalDate,

    @Column(name = "reviewed", nullable = false)
    val reviewed: Byte,

    @Column(name = "date_updated")
    val dateUpdated: LocalDate? = null,

    @JsonIgnore
    @ManyToMany
    @JoinTable(
        name = "book_has_sub_genre",
        joinColumns = [JoinColumn(name = "sub_genre_id")],
        inverseJoinColumns = [JoinColumn(name = "book_id")]
    )
    val books: MutableSet<Book> = mutableSetOf(),

    @ManyToMany(mappedBy = "subGenres")
    val genres: MutableSet<Genre> = mutableSetOf(),

    @JsonIgnore
    @ManyToMany(mappedBy = "subGenres")
    val users: MutableSet<User> = mutableSetOf()
)
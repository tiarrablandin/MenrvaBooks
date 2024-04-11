package com.menrva.entities

import com.fasterxml.jackson.annotation.JsonIgnore
import jakarta.persistence.*
import java.time.LocalDate

@Entity
@Table(name = "sub_genre")
class SubGenre(
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false)
    var id: Long? = null,

    @Column(name = "name", nullable = false, length = 20)
    var name: String? = null,

    @Column(name = "date_added", nullable = false)
    var dateAdded: LocalDate? = null,

    @Column(name = "reviewed", nullable = false)
    var reviewed: Byte? = null,

    @Column(name = "date_updated")
    var dateUpdated: LocalDate? = null,

    @JsonIgnore
    @ManyToMany
    @JoinTable(
        name = "book_has_sub_genre",
        joinColumns = [JoinColumn(name = "sub_genre_id")],
        inverseJoinColumns = [JoinColumn(name = "book_id")]
    )
    var books: MutableSet<Book> = mutableSetOf(),

    @JsonIgnore
    @ManyToMany(mappedBy = "subGenres")
    var genres: MutableSet<Genre> = mutableSetOf(),

    @JsonIgnore
    @ManyToMany(mappedBy = "subGenres")
    var users: MutableSet<User> = mutableSetOf()
)
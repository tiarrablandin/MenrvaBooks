package com.menrva.entities

import jakarta.persistence.*
import java.time.LocalDate

@Entity
@Table(name = "sub_genre")
data class SubGenre(
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false)
    val id: Int? = null,

    @Column(name = "name", nullable = false, length = 20)
    val name: String? = null,

    @Column(name = "date_added", nullable = false)
    val dateAdded: LocalDate? = null,

    @Column(name = "reviewed", nullable = false)
    val reviewed: Byte? = null,

    @Column(name = "date_updated")
    val dateUpdated: LocalDate? = null,

    @ManyToMany
    @JoinTable(
        name = "book_has_sub_genre",
        joinColumns = [JoinColumn(name = "sub_genre_id")],
        inverseJoinColumns = [JoinColumn(name = "book_id")]
    )
    val books: MutableSet<Book> = mutableSetOf()
) {
    @ManyToMany(mappedBy = "subGenres")
    val genres: MutableSet<Genre> = mutableSetOf()

    @ManyToMany(mappedBy = "subGenres")
    open var users: MutableSet<User> = mutableSetOf()
}
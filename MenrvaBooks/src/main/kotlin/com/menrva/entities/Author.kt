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
) {
    @Column(name = "reviewed", nullable = false)
    val reviewed: Byte? = null

    @ManyToMany
    @JoinTable(
        name = "author_has_book",
        joinColumns = [JoinColumn(name = "author_id")],
        inverseJoinColumns = [JoinColumn(name = "book_id")]
    )
    val books: MutableSet<Book> = mutableSetOf()

    @ManyToMany
    @JoinTable(
        name = "author_has_series",
        joinColumns = [JoinColumn(name = "author_id")],
        inverseJoinColumns = [JoinColumn(name = "series_id")]
    )
    val series: MutableSet<Series> = mutableSetOf()

    @OneToMany(mappedBy = "author")
    val socialMedia: MutableSet<SocialMedia> = mutableSetOf()

    @ManyToMany(mappedBy = "authors")
    val users: MutableSet<User> = mutableSetOf()

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id")
    val user: User? = null
}

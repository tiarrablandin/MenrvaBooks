package com.menrva.entities

import com.fasterxml.jackson.annotation.JsonBackReference
import com.fasterxml.jackson.annotation.JsonIgnore
import jakarta.persistence.*
import java.time.LocalDate
import java.time.LocalDateTime

@Entity
data class Author(
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    val id: Long,
    val photo: String = "",
    @Column(name = "pen_name")
    val penName: String,
    val bio: String,
    val text: String,
    @Column(name = "date_created")
    val dateCreated: LocalDate,
    @Column(name = "date_updated")
    val dateUpdated: LocalDate,
    @Column(name = "reviewed", nullable = false)
    val reviewed: Byte? = null,

    @JsonIgnore
    @ManyToMany
    @JoinTable(
        name = "author_has_book",
        joinColumns = [JoinColumn(name = "author_id")],
        inverseJoinColumns = [JoinColumn(name = "book_id")]
    )
    val books: MutableSet<Book> = mutableSetOf(),
    @JsonIgnore
    @ManyToMany
    @JoinTable(
        name = "author_has_series",
        joinColumns = [JoinColumn(name = "author_id")],
        inverseJoinColumns = [JoinColumn(name = "series_id")]
    )
    val series: MutableSet<Series> = mutableSetOf(),

    @OneToMany(mappedBy = "author")
    val socialMedia: MutableSet<SocialMedia> = mutableSetOf(),

    @JsonIgnore
    @ManyToMany(mappedBy = "authors")
    val users: MutableSet<User> = mutableSetOf(),

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id")
    val user: User? = null
) {

    override fun toString(): String {
        return "Author(id=$id, penName='$penName')"
    }

    override fun equals(other: Any?): Boolean {
        if (this === other) return true
        if (other !is Author) return false

        if (id != other.id) return false
        if (penName != other.penName) return false

        return true
    }

    override fun hashCode(): Int {
        var result = id.hashCode()
        result = 31 * result + penName.hashCode()
        return result
    }


}

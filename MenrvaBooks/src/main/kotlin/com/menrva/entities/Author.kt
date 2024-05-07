package com.menrva.entities

import com.fasterxml.jackson.annotation.JsonBackReference
import com.fasterxml.jackson.annotation.JsonIgnore
import jakarta.persistence.*
import java.time.LocalDate
import java.time.LocalDateTime

@Entity
class Author(
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    var id: Long?,
    var photo: String? = "",
    @Column(name = "pen_name")
    var penName: String? = null,
    var bio: String? = null,
    var text: String? = null,
    @Column(name = "date_created")
    var dateAdded: LocalDate? = null,
    @Column(name = "date_updated")
    var dateUpdated: LocalDate? = null,
    @Column(name = "reviewed", nullable = false)
    var reviewed: Boolean? = null,

    @JsonIgnore
    @ManyToMany
    @JoinTable(
        name = "author_has_book",
        joinColumns = [JoinColumn(name = "author_id")],
        inverseJoinColumns = [JoinColumn(name = "book_id")]
    )
    var books: MutableSet<Book> = mutableSetOf(),
    @JsonIgnore
    @ManyToMany
    @JoinTable(
        name = "author_has_series",
        joinColumns = [JoinColumn(name = "author_id")],
        inverseJoinColumns = [JoinColumn(name = "series_id")]
    )
    var series: MutableSet<Series> = mutableSetOf(),

    @OneToMany(mappedBy = "author")
    var socialMedia: MutableSet<SocialMedia> = mutableSetOf(),

    @JsonIgnore
    @ManyToMany(mappedBy = "authors")
    var followers: MutableSet<User> = mutableSetOf(),

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id")
    var user: User? = null
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

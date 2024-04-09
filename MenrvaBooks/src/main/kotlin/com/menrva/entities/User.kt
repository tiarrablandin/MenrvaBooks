package com.menrva.entities

import com.fasterxml.jackson.annotation.JsonBackReference
import com.fasterxml.jackson.annotation.JsonIdentityInfo
import com.fasterxml.jackson.annotation.JsonIgnore
import com.fasterxml.jackson.annotation.ObjectIdGenerators
import jakarta.persistence.*
import org.hibernate.annotations.CreationTimestamp
import org.hibernate.annotations.UpdateTimestamp
import java.time.LocalDate

//@JsonIdentityInfo(
//    generator = ObjectIdGenerators.PropertyGenerator::class,
//    property = "id"
//)
@Entity
data class User(
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    val id: Long,
    @Column(name = "first_name")
    val firstName: String,
    @Column(name = "last_name")
    val lastName: String,
    val tag: String,
    val username: String,
    val password: String,
    val active: Boolean,
    val role: String,
    val email: String,
    @Column(name = "date_added")
    @CreationTimestamp
    val dateAdded: LocalDate?,
    @Column(name = "date_updated")
    @UpdateTimestamp
    val dateUpdated: LocalDate?,
    @JsonBackReference(value = "user")
    @OneToMany(mappedBy = "user")
    val bookInteractions: Set<BookInteractions> = HashSet(),
    @ManyToOne(fetch = FetchType.LAZY, optional = true)
    @JoinColumn(name = "subscription_id", nullable = true)
    val subscription: Subscription? = null,
    @JsonIgnore
    @OneToMany(mappedBy = "user")
    val comments: MutableSet<Comment> = mutableSetOf(),
    @JsonIgnore
    @OneToMany(mappedBy = "user")
    val seriesInteractions: MutableSet<SeriesInteraction> = mutableSetOf(),
    @JsonIgnore
    @OneToMany(mappedBy = "user")
    val author: MutableSet<Author> = mutableSetOf(),
    @JsonIgnore
    @ManyToMany
    @JoinTable(
        name = "user_follows_author",
        joinColumns = [JoinColumn(name = "user_id")],
        inverseJoinColumns = [JoinColumn(name = "author_id")]
    )
    val authors: MutableSet<Author> = mutableSetOf(),
    @JsonIgnore
    @ManyToMany
    @JoinTable(
        name = "user_has_genre",
        joinColumns = [JoinColumn(name = "user_id")],
        inverseJoinColumns = [JoinColumn(name = "genre_id")]
    )
    val genres: MutableSet<Genre> = mutableSetOf(),
    @JsonIgnore
    @ManyToMany
    @JoinTable(
        name = "user_has_keyword",
        joinColumns = [JoinColumn(name = "user_id")],
        inverseJoinColumns = [JoinColumn(name = "keyword_id")]
    )
    val keywords: MutableSet<Keyword> = mutableSetOf(),
    @JsonIgnore
    @ManyToMany
    @JoinTable(
        name = "user_has_sub_genre",
        joinColumns = [JoinColumn(name = "user_id")],
        inverseJoinColumns = [JoinColumn(name = "sub_genre_id")]
    )
    val subGenres: MutableSet<SubGenre> = mutableSetOf(),
) {

    override fun equals(other: Any?): Boolean {
        if (this === other) return true
        if (javaClass != other?.javaClass) return false

        other as User

        if (id != other.id) return false
        if (username != other.username) return false
        if (password != other.password) return false
        if (role != other.role) return false
        return email == other.email
    }


    override fun toString(): String {
        return "User(id=$id, username='$username', role='$role', email='$email')"
    }

    override fun hashCode(): Int {
        var result = id.hashCode()
        result = 31 * result + username.hashCode()
        result = 31 * result + password.hashCode()
        result = 31 * result + active.hashCode()
        result = 31 * result + role.hashCode()
        return result
    }
}


package com.menrva.entities

import com.fasterxml.jackson.annotation.JsonBackReference
import com.fasterxml.jackson.annotation.JsonIdentityInfo
import com.fasterxml.jackson.annotation.JsonIgnore
import com.fasterxml.jackson.annotation.ObjectIdGenerators
import jakarta.persistence.*
import org.hibernate.annotations.CreationTimestamp
import org.hibernate.annotations.UpdateTimestamp
import java.time.LocalDate

@JsonIdentityInfo(
    generator = ObjectIdGenerators.PropertyGenerator::class,
    property = "id"
)
@Entity
class User(
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    var id: Long? = null,
    @Column(name = "first_name")
    var firstName: String? = null,
    @Column(name = "last_name")
    var lastName: String? = null,
    var tag: String? = null,
    var password: String? = null,
    var active: Boolean? = null,
    var role: String? = null,
    var email: String? = null,
    @Column(name = "date_added")
    @CreationTimestamp
    var dateAdded: LocalDate? = null,
    @Column(name = "date_updated")
    @UpdateTimestamp
    var dateUpdated: LocalDate? = null,
    @JsonBackReference(value = "user")
    @OneToMany(mappedBy = "user")
    var bookInteractions: MutableSet<BookInteraction> = mutableSetOf(),
    @ManyToOne(fetch = FetchType.LAZY, optional = true)
    @JoinColumn(name = "subscription_id", nullable = true)
    var subscription: Subscription? = null,
    @OneToOne(mappedBy = "user", cascade = [CascadeType.ALL])
    var userProfile: UserProfile? = null,
    @JsonIgnore
    @OneToMany(mappedBy = "user")
    var comments: MutableSet<Comment> = mutableSetOf(),
    @JsonIgnore
    @OneToMany(mappedBy = "user")
    var seriesInteractions: MutableSet<SeriesInteraction> = mutableSetOf(),
    @JsonIgnore
    @OneToMany(mappedBy = "user")
    var author: MutableSet<Author> = mutableSetOf(),
    @JsonIgnore
    @ManyToMany
    @JoinTable(
        name = "user_follows_author",
        joinColumns = [JoinColumn(name = "user_id")],
        inverseJoinColumns = [JoinColumn(name = "author_id")]
    )
    var authors: MutableSet<Author> = mutableSetOf(),
    @JsonIgnore
    @ManyToMany
    @JoinTable(
        name = "user_has_genre",
        joinColumns = [JoinColumn(name = "user_id")],
        inverseJoinColumns = [JoinColumn(name = "genre_id")]
    )
    var genres: MutableSet<Genre> = mutableSetOf(),
    @JsonIgnore
    @ManyToMany
    @JoinTable(
        name = "user_has_keyword",
        joinColumns = [JoinColumn(name = "user_id")],
        inverseJoinColumns = [JoinColumn(name = "keyword_id")]
    )
    var keywords: MutableSet<Keyword> = mutableSetOf(),
    @JsonIgnore
    @ManyToMany
    @JoinTable(
        name = "user_has_sub_genre",
        joinColumns = [JoinColumn(name = "user_id")],
        inverseJoinColumns = [JoinColumn(name = "sub_genre_id")]
    )
    var subGenres: MutableSet<SubGenre> = mutableSetOf(),
) {

    override fun equals(other: Any?): Boolean {
        if (this === other) return true
        if (javaClass != other?.javaClass) return false

        other as User

        if (id != other.id) return false
        if (tag != other.tag) return false
        if (password != other.password) return false
        if (role != other.role) return false
        return email == other.email
    }


    override fun toString(): String {
        return "User(id=$id, tag='$tag', role='$role', email='$email')"
    }

    override fun hashCode(): Int {
        var result = id.hashCode()
        result = 31 * result + tag.hashCode()
        result = 31 * result + password.hashCode()
        result = 31 * result + active.hashCode()
        result = 31 * result + role.hashCode()
        return result
    }
}


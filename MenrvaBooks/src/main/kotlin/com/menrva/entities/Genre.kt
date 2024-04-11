package com.menrva.entities

import com.fasterxml.jackson.annotation.JsonIgnore
import com.fasterxml.jackson.annotation.JsonManagedReference
import jakarta.persistence.*
import org.hibernate.annotations.CreationTimestamp
import org.hibernate.annotations.UpdateTimestamp
import java.time.LocalDate

@Entity
class Genre(
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    var id: Long? ,
    var name: String? = null,
    @CreationTimestamp @Column(name = "date_added")
    var dateAdded: LocalDate? = null,
    @UpdateTimestamp @Column(name = "date_updated")
    var dateUpdated: LocalDate? = null,
    var reviewed: Boolean? = null,
    @JsonIgnore
    @JsonManagedReference
    @ManyToMany(mappedBy = "genres")
    var books: Set<Book> = HashSet(),
    @JsonIgnore
    @ManyToMany
    @JoinTable(
        name = "genre_has_sub_genre",
        joinColumns = [JoinColumn(name = "genre_id")],
        inverseJoinColumns = [JoinColumn(name = "sub_genre_id")]
    )
    var subGenres: MutableSet<SubGenre> = mutableSetOf(),
    @JsonIgnore
    @ManyToMany(mappedBy = "genres")
    var users: MutableSet<User> = mutableSetOf()
) {
}

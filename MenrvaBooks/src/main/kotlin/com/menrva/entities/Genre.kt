package com.menrva.entities

import com.fasterxml.jackson.annotation.JsonManagedReference
import jakarta.persistence.*
import org.hibernate.annotations.CreationTimestamp
import org.hibernate.annotations.UpdateTimestamp
import java.time.LocalDate

@Entity
data class Genre(
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    val id: Long,
    val name: String,
    @CreationTimestamp @Column(name = "date_added")
    val dateAdded: LocalDate,
    @UpdateTimestamp @Column(name = "date_updated")
    val dateUpdated: LocalDate,
    val reviewed: Boolean,
    @JsonManagedReference
    @ManyToMany(mappedBy = "genres")
    val books: Set<Book> = HashSet()
) {
    @ManyToMany
    @JoinTable(
        name = "genre_has_sub_genre",
        joinColumns = [JoinColumn(name = "genre_id")],
        inverseJoinColumns = [JoinColumn(name = "sub_genre_id")]
    )
    val subGenres: MutableSet<SubGenre> = mutableSetOf()
}

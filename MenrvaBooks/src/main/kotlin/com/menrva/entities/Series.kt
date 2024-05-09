package com.menrva.entities

import com.fasterxml.jackson.annotation.JsonIgnore
import com.fasterxml.jackson.annotation.JsonManagedReference
import jakarta.persistence.*
import org.hibernate.annotations.CreationTimestamp
import org.hibernate.annotations.UpdateTimestamp
import java.time.LocalDate

@Entity
class Series(
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    var id: Long? = null,
    var name: String? = null,
    @CreationTimestamp @Column(name = "date_added")
    var dateAdded: LocalDate? = null,
    @UpdateTimestamp @Column(name = "date_updated")
    var dateUpdated: LocalDate? = null,
    var reviewed: Boolean? = false,
//    @JsonManagedReference
    @JsonIgnore
    @OneToMany(cascade = [CascadeType.ALL])
    @JoinColumn(name = "series_id")
    var books: Set<Book> = mutableSetOf(),
    @JsonIgnore
    @ManyToMany(mappedBy = "series")
    var authors: MutableSet<Author> = mutableSetOf(),
    @JsonIgnore
    @OneToMany(mappedBy = "series")
    var seriesInteractions: MutableSet<SeriesInteraction> = mutableSetOf()
)

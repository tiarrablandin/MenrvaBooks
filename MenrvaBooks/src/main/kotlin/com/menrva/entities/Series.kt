package com.menrva.entities

import com.fasterxml.jackson.annotation.JsonManagedReference
import jakarta.persistence.*
import org.hibernate.annotations.CreationTimestamp
import org.hibernate.annotations.UpdateTimestamp
import java.time.LocalDate

@Entity
data class Series(
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    val id: Long,
    val name: String,
    @CreationTimestamp @Column(name = "date_added")
    val dateAdded: LocalDate,
    @UpdateTimestamp @Column(name = "date_updated")
    val dateUpdated: LocalDate,
    val reviewed: Boolean,
    @JsonManagedReference
    @OneToMany @JoinColumn(name = "series_id")
    val books: Set<Book> = HashSet()
)

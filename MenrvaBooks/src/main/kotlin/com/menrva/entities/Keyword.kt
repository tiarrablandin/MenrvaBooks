package com.menrva.entities

import jakarta.persistence.*
import org.hibernate.annotations.CreationTimestamp
import org.hibernate.annotations.UpdateTimestamp
import java.time.LocalDate

@Entity
data class Keyword(
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    val id: Long,
    val name: String,
    @CreationTimestamp @Column(name = "date_added")
    val dateAdded: LocalDate,
    @UpdateTimestamp @Column(name = "date_updated")
    val dateUpdated: LocalDate,
    @ManyToMany(mappedBy = "keywords")
    val books: Set<Book> = HashSet()
)

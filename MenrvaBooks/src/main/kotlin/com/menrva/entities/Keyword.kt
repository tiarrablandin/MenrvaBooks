package com.menrva.entities

import com.fasterxml.jackson.annotation.JsonIgnore
import com.fasterxml.jackson.annotation.JsonManagedReference
import jakarta.persistence.*
import org.hibernate.annotations.CreationTimestamp
import org.hibernate.annotations.UpdateTimestamp
import java.time.LocalDate

@Entity
class Keyword(
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    var id: Long? = null,
    var name: String? = null,
    @CreationTimestamp @Column(name = "date_added")
    var dateAdded: LocalDate? = null,
    @UpdateTimestamp @Column(name = "date_updated")
    var dateUpdated: LocalDate? = null,
//    @JsonManagedReference
    @JsonIgnore
    @ManyToMany(mappedBy = "keywords")
    var books: Set<Book> = HashSet(),
    @Column(name = "reviewed", nullable = false)
    var reviewed: Boolean? = null,
    @JsonIgnore
    @ManyToMany(mappedBy = "keywords")
    var users: MutableSet<User> = mutableSetOf()
)

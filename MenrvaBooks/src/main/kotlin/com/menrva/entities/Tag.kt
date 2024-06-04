package com.menrva.entities

import com.fasterxml.jackson.annotation.JsonIgnore
import com.fasterxml.jackson.annotation.JsonManagedReference
import jakarta.persistence.*
import org.hibernate.annotations.CreationTimestamp
import org.hibernate.annotations.UpdateTimestamp
import java.time.LocalDate

@Entity
class Tag(
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
    @ManyToMany(mappedBy = "tags")
    var books: Set<Book> = HashSet()
)

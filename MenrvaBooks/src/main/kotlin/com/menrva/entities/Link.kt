package com.menrva.entities

import com.fasterxml.jackson.annotation.JsonIgnore
import jakarta.persistence.*
import org.hibernate.annotations.CreationTimestamp
import org.hibernate.annotations.UpdateTimestamp
import java.time.LocalDate

@Entity
@Table(name = "link")
class Link(
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false)
    var id: Long? = null,

    @Column(name = "name", nullable = false, length = 20)
    var name: String? = null,

    @Column(name = "link", nullable = false, length = 100)
    var link: String? = null,

    @CreationTimestamp
    @Column(name = "date_added", nullable = false)
    var dateAdded: LocalDate? = null,

    @Column(name = "reviewed", nullable = false)
    var reviewed: Boolean? = false,

    @UpdateTimestamp
    @Column(name = "date_updated")
    var dateUpdated: LocalDate? = null,

    @JsonIgnore
    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "book_id", nullable = false)
    var book: Book? = null
)
package com.menrva.entities

import com.fasterxml.jackson.annotation.JsonIgnore
import com.menrva.data.user.UserDTO
import jakarta.persistence.*
import org.hibernate.annotations.CreationTimestamp
import org.hibernate.annotations.UpdateTimestamp
import java.time.LocalDate

@Entity
@Table(name = "comment")
class Comment(
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false)
    var id: Long? = null,

    @Lob
    @Column(name = "comment", nullable = false)
    var comment: String,

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
    @JoinColumn(name = "user_id", nullable = false)
    var user: User,

    @JsonIgnore
    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "book_id", nullable = false)
    var book: Book
)
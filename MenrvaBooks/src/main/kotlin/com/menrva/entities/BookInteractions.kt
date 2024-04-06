package com.menrva.entities

import com.fasterxml.jackson.annotation.JsonIgnore
import jakarta.persistence.*
import java.io.Serializable
import java.util.*



//@JsonIdentityInfo(
//    generator = ObjectIdGenerators.PropertyGenerator::class,
//    property = "id"
//)
@Entity
@Table(name = "book_interactions")
data class BookInteractions(
    @EmbeddedId
    val id: BookInteractionsId? = null,
    @JsonIgnore
    @MapsId("bookId")
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "book_id")
    val book: Book,
    @JsonIgnore
    @MapsId("userId")
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id")
    val user: User,
    @Column(name = "has_read")
    val hasRead: Boolean = false,
    @Column(name = "interested")
    val interested: Boolean = false,
    @Column(name = "favorite")
    val favorite: Boolean = false,
    @Column(name = "like_dislike")
    val likeDislike: Int = 0,
)

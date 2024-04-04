package com.menrva.entities

import com.fasterxml.jackson.annotation.JsonIdentityInfo
import com.fasterxml.jackson.annotation.ObjectIdGenerators
import jakarta.persistence.*
import java.io.Serializable

@Embeddable
data class BookInteractionId(
    @Column(name = "user_id", nullable = false)
    val userId: Int? = null,
    @Column(name = "book_id", nullable = false)
    val bookId: Int? = null,
) : Serializable

@JsonIdentityInfo(
    generator = ObjectIdGenerators.PropertyGenerator::class,
    property = "id"
)
@Entity
@Table(name = "book_interactions")
data class BookInteractions(
    @EmbeddedId
    val id: BookInteractionId,
    @ManyToOne @JoinColumn(name = "book_id") @MapsId("bookId")
    val book: Book? = null,
    @ManyToOne @JoinColumn(name = "user_id") @MapsId("userId")
    val user: User? = null,
    @Column(name = "has_read")
    val hasRead: Boolean = false,
    @Column(name = "interested")
    val interested: Boolean = false,
    @Column(name = "favorite")
    val favorite: Boolean = false,
    @Column(name = "like_dislike")
    val likeDislike: Int = 0,
)

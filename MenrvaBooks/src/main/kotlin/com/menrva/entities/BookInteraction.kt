package com.menrva.entities

import com.fasterxml.jackson.annotation.JsonIdentityInfo
import com.fasterxml.jackson.annotation.JsonIgnore
import com.fasterxml.jackson.annotation.ObjectIdGenerators
import jakarta.persistence.*
import java.util.*


@JsonIdentityInfo(
    generator = ObjectIdGenerators.PropertyGenerator::class,
    property = "id"
)
@Entity
@Table(name = "book_interactions")
class BookInteraction(
    @EmbeddedId
    var id: BookInteractionId,
    @JsonIgnore
    @MapsId("bookId")
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "book_id")
    var book: Book,
    @JsonIgnore
    @MapsId("userId")
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id")
    var user: User,
    @Column(name = "has_read")
    var hasRead: Boolean? = false,
    var interested: Boolean? = false,
    var favorite: Boolean? = false,
    @Column(name = "like_dislike")
    var likeDislike: Int? = 0,
) {
//    constructor(id: BookInteractionId, book: Book, user: User, likeDislike: Int?, ) : this(
//        id = id,
//        book = book, // You need to provide a default Book instance, consider fetching from DB if necessary
//        user = user, // Same for User, you need a default or actual instance
//        hasRead = false,
//        interested = false,
//        favorite = false,
//        likeDislike = likeDislike ?: this.likeDislike
//    )
}

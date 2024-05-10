package com.menrva.entities

import com.fasterxml.jackson.annotation.JsonBackReference
import com.fasterxml.jackson.annotation.JsonIgnore
import jakarta.persistence.*
import org.hibernate.annotations.CreationTimestamp
import org.hibernate.annotations.UpdateTimestamp
import org.springframework.data.elasticsearch.annotations.Document
import org.springframework.data.elasticsearch.annotations.Field
import org.springframework.data.elasticsearch.annotations.FieldType
import java.time.LocalDate

@Entity
@Document(indexName = "books")
class Book(
    @jakarta.persistence.Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    @org.springframework.data.annotation.Id
    var id: Long? = null,
    var cover: String? = null,
    @Field(type = FieldType.Text, index = true)
    var title: String? = null,
    var description: String? = null,
    @Column(name = "page_count")
    var pageCount: Int? = null,
    @Column(name = "publication_date")
    var publicationDate: LocalDate? = null,
    @CreationTimestamp
    @Column(name = "date_added")
    var dateAdded: LocalDate? = null,
    @UpdateTimestamp
    @Column(name = "date_updated")
    var dateUpdated: LocalDate? = null,
    @Column(name = "reviewed", nullable = false)
    var reviewed: Boolean? = false,
    @JsonBackReference(value = "books")
    @ManyToMany(fetch = FetchType.LAZY)
    @JoinTable(
        name = "book_has_genre",
        joinColumns = [JoinColumn(name = "book_id")],
        inverseJoinColumns = [JoinColumn(name = "genre_id")]
    )
    var genres: MutableSet<Genre> = mutableSetOf(),
//    @JsonBackReference(value = "books")
    @JsonIgnore
    @ManyToMany(fetch = FetchType.LAZY)
    @JoinTable(
        name = "book_has_keyword",
        joinColumns = [JoinColumn(name = "book_id")],
        inverseJoinColumns = [JoinColumn(name = "keyword_id")]
    )
    var keywords: MutableSet<Keyword> = mutableSetOf(),
    @JsonIgnore
//    @JsonBackReference(value = "books")
    @ManyToMany(fetch = FetchType.LAZY)
    @JoinTable(
        name = "book_has_tag",
        joinColumns = [JoinColumn(name = "book_id")],
        inverseJoinColumns = [JoinColumn(name = "tag_id")]
    )
    var tags: MutableSet<Tag> = mutableSetOf(),
    @JsonIgnore
//    @JsonBackReference(value = "books")
    @ManyToOne(cascade = [CascadeType.MERGE])
    @JoinColumn(name = "series_id")
    var series: Series? = null,
    @JsonIgnore
    @OneToMany(mappedBy = "book", fetch = FetchType.EAGER)
    var bookInteractions: MutableSet<BookInteraction> = mutableSetOf(),
    @JsonIgnore
    @ManyToMany(mappedBy = "books")
    var authors: MutableSet<Author> = mutableSetOf(),
    @JsonIgnore
    @ManyToMany(mappedBy = "books")
    var subGenres: MutableSet<SubGenre> = mutableSetOf(),
    @JsonIgnore
    @OneToMany(mappedBy = "book")
    var comments: MutableSet<Comment> = mutableSetOf(),
    @JsonIgnore
    @OneToMany(mappedBy = "book")
    var links: MutableSet<Link> = mutableSetOf(),
    @Transient
    var numberOfLikes: Int? = null,
    @Transient
    var numberOfDislikes: Int? = null,
) {

    override fun equals(other: Any?): Boolean {
        if (this === other) return true
        if (javaClass != other?.javaClass) return false

        other as Book

        if (id != other.id) return false
        if (title != other.title) return false

        return true
    }

    override fun hashCode(): Int {
        var result = id.hashCode()
        result = 31 * result + title.hashCode()
        return result
    }

    override fun toString(): String {
        return "Book(id=$id, title='$title', series='${series?.name}')"
    }

}


package com.menrva.entities

import com.fasterxml.jackson.annotation.JsonBackReference
import com.fasterxml.jackson.annotation.JsonIgnore
import jakarta.persistence.*
import org.springframework.data.elasticsearch.annotations.Document
import org.springframework.data.elasticsearch.annotations.Field
import org.springframework.data.elasticsearch.annotations.FieldType
import java.time.LocalDate

@Entity
@Document(indexName = "books")
data class Book(
    @jakarta.persistence.Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    @org.springframework.data.annotation.Id
    val id: Long,
    val cover: String,
    val title: String,
    val description: String,
    @Column(name = "page_count")
    @Field(type = FieldType.Integer, name = "page_count")
    val pageCount: Int,
    @Column(name = "publication_date")
    @Field(type = FieldType.Date, name = "publication_date", format = [], pattern = ["uuuu-MM-dd"])
    val publicationDate: LocalDate,
    @Column(name = "date_added")
    @Field(type = FieldType.Date, name = "date_added", format = [], pattern = ["uuuu-MM-dd"])
    val dateAdded: LocalDate?,
    @Column(name = "date_updated")
    @Field(type = FieldType.Date, name = "date_updated", format = [], pattern = ["uuuu-MM-dd"])
    val dateUpdated: LocalDate?,
    @Column(name = "reviewed", nullable = false)
    @Field(type = FieldType.Boolean)
    val reviewed: Boolean,
    @JsonBackReference(value = "books")
    @ManyToMany(fetch = FetchType.LAZY)
    @JoinTable(
        name = "book_has_genre",
        joinColumns = [JoinColumn(name = "book_id")],
        inverseJoinColumns = [JoinColumn(name = "genre_id")]
    )
    val genres: Set<Genre> = HashSet(),
//    @JsonBackReference(value = "books")
    @JsonIgnore
    @ManyToMany(fetch = FetchType.LAZY)
    @JoinTable(
        name = "book_has_keyword",
        joinColumns = [JoinColumn(name = "book_id")],
        inverseJoinColumns = [JoinColumn(name = "keyword_id")]
    )
    val keywords: Set<Keyword> = HashSet(),
    @JsonIgnore
//    @JsonBackReference(value = "books")
    @ManyToMany(fetch = FetchType.LAZY)
    @JoinTable(
        name = "book_has_tag",
        joinColumns = [JoinColumn(name = "book_id")],
        inverseJoinColumns = [JoinColumn(name = "tag_id")]
    )
    val tags: Set<Tag> = HashSet(),
    @JsonIgnore
//    @JsonBackReference(value = "books")
    @ManyToOne @JoinColumn(name = "series_id")
    val series: Series?,
    @OneToMany(mappedBy = "book")
    val bookInteractions: Set<BookInteractions> = HashSet(),
    @ManyToMany(mappedBy = "books")
    val authors: MutableSet<Author> = mutableSetOf(),

    @ManyToMany(mappedBy = "books")
    val subGenres: MutableSet<SubGenre> = mutableSetOf(),

    @OneToMany(mappedBy = "book")
    val comments: MutableSet<Comment> = mutableSetOf(),

    @OneToMany(mappedBy = "book")
    val links: MutableSet<Link> = mutableSetOf()
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
}


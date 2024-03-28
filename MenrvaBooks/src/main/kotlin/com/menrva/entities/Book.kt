package com.menrva.entities

import com.fasterxml.jackson.annotation.JsonBackReference
import com.fasterxml.jackson.annotation.JsonIdentityInfo
import com.fasterxml.jackson.annotation.ObjectIdGenerators
import jakarta.persistence.*
import org.springframework.data.elasticsearch.annotations.Document
import java.time.LocalDate

@Entity
@Document(indexName = "books")
data class Book(
    @jakarta.persistence.Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    @org.springframework.data.annotation.Id
    val id: Long,
    val cover: String?,
    val title: String?,
    val description: String?,
    @Column(name = "page_count")
    val pageCount: Int?,
    @Column(name = "publication_date")
    val publicationDate: LocalDate?,
    @Column(name = "date_added")
    val dateAdded: LocalDate?,
    @Column(name = "date_updated")
    val dateUpdated: LocalDate?,
    @JsonBackReference(value = "books")
    @ManyToMany(fetch = FetchType.LAZY)
    @JoinTable(
        name = "book_has_genre",
        joinColumns = [JoinColumn(name = "book_id")],
        inverseJoinColumns = [JoinColumn(name = "genre_id")]
    )
    val genres: Set<Genre> = HashSet(),
    @JsonBackReference(value = "books")
    @ManyToMany(fetch = FetchType.LAZY)
    @JoinTable(
        name = "book_has_keyword",
        joinColumns = [JoinColumn(name = "book_id")],
        inverseJoinColumns = [JoinColumn(name = "keyword_id")]
    )
    val keywords: Set<Keyword> = HashSet(),
    @JsonBackReference(value = "books")
    @ManyToMany(fetch = FetchType.LAZY)
    @JoinTable(
        name = "book_has_tag",
        joinColumns = [JoinColumn(name = "book_id")],
        inverseJoinColumns = [JoinColumn(name = "tag_id")]
    )
    val tags: Set<Tag> = HashSet(),
    @JsonBackReference(value = "books")
    @ManyToOne @JoinColumn(name = "series_id")
    val series: Series?,
    @OneToMany(mappedBy = "book")
    val bookInteractions: Set<BookInteractions> = HashSet()
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


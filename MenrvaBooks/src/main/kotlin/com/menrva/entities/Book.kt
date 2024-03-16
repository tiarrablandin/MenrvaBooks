package com.menrva.entities

import jakarta.persistence.*
import java.time.LocalDate
import java.time.LocalDateTime

@Entity
data class Book(
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    val id: Long,
    val cover: String,
    val title: String,
    val description: String,
    @Column(name = "page_count")
    val pageCount: Int,
    @Column(name = "publication_date")
    val publicationDate: LocalDate,
    @Column(name = "date_added")
    val dateAdded: LocalDate,
    @Column(name = "date_updated")
    val dateUpdated: LocalDate,
    @ManyToMany(fetch = FetchType.LAZY)
    @JoinTable( name = "book_has_genre",
        joinColumns = [JoinColumn(name = "book_id")],
        inverseJoinColumns = [JoinColumn(name = "genre_id")] )
    val genres: Set<Genre> = HashSet(),
    @ManyToMany(fetch = FetchType.LAZY)
    @JoinTable( name = "book_has_keyword",
        joinColumns = [JoinColumn(name = "book_id")],
        inverseJoinColumns = [JoinColumn(name = "keyword_id")] )
    val keywords: Set<Keyword> = HashSet(),
    @ManyToMany(fetch = FetchType.LAZY)
    @JoinTable( name = "book_has_tag",
        joinColumns = [JoinColumn(name = "book_id")],
        inverseJoinColumns = [JoinColumn(name = "tag_id")] )
    val tags: Set<Tag> = HashSet(),
    @ManyToOne @JoinColumn(name = "series_id")
    val series: Series?
)

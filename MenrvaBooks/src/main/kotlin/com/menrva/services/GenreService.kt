package com.menrva.services

import com.menrva.data.book.BookSummary
import com.menrva.entities.Genre
import com.menrva.repositories.GenreRepository
import org.springframework.stereotype.Service
import java.util.*

@Service
class GenreService(
        private val genreRepo: GenreRepository
) {
    fun index(): List<Genre> {
        return genreRepo.findAll()
    }

    fun findById(id: Long): Optional<Genre> {
        return genreRepo.findById(id)
    }

    fun toggleReviewed(id: Long): Genre {
        val genre = genreRepo.findById(id).orElseThrow { RuntimeException("Book not found") }
        val newReviewedStatus = genre.reviewed?.not() ?: true
        genre.reviewed = newReviewedStatus
        return genreRepo.save(genre)
    }
}

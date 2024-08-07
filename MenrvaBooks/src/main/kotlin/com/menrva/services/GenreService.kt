package com.menrva.services

import com.menrva.data.book.BookSummary
import com.menrva.entities.Genre
import com.menrva.repositories.GenreRepository
import jakarta.transaction.Transactional
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

    fun updateGenreName(id: Long, genreName: String): Genre {
        val genre = genreRepo.findById(id).orElseThrow { RuntimeException("Genre not found") }
        genre.name = genreName
        return genreRepo.save(genre)
    }

    fun create(genreName: String): Genre {
        return genreRepo.save(Genre(name = genreName))
    }

    fun toggleReviewed(id: Long): Genre {
        val genre = genreRepo.findById(id).orElseThrow { RuntimeException("Genre not found") }
        val newReviewedStatus = genre.reviewed?.not() ?: true
        genre.reviewed = newReviewedStatus
        return genreRepo.save(genre)
    }

    @Transactional
    fun delete(id: Long): Boolean {
        val genre = genreRepo.findById(id).orElseThrow { RuntimeException("Genre not found") }
        genreRepo.delete(genre)
        return genreRepo.existsById(id)
    }
}

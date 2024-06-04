package com.menrva.services

import com.menrva.entities.Genre
import com.menrva.entities.Keyword
import com.menrva.entities.SubGenre
import com.menrva.repositories.SubGenreRepository
import org.springframework.stereotype.Service
import java.util.*

@Service
class SubgenreService(private val subgenreRepo: SubGenreRepository) {
    fun index(): List<SubGenre> {
        return subgenreRepo.findAll()
    }

    fun findById(id: Long): Optional<SubGenre> {
        return subgenreRepo.findById(id)
    }

    fun create(subgenreName: String): SubGenre {
        return subgenreRepo.save(SubGenre(name = subgenreName))
    }

    fun updateGenreName(id: Long, subgenreName: String): SubGenre {
        val subgenre = subgenreRepo.findById(id).orElseThrow { RuntimeException("Genre not found") }
        subgenre.name = subgenreName
        return subgenreRepo.save(subgenre)
    }

    fun toggleReviewed(id: Long): SubGenre {
        val subgenre = subgenreRepo.findById(id).orElseThrow { RuntimeException("Genre not found") }
        val newReviewedStatus = subgenre.reviewed?.not() ?: true
        subgenre.reviewed = newReviewedStatus
        return subgenreRepo.save(subgenre)
    }
}
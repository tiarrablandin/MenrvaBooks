package com.menrva.services

import com.menrva.entities.Genre
import com.menrva.repositories.GenreRepository
import org.springframework.stereotype.Service

@Service
class GenreService(
        private val genreRepo: GenreRepository
) {
    fun index(): List<Genre> {
        return genreRepo.findAll()
    }
}

package com.menrva.services

import com.menrva.entities.Book
import com.menrva.entities.Genre
import com.menrva.entities.Keyword
import com.menrva.repositories.BookRepository
import com.menrva.repositories.GenreRepository
import com.menrva.repositories.KeywordRepository
import org.springframework.stereotype.Service
import java.time.LocalDate
import java.util.*

@Service
class GenreService(
        private val genreRepo: GenreRepository
) {
    fun index(): List<Genre> {
        return genreRepo.findAll()
    }
}

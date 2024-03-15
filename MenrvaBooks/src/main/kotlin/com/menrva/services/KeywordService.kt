package com.menrva.services

import com.menrva.entities.Book
import com.menrva.entities.Keyword
import com.menrva.repositories.BookRepository
import com.menrva.repositories.KeywordRepository
import org.springframework.stereotype.Service
import java.time.LocalDate
import java.util.*

@Service
class KeywordService(
        private val keywordRepo: KeywordRepository
) {
    fun index(): List<Keyword> {
        return keywordRepo.findAll()
    }
}

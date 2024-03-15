package com.menrva.services

import com.menrva.entities.Book
import com.menrva.entities.Keyword
import com.menrva.entities.Tag
import com.menrva.repositories.BookRepository
import com.menrva.repositories.KeywordRepository
import com.menrva.repositories.TagRepository
import org.springframework.stereotype.Service
import java.time.LocalDate
import java.util.*

@Service
class TagService(
        private val tagRepo: TagRepository
) {
    fun index(): List<Tag> {
        return tagRepo.findAll()
    }
}

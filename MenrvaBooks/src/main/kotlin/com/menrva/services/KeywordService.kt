package com.menrva.services

import com.menrva.entities.Keyword
import com.menrva.repositories.KeywordRepository
import org.springframework.stereotype.Service
import java.util.*

@Service
class KeywordService(
        private val keywordRepo: KeywordRepository
) {
    fun index(): List<Keyword> {
        return keywordRepo.findAll()
    }

    fun findById(id: Long): Optional<Keyword> {
        return keywordRepo.findById(id)
    }

    fun toggleReviewed(id: Long): Keyword {
        val keyword = keywordRepo.findById(id).orElseThrow { RuntimeException("Book not found") }
        val newReviewedStatus = keyword.reviewed?.not() ?: true
        keyword.reviewed = newReviewedStatus
        return keywordRepo.save(keyword)
    }
}

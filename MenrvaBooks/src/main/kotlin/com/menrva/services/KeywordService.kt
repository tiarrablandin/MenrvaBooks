package com.menrva.services

import com.menrva.entities.Genre
import com.menrva.entities.Keyword
import com.menrva.repositories.KeywordRepository
import jakarta.transaction.Transactional
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

    fun create(keywordName: String): Keyword {
        return keywordRepo.save(Keyword(name = keywordName))
    }

    fun updateKeywordName(id: Long, keywordName: String): Keyword {
        val keyword = keywordRepo.findById(id).orElseThrow { RuntimeException("Keyword not found") }
        keyword.name = keywordName
        return keywordRepo.save(keyword)
    }

    fun toggleReviewed(id: Long): Keyword {
        val keyword = keywordRepo.findById(id).orElseThrow { RuntimeException("Keyword not found") }
        val newReviewedStatus = keyword.reviewed?.not() ?: true
        keyword.reviewed = newReviewedStatus
        return keywordRepo.save(keyword)
    }

    @Transactional
    fun delete(id: Long): Boolean {
        val keyword = keywordRepo.findById(id).orElseThrow { RuntimeException("Keyword not found") }
        keywordRepo.delete(keyword)
        return keywordRepo.existsById(id)
    }
}

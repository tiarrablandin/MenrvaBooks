package com.menrva.services

import com.menrva.entities.Keyword
import com.menrva.repositories.KeywordRepository
import org.springframework.stereotype.Service

@Service
class KeywordService(
        private val keywordRepo: KeywordRepository
) {
    fun index(): List<Keyword> {
        return keywordRepo.findAll()
    }
}

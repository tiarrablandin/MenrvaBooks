package com.menrva.services

import com.menrva.entities.Tag
import com.menrva.repositories.TagRepository
import org.springframework.stereotype.Service

@Service
class TagService(
        private val tagRepo: TagRepository
) {
    fun index(): List<Tag> {
        return tagRepo.findAll()
    }
}

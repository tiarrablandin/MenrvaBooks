package com.menrva.services

import com.menrva.entities.Keyword
import com.menrva.entities.Tag
import com.menrva.repositories.TagRepository
import org.springframework.stereotype.Service
import java.util.*

@Service
class TagService(
    private val tagRepo: TagRepository
) {

    fun index(): List<Tag> {
        return tagRepo.findAll()
    }

    fun findById(id: Long): Optional<Tag> {
        return tagRepo.findById(id)
    }

    fun updateTagName(id: Long, tagName: String): Tag {
        val tag = tagRepo.findById(id).orElseThrow { RuntimeException("Keyword not found") }
        tag.name = tagName
        return tagRepo.save(tag)
    }

    fun toggleReviewed(id: Long): Tag {
        val tag = tagRepo.findById(id).orElseThrow { RuntimeException("Book not found") }
        val newReviewedStatus = tag.reviewed?.not() ?: true
        tag.reviewed = newReviewedStatus
        return tagRepo.save(tag)
    }
}

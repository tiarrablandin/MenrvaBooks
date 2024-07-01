package com.menrva.services

import com.menrva.entities.Keyword
import com.menrva.entities.SubGenre
import com.menrva.entities.Tag
import com.menrva.repositories.TagRepository
import jakarta.transaction.Transactional
import org.springframework.stereotype.Service
import java.util.*

@Service
class TagService(
    private val tagRepo: TagRepository
) {

    fun index(): List<Tag> {
        return tagRepo.findAll()
    }

    fun create(tagName: String): Tag {
        return tagRepo.save(Tag(name = tagName))
    }

    fun findById(id: Long): Optional<Tag> {
        return tagRepo.findById(id)
    }

    fun updateTagName(id: Long, tagName: String): Tag {
        val tag = tagRepo.findById(id).orElseThrow { RuntimeException("Tag not found") }
        tag.name = tagName
        return tagRepo.save(tag)
    }

    fun toggleReviewed(id: Long): Tag {
        val tag = tagRepo.findById(id).orElseThrow { RuntimeException("Tag not found") }
        val newReviewedStatus = tag.reviewed?.not() ?: true
        tag.reviewed = newReviewedStatus
        return tagRepo.save(tag)
    }

    @Transactional
    fun delete(id: Long): Boolean {
        val tag = tagRepo.findById(id).orElseThrow { RuntimeException("Tag not found") }
        tagRepo.delete(tag)
        return tagRepo.existsById(id)
    }
}

package com.menrva.services

import com.menrva.data.author.AuthorUpdateDTO
import com.menrva.entities.Author
import com.menrva.entities.Book
import com.menrva.repositories.AuthorRepository
import jakarta.transaction.Transactional
import org.springframework.stereotype.Service
import java.util.*

@Service
class AuthorService(
        private val authorRepo: AuthorRepository
) {
    fun index(): List<Author> {
        return authorRepo.findAll()
    }
    fun findById(id: Long): Optional<Author> = authorRepo.findById(id)

    @Transactional
    fun create(author: Author): Author {
        if (authorRepo.existsByPenName(author.penName!!)) return author
        return authorRepo.save(author)
    }

    fun toggleReviewed(id: Long): Author {
        val author = authorRepo.findById(id).orElseThrow { RuntimeException("Author not found") }
        val newReviewedStatus = author.reviewed?.not() ?: true
        author.reviewed = newReviewedStatus
        return authorRepo.save(author)
    }

    @Transactional
    fun update(id: Long, authorUpdateDTO: AuthorUpdateDTO): Author? {
        val author: Author = authorRepo.findById(id).orElse(null) ?: return null

        val updatedAuthor = Author(
            id = authorUpdateDTO.id,
            photo = authorUpdateDTO.photo,
            penName = authorUpdateDTO.penName,
            bio = authorUpdateDTO.bio,
            text = authorUpdateDTO.text,
            // Do not update `dateCreated`; it's set automatically
        )
        return authorRepo.save(updatedAuthor)
    }

    @Transactional
    fun delete(id: Long) = authorRepo.deleteById(id)
}

package com.menrva.services

import com.menrva.entities.Author
import com.menrva.repositories.AuthorRepository
import jakarta.transaction.Transactional
import org.springframework.stereotype.Service

@Service
class AuthorService(
        private val authorRepo: AuthorRepository
) {
    fun index(): List<Author> {
        return authorRepo.findAll()
    }
    fun findById(id: Long): Optional<Author> = authorRepo.findById(id)

    @Transactional
    fun create(author: Author): Author = authorRepo.save(author)

    @Transactional
    fun update(id: Long, updatedAuthor: Author): Author? {
        val author: Author = authorRepo.findById(id).orElse(null) ?: return null
        author.apply {
            photo = updatedAuthor.photo
            penName = updatedAuthor.penName
            bio = updatedAuthor.bio
            text = updatedAuthor.text
            // Do not update `dateCreated`; it's set automatically
        }
        return authorRepo.save(author)
    }

    @Transactional
    fun delete(id: Long) = authorRepo.deleteById(id)
}

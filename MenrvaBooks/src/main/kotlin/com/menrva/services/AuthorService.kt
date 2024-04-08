package com.menrva.services

import com.menrva.data.AuthorUpdateDTO
import com.menrva.entities.Author
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
        if (authorRepo.existsByPenName(author.penName)) return author
        return authorRepo.save(author)
    }

    @Transactional
    fun update(id: Long, authorUpdateDTO: AuthorUpdateDTO): Author? {
        val author: Author = authorRepo.findById(id).orElse(null) ?: return null

        val updatedAuthor= author.copy(
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

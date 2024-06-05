package com.menrva.services

import com.menrva.data.author.AuthorSummary
import com.menrva.data.author.AuthorUpdateDTO
import com.menrva.data.book.BookSummary
import com.menrva.entities.Author
import com.menrva.entities.Book
import com.menrva.entities.User
import com.menrva.exceptions.AuthorNotFoundException
import com.menrva.exceptions.UserNotFoundException
import com.menrva.repositories.AuthorRepository
import com.menrva.repositories.UserRepository
import jakarta.transaction.Transactional
import org.springframework.stereotype.Service
import java.util.*

@Service
class AuthorService(
    private val authorRepo: AuthorRepository, private val userRepo: UserRepository
) {
    fun index(): List<AuthorSummary> {
        return authorRepo.findAllAuthorsAsSummaries()
    }

    fun findById(id: Long): Optional<Author> = authorRepo.findById(id)

    fun findByPenName(penName: String): List<AuthorSummary> = authorRepo.findByPenNameContainingIgnoreCase(penName)

    fun findByAuthorId(authorId: Long): List<BookSummary> {
        return authorRepo.findBooksByAuthorId(authorId)
    }

    fun followAuthor(userId: Long, authorId: Long): User {
        val user = userRepo.findById(userId).orElseThrow { UserNotFoundException("User not found with id: $userId") }
        val author =
            authorRepo.findById(authorId).orElseThrow { AuthorNotFoundException("Author not found with id: $authorId") }

        user.authors.add(author)
        return userRepo.save(user)
    }

    fun unfollowAuthor(userId: Long, authorId: Long): User {
        val user = userRepo.findById(userId).orElseThrow { UserNotFoundException("User not found with id: $userId") }
        val author =
            authorRepo.findById(authorId).orElseThrow { AuthorNotFoundException("Author not found with id: $authorId") }

        user.authors.remove(author)
        return userRepo.save(user)
    }

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

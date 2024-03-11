package com.menrva.services

import com.menrva.entities.Author
import com.menrva.repositories.AuthorRepository
import org.springframework.stereotype.Service

@Service
class AuthorService(
    private val authorRepo: AuthorRepository
) {
    fun index(): List<Author> {
        return authorRepo.findAll()
    }
}
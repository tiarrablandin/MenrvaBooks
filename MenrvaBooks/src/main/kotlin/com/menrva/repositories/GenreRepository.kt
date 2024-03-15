package com.menrva.repositories

import com.menrva.entities.Author
import com.menrva.entities.Book
import com.menrva.entities.Genre
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.data.jpa.repository.Query
import org.springframework.data.repository.query.Param
import org.springframework.stereotype.Repository

@Repository
interface GenreRepository : JpaRepository<Genre, Int> {
    fun findByName(name: String): List<Genre>
}

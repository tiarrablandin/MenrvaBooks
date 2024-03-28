package com.menrva.repositories

import com.menrva.entities.SubGenre
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.stereotype.Repository

@Repository
interface SubGenreRepository : JpaRepository<SubGenre, Int> {
    fun findByName(name: String): List<SubGenre>
}
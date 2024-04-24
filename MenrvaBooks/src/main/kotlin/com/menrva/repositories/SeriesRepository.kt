package com.menrva.repositories

import com.menrva.entities.Series
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.stereotype.Repository

@Repository
interface SeriesRepository : JpaRepository<Series, Long> {
    fun findByName(name: String): List<Series>
}
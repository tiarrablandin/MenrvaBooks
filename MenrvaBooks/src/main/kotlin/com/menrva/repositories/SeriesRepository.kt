package com.menrva.repositories

import com.menrva.data.series.SeriesSummary
import com.menrva.entities.Series
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.data.jpa.repository.Query
import org.springframework.data.repository.query.Param
import org.springframework.stereotype.Repository

@Repository
interface SeriesRepository : JpaRepository<Series, Long> {
    @Query("SELECT s FROM Series s")
    fun index(): List<SeriesSummary>
    @Query("SELECT s FROM Series s WHERE s.name = :name")
    fun findByName(@Param("name") name: String): List<SeriesSummary>
    @Query("SELECT s FROM Series s WHERE s.id = :id")
    fun findSeriesById(@Param("id") id: Long): SeriesSummary
}
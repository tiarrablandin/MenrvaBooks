package com.menrva.services

import com.menrva.entities.Series
import com.menrva.repositories.SeriesRepository
import org.springframework.stereotype.Service
import java.util.*

@Service
class SeriesService(
    private val seriesRepo: SeriesRepository
) {
    fun index(): List<Series> {
        return seriesRepo.findAll()
    }

    fun findById(id: Long): Optional<Series> {
        return seriesRepo.findById(id)
    }

    fun toggleReviewed(id: Long): Series {
        val series = seriesRepo.findById(id).orElseThrow { RuntimeException("Book not found") }
        val newReviewedStatus = series.reviewed?.not() ?: true
        series.reviewed = newReviewedStatus
        return seriesRepo.save(series)
    }
}
package com.menrva.services

import com.menrva.data.series.SeriesSummary
import com.menrva.entities.Series
import com.menrva.repositories.SeriesRepository
import org.springframework.stereotype.Service

@Service
class SeriesService(
    private val seriesRepo: SeriesRepository
) {
    fun index(): List<SeriesSummary> {
        return seriesRepo.index()
    }

    fun findById(id: Long): SeriesSummary {
        return seriesRepo.findSeriesById(id)
    }

    fun toggleReviewed(id: Long): Series {
        val series = seriesRepo.findById(id).orElseThrow { RuntimeException("Book not found") }
        val newReviewedStatus = series.reviewed?.not() ?: true
        series.reviewed = newReviewedStatus
        return seriesRepo.save(series)
    }
}
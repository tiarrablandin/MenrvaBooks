package com.menrva.controllers

import com.menrva.data.SeriesDTO
import com.menrva.data.TagDTO
import com.menrva.services.SeriesService
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.*

@RestController
@RequestMapping("api/series")
@CrossOrigin("*", "http://localhost")
class SeriesController (private val seriesService: SeriesService) {
    @GetMapping("")
    fun index(): ResponseEntity<List<SeriesDTO>> {
        return ResponseEntity.ok(seriesService.index().map { SeriesDTO(it) })
    }

    @GetMapping("{id}")
    fun findById(@PathVariable id: Long): ResponseEntity<Any> {
        return ResponseEntity.ok(seriesService.findById(id))
    }

    @PostMapping("/{id}/toggle-reviewed")
    fun toggleSeriesReviewed(@PathVariable id: Long): ResponseEntity<SeriesDTO> {
        val updatedSeries = seriesService.toggleReviewed(id)
        return ResponseEntity.ok(SeriesDTO(updatedSeries))
    }
}
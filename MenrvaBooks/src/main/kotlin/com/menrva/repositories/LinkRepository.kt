package com.menrva.repositories

import com.menrva.entities.Link
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.stereotype.Repository

@Repository
interface LinkRepository : JpaRepository<Link, Int> {
    fun findByName(name: String): List<Link>
    fun findLinkById(id: Int): Link?
}
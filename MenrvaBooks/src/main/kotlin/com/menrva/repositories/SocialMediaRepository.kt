package com.menrva.repositories

import com.menrva.entities.SocialMedia
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.stereotype.Repository
import java.util.*

@Repository
interface SocialMediaRepository : JpaRepository<SocialMedia, Int> {
    fun findByName(name: String): List<SocialMedia>
    fun findSocialMediaById(id: Int): SocialMedia?
}
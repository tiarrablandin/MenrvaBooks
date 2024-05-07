package com.menrva.repositories

import com.menrva.entities.Link
import com.menrva.entities.Subscription
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.stereotype.Repository

@Repository
interface SubscriptionRepository : JpaRepository<Subscription, Long> {
    fun findSubscriptionById(id: Long): Subscription?
}
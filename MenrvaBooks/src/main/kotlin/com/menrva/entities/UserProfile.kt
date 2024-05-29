package com.menrva.entities

import jakarta.persistence.*

@Entity
class UserProfile (
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    var id: Long? = null,
    @MapsId
    @OneToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id")
    var user: User,
    var preferenceVector: String? = null,
    var recommendationScore: Double? = null
)
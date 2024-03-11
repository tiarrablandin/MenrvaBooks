package com.menrva.entities

import jakarta.persistence.*
import java.time.LocalDateTime

@Entity
data class User(
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    val id: Int,
    @Column(name = "first_name")
    val firstName: String,
    @Column(name = "last_name")
    val lastName: String,
    val tag: String,
    val username: String,
    val password: String,
    val active: Boolean,
    val role: String,
    val email: String,
    @Column(name = "date_added")
    val dateAdded: LocalDateTime,
    @Column(name = "date_updated")
    val dateUpdated: LocalDateTime,
) {
    override fun equals(other: Any?): Boolean {
        if (this === other) return true
        if (javaClass != other?.javaClass) return false

        other as User

        if (id != other.id) return false
        if (username != other.username) return false
        if (password != other.password) return false
        if (role != other.role) return false
        return email == other.email
    }

    override fun hashCode(): Int {
        var result = id
        result = 31 * result + username.hashCode()
        result = 31 * result + password.hashCode()
        result = 31 * result + role.hashCode()
        result = 31 * result + email.hashCode()
        return result
    }

    override fun toString(): String {
        return "User(id=$id, username='$username', role='$role', email='$email')"
    }
}


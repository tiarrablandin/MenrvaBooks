package com.menrva.data

import com.menrva.entities.Series
import com.menrva.entities.User

data class UserDTO(
    val id: Long,
    val firstName: String,
    val lastName: String,
    val tag: String,
    val username: String,
    val active: Boolean,
    val role: String,
    val email: String,
    val password: String,
) {
    constructor(user: User) : this(
        id = user.id,
        firstName = user.firstName,
        lastName = user.lastName,
        tag = user.tag,
        username = user.username,
        active = user.active,
        role = user.role,
        email = user.email,
        password = user.password
    )
}

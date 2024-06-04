package com.menrva.data.user

import com.menrva.data.BookInteractionDTO
import com.menrva.entities.BookInteraction
import com.menrva.entities.Series
import com.menrva.entities.Subscription
import com.menrva.entities.User
import java.time.LocalDate

data class UserDTO(
    val id: Long?,
    val firstName: String?,
    val lastName: String?,
    val tag: String?,
    val active: Boolean?,
    val dateAdded: LocalDate?,
    val role: String?,
    val email: String?,
    val password: String?,
    val subscription: Subscription?,
    val bookInteractions: List<BookInteractionDTO>?
) {
    constructor(user: User) : this(
        id = user.id,
        firstName = user.firstName,
        lastName = user.lastName,
        tag = user.tag,
        active = user.active,
        dateAdded = user.dateAdded ?: LocalDate.now(),
        role = user.role,
        email = user.email,
        password = user.password,
        subscription = user.subscription,
        bookInteractions = user.bookInteractions.map { BookInteractionDTO(it) },
    )
}

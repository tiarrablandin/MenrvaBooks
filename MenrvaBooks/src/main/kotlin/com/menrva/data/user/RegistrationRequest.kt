package com.menrva.data.user

data class RegistrationRequest(
    val email: String,
    val tag: String,
    val firstName: String,
    val lastName: String,
    val password: String,
)
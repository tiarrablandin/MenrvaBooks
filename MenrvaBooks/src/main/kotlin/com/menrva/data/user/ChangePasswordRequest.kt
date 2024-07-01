package com.menrva.data.user

data class ChangePasswordRequest (
    val oldPassword: String,
    val newPassword: String
)
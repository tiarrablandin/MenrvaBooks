package com.menrva.data.user

import com.menrva.entities.User
import org.springframework.security.core.userdetails.UserDetails

class AuthenticationResponse(val jwt: String, val user: User)

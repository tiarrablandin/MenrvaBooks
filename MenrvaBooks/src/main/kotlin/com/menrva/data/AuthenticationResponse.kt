package com.menrva.data

import com.menrva.entities.User
import org.springframework.security.core.userdetails.UserDetails

class AuthenticationResponse(val jwt: String, val user: User)

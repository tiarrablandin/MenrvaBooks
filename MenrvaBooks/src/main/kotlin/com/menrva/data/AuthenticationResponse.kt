package com.menrva.data

import org.springframework.security.core.userdetails.UserDetails

class AuthenticationResponse(val jwt: String, val user: UserDetails)

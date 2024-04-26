package com.menrva.data.user

import com.menrva.entities.User
import org.springframework.security.core.GrantedAuthority
import org.springframework.security.core.authority.SimpleGrantedAuthority
import org.springframework.security.core.userdetails.UserDetails

data class UserDetailsImpl(
    val id: Long,
    private val tag: String,
    private val password: String,
    private val authorities: Collection<GrantedAuthority>,
) : UserDetails {

    override fun getAuthorities(): Collection<GrantedAuthority> = authorities

    override fun getPassword(): String = password

    override fun getUsername(): String = tag

    override fun isAccountNonExpired(): Boolean = true

    override fun isAccountNonLocked(): Boolean = true

    override fun isCredentialsNonExpired(): Boolean = true

    override fun isEnabled(): Boolean = true

    companion object {
        fun build(user: User): UserDetailsImpl {
            val authorities: GrantedAuthority = SimpleGrantedAuthority(user.role)

            return UserDetailsImpl(
                id = user.id!!,
                tag = user.tag!!,
                password = user.password!!,
                authorities = mutableListOf(authorities)
            )
        }
    }
}

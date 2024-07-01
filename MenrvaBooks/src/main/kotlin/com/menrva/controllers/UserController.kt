package com.menrva.controllers

import com.menrva.data.book.BookInteractionSummary
import com.menrva.data.user.ChangePasswordRequest
import com.menrva.data.user.UserDTO
import com.menrva.data.user.UserSummary
import com.menrva.services.BookInteractionService
import com.menrva.services.UserService
import org.springframework.http.ResponseEntity
import org.springframework.security.core.annotation.AuthenticationPrincipal
import org.springframework.security.core.userdetails.UserDetails
import org.springframework.web.bind.annotation.*

@RestController
@RequestMapping("/api/users")
@CrossOrigin("*", "http://localhost")
class UserController(
    private val bookInteractionService: BookInteractionService,
    private val userService: UserService
) {
//    ************ GET ************

    @GetMapping("principal/info")
    fun getPrincipalInfo(
        @AuthenticationPrincipal user: UserDetails,
    ): ResponseEntity<UserSummary> {
        return ResponseEntity.ok(userService.loadUserSummaryByIdentifier(user.username))
    }

    @GetMapping("")
    fun index(): ResponseEntity<List<UserDTO?>> {
        return ResponseEntity.ok(userService.index().map { UserDTO(it) })
    }

    @GetMapping("{tag}/info")
    fun findByTag(@PathVariable tag: String): ResponseEntity<UserSummary> {
        return ResponseEntity.ok(userService.loadUserSummaryByIdentifier(tag))
    }

    @GetMapping("{id}")
    fun findById(@PathVariable id: Long): ResponseEntity<Any> {
        return ResponseEntity.ok(userService.findById(id))
    }

    @GetMapping("/{tag}/liked-books")
    fun getLikedBooks(@PathVariable tag: String): ResponseEntity<List<BookInteractionSummary.Book>> {
        return ResponseEntity.ok(bookInteractionService.findLikedBooksByTag(tag))
    }

    @GetMapping("/{tag}/read-books")
    fun getReadBooks(@PathVariable tag: String): ResponseEntity<List<BookInteractionSummary.Book>> {
        return ResponseEntity.ok(bookInteractionService.findReadBooksByTag(tag))
    }


//    ************ POST ************

    @PostMapping("info")
    fun getUserByIdentifier(@RequestBody identifier: String): ResponseEntity<UserSummary> {
        return ResponseEntity.ok(userService.loadUserSummaryByIdentifier(identifier))
    }

    @PostMapping("/password-reset")
    fun requestPasswordReset(@RequestBody identifier: String): ResponseEntity<Any> {
        val token = userService.generatePasswordResetToken(identifier)
        // Send the token to the user's email (handled by your Next.js frontend)
        return ResponseEntity.ok(mapOf("message" to "Password reset token generated", "token" to token))
    }

    @PostMapping("{id}/active")
    fun toggleActive(@PathVariable id: Long): ResponseEntity<UserDTO> {
        return ResponseEntity.ok(UserDTO(userService.toggleActive(id)))
    }

//    ************ PUT ************

    @PutMapping("/change-password")
    fun changePassword(
        @AuthenticationPrincipal user: UserDetails,
        @RequestBody changePasswordRequest: ChangePasswordRequest
    ): ResponseEntity<Any> {
        userService.changePassword(user.username, changePasswordRequest.oldPassword, changePasswordRequest.newPassword)
        return ResponseEntity.ok(mapOf("message" to "Password has been changed"))
    }

    @PutMapping("/password-reset")
    fun resetPassword(@RequestParam token: String, @RequestBody newPassword: String): ResponseEntity<Any> {
        userService.resetPassword(token, newPassword)
        return ResponseEntity.ok(mapOf("message" to "Password has been reset"))
    }

    @DeleteMapping("{id}")
    fun deleteUser(@PathVariable id: Long): ResponseEntity<Any> {
        val deleted = userService.delete(id)
        return ResponseEntity.ok(deleted)
    }
}
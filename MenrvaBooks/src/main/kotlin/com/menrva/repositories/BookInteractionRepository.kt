package com.menrva.repositories

import com.menrva.data.book.BookInteractionSummary
import com.menrva.data.book.BookSummary
import com.menrva.entities.Book
import com.menrva.entities.BookInteraction
import com.menrva.entities.BookInteractionId
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.data.jpa.repository.Query
import org.springframework.data.repository.query.Param
import org.springframework.stereotype.Repository

@Repository
interface BookInteractionRepository : JpaRepository<BookInteraction, BookInteractionId> {
    fun findByUserId(userId: Long): List<BookInteraction>
    fun findByBookId(bookId: Long): List<BookInteraction>

    @Query("SELECT bi FROM BookInteraction bi WHERE bi.user.username = :username AND bi.likeDislike > 0")
    fun findLikedBooksByUserSummary(@Param("username") username: String): List<BookInteractionSummary>

    //    @Query("SELECT b as book FROM BookInteraction bi JOIN bi.book b WHERE bi.user.username = :username AND bi.likeDislike > 0")
//    fun findLikedBooksByUsername(@Param("username") username: String): List<BookSummary>
    @Query("SELECT bi FROM BookInteraction bi WHERE bi.user.username = :username AND bi.hasRead = true")
    fun findReadBooksByUsername(@Param("username") username: String): List<BookInteractionSummary>
}
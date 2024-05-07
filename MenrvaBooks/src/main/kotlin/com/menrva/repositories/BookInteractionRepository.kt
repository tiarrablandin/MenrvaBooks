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
import java.util.*

@Repository
interface BookInteractionRepository : JpaRepository<BookInteraction, BookInteractionId> {
    fun findByUserId(userId: Long): List<BookInteraction>
    fun findByBookId(bookId: Long): List<BookInteraction>

    @Query("SELECT bi FROM BookInteraction bi WHERE bi.user.tag = :tag AND bi.book.id = :bookId")
    fun findByBookIdAndUserTag(@Param("bookId") bookId: Long, @Param("tag") tag: String): Optional<BookInteractionSummary>

    @Query("SELECT bi FROM BookInteraction bi WHERE bi.user.tag = :tag AND bi.likeDislike > 0")
    fun findLikedBooksByUserSummary(@Param("tag") tag: String): List<BookInteractionSummary>

    //    @Query("SELECT b as book FROM BookInteraction bi JOIN bi.book b WHERE bi.user.username = :username AND bi.likeDislike > 0")
//    fun findLikedBooksByUsername(@Param("username") username: String): List<BookSummary>
    @Query("SELECT bi FROM BookInteraction bi WHERE bi.user.tag = :tag AND bi.hasRead = true")
    fun findReadBooksByTag(@Param("tag") tag: String): List<BookInteractionSummary>
}
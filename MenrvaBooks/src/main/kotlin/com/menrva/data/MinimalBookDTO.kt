package com.menrva.data

import com.menrva.entities.Book
import com.menrva.entities.Series

data class MinimalBookDTO(
    val id: Long,
    val title: String
) {
    constructor(book: Book) : this(
        id = book.id,
        title = book.title.toString(),
    )

}

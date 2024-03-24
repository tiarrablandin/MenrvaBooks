package com.menrva.data

interface BookGenreKeywordSummary {
    fun getId(): Long
    fun getTitle(): String
    fun getGenres(): Set<Genre>
    fun getKeywords(): Set<Keyword>

    interface Genre {
        fun getName(): String
    }

    interface Keyword {
        fun getName(): String
    }
}
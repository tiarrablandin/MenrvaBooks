package com.menrva.spring.controllers

import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.CrossOrigin
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController

@RestController
@CrossOrigin("*")
@RequestMapping("/api/books")
class BookController {
//    @RequestMapping("/**", "/", "/home")
//    fun index(): String? {
//        return "forward:/index.html"
//    }

    @GetMapping("/")
    fun index(): String {
        return "Hello"
    }

}
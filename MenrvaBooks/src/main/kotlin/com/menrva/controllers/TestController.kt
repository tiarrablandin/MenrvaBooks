package com.menrva.controllers

import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.CrossOrigin
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RestController

@RestController
@CrossOrigin("*", "http://localhost")
class TestController {

    @GetMapping("/api/test")
    fun getTest(): ResponseEntity<String> {
        return ResponseEntity.ok("API is working!")
    }
}

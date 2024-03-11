package com.menrva.controllers

import org.springframework.web.bind.annotation.CrossOrigin
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController

@RestController
@RequestMapping("api")
@CrossOrigin("*", "http://localhost")
class BookController {
}
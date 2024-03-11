package com.menrva

import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.runApplication
import org.springframework.context.annotation.ComponentScan

@SpringBootApplication
@ComponentScan(
	"com.menrva.controllers",
	"com.menrva.security",
	"com.menrva.services",
)
class Application

fun main(args: Array<String>) {
	runApplication<Application>(*args)
}

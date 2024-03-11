package com.menrva

import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.autoconfigure.domain.EntityScan
import org.springframework.boot.runApplication
import org.springframework.context.annotation.ComponentScan
import org.springframework.context.annotation.PropertySource
import org.springframework.data.jpa.repository.config.EnableJpaRepositories

@SpringBootApplication
@EntityScan("com.menrva.entities")
@EnableJpaRepositories("com.menrva.repositories")
@PropertySource("classpath:secrets.properties")
@ComponentScan(
	"com.menrva.controllers",
	"com.menrva.security",
	"com.menrva.services",
)
class Application

fun main(args: Array<String>) {
	runApplication<Application>(*args)
}

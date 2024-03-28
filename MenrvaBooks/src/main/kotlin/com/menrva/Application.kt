package com.menrva

import org.springframework.beans.factory.annotation.Autowired
import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.autoconfigure.data.elasticsearch.ElasticsearchDataAutoConfiguration
import org.springframework.boot.autoconfigure.data.elasticsearch.ElasticsearchRepositoriesAutoConfiguration
import org.springframework.boot.autoconfigure.domain.EntityScan
import org.springframework.boot.runApplication
import org.springframework.context.annotation.ComponentScan
import org.springframework.context.annotation.FilterType
import org.springframework.context.annotation.PropertySource
import org.springframework.data.elasticsearch.repository.config.EnableElasticsearchRepositories
import org.springframework.data.jpa.repository.config.EnableJpaRepositories

@SpringBootApplication(exclude = [ElasticsearchRepositoriesAutoConfiguration::class, ElasticsearchDataAutoConfiguration::class])
@EntityScan("com.menrva.entities")
@EnableJpaRepositories(
    basePackages = ["com.menrva.repositories"]
)
@EnableElasticsearchRepositories(basePackages = ["com.menrva.repositories.elasticsearch"])
@PropertySource("classpath:secrets.properties")
@ComponentScan(
    "com.menrva",
    "com.menrva.controllers",
    "com.menrva.security",
    "com.menrva.services",
)
class Application


fun main(args: Array<String>) {
    runApplication<Application>(*args)
}

package com.menrva

import org.elasticsearch.client.RestClient
import org.springframework.context.annotation.Configuration
import org.springframework.data.elasticsearch.client.ClientConfiguration
import org.springframework.data.elasticsearch.client.elc.ElasticsearchConfiguration
import org.springframework.data.elasticsearch.repository.config.EnableElasticsearchRepositories

@Configuration
@EnableElasticsearchRepositories(basePackages = ["com.menrva.repositories.elasticsearch"])
class ElasticSearchConfig(
) : ElasticsearchConfiguration() {

    override fun clientConfiguration(): ClientConfiguration {
        return ClientConfiguration.builder()
            .connectedTo("3.133.142.200:9200")
            .withSocketTimeout(20000)
            .build()
    }
}
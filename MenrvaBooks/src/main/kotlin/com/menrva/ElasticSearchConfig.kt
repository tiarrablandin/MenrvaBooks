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
            .connectedTo("34.135.112.113:9200")
//            .usingSsl()
            .withBasicAuth("elastic", "elastic")
            .withSocketTimeout(40000)
            .build()
    }
}
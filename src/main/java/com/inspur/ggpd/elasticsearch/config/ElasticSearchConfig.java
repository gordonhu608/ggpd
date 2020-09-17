package com.inspur.ggpd.elasticsearch.config;

import org.apache.commons.lang3.StringUtils;
import org.apache.http.HttpHost;
import org.apache.http.auth.AuthScope;
import org.apache.http.auth.UsernamePasswordCredentials;
import org.apache.http.client.CredentialsProvider;
import org.apache.http.client.config.RequestConfig;
import org.apache.http.impl.client.BasicCredentialsProvider;
import org.apache.http.impl.nio.client.HttpAsyncClientBuilder;
import org.elasticsearch.client.RestClient;
import org.elasticsearch.client.RestClientBuilder;
import org.elasticsearch.client.RestHighLevelClient;
import com.inspur.ggpd.util.PropertiesUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.util.Arrays;
import java.util.Objects;

@Configuration
public class ElasticSearchConfig {

    //@Value("${elasticsearch.nodes}")
    private String userName = PropertiesUtil.getValueByKey("elasticsearch.user");
    private String password = PropertiesUtil.getValueByKey("elasticsearch.passwd");
    private static String node = PropertiesUtil.getValueByKey("elasticsearch.nodes");
    final CredentialsProvider credentialsProvider = new BasicCredentialsProvider();

    static RestHighLevelClient client;

    @Bean
    public   RestHighLevelClient getClient() {

        if (client != null)
            return client;
        else {
            String[] nodes = node.split(",");


            HttpHost[] hosts = Arrays.stream(nodes)
                    .map(this::makeHttpHost)
                    .filter(Objects::nonNull)
                    .toArray(HttpHost[]::new);


            final CredentialsProvider credentialsProvider = new BasicCredentialsProvider();
            credentialsProvider.setCredentials(AuthScope.ANY, new UsernamePasswordCredentials(userName, password));

            RestClientBuilder builder = RestClient.builder(hosts).setRequestConfigCallback(new RestClientBuilder.RequestConfigCallback() {
                @Override
                public RequestConfig.Builder customizeRequestConfig(RequestConfig.Builder requestConfigBuilder) {
                    requestConfigBuilder.setConnectTimeout(-1);
                    requestConfigBuilder.setSocketTimeout(-1);
                    requestConfigBuilder.setConnectionRequestTimeout(-1);
                    return requestConfigBuilder;
                }
            }).setHttpClientConfigCallback(new RestClientBuilder.HttpClientConfigCallback() {
                @Override
                public HttpAsyncClientBuilder customizeHttpClient(HttpAsyncClientBuilder httpClientBuilder) {

                    httpClientBuilder.disableAuthCaching();


                    return httpClientBuilder.setDefaultCredentialsProvider(credentialsProvider);
                }
            });

            RestHighLevelClient client = new RestHighLevelClient(builder);
            return client;
        }

    }


    @Bean(name = "highLevelClient")
    public RestHighLevelClient highLevelClient() {
      
        return getClient();
    }

    private HttpHost makeHttpHost(String s) {
        assert StringUtils.isNotEmpty(s);
        String[] address = s.split(":");
        if (address.length == 2) {
            String ip = address[0];
            int port = Integer.parseInt(address[1]);
            return new HttpHost(ip, port, "http");
        } else {
            return null;
        }
    }


}

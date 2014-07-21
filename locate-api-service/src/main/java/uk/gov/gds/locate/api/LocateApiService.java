package uk.gov.gds.locate.api;

import com.mongodb.DB;
import com.mongodb.MongoClient;
import com.sun.jersey.api.core.ResourceConfig;
import com.yammer.dropwizard.Service;
import com.yammer.dropwizard.config.Bootstrap;
import com.yammer.dropwizard.config.Environment;
import org.mongojack.JacksonDBCollection;
import uk.gov.gds.locate.api.authentication.BearerTokenAuthProvider;
import uk.gov.gds.locate.api.authentication.BearerTokenAuthenticator;
import uk.gov.gds.locate.api.configuration.LocateApiConfiguration;
import uk.gov.gds.locate.api.configuration.MongoConfiguration;
import uk.gov.gds.locate.api.dao.AddressDao;
import uk.gov.gds.locate.api.dao.AuthorizationTokenDao;
import uk.gov.gds.locate.api.healthchecks.MongoHealthCheck;
import uk.gov.gds.locate.api.managed.ManagedMongo;
import uk.gov.gds.locate.api.model.Address;
import uk.gov.gds.locate.api.model.AuthorizationToken;
import uk.gov.gds.locate.api.resources.AddressResource;

import javax.ws.rs.ext.ExceptionMapper;
import java.net.UnknownHostException;
import java.util.ArrayList;
import java.util.List;
import java.util.Set;

import static uk.gov.gds.locate.api.formatters.DateTimeFormatters.internalDateFormatter;

public class LocateApiService extends Service<LocateApiConfiguration> {

    public static void main(String[] args) throws Exception {
        new LocateApiService().run(args);
    }

    @Override
    public void initialize(Bootstrap<LocateApiConfiguration> bootstrap) {

    }

    @Override
    public void run(LocateApiConfiguration configuration, Environment environment) throws Exception {

        /**
         * Mongo set up
         */
        MongoClient mongoClient = configureMongoClient(environment, configuration.getMongoConfiguration());

        DB locateDb = setUpDb(configuration.getMongoConfiguration().getLocateDatabase(), configuration.getMongoConfiguration(), mongoClient);
        DB credentialsDb = setUpDb(configuration.getMongoConfiguration().getCredentialsDatabase(), configuration.getMongoConfiguration(), mongoClient);

        /**
         * Resources
         */
        environment.addResource(new AddressResource(configureAddressDao(locateDb)));

        /**
         * Healthchecks
         */
        environment.addHealthCheck(new MongoHealthCheck(mongoClient));

        /**
         * Exception mapper
         */
        environment.addProvider(new LocateExceptionMapper());

        /**
         * Authentication
         */
        environment.addProvider(new BearerTokenAuthProvider(configuration, new BearerTokenAuthenticator(configureAuthorizationTokenDao(credentialsDb))));

        /**
         * Better exception mappings
         */
        removeDefaultExceptionMappers(environment);

        /**
         * Date serialisation
         */
        environment.getObjectMapperFactory().setDateFormat(internalDateFormatter);
    }

    private MongoClient configureMongoClient(Environment environment, MongoConfiguration config) throws UnknownHostException {
        MongoClient mongoClient = new MongoClient(config.getHosts(), config.getPort());
        environment.manage(new ManagedMongo(mongoClient));

        return mongoClient;
    }


    private DB setUpDb(String database, MongoConfiguration config, MongoClient mongoClient) {
        DB db = mongoClient.getDB(database);

        if (config.requiresAuth()) {
            db.authenticate(config.getUsername(), config.getPassword().toCharArray());
        }

        return db;
    }

    private AuthorizationTokenDao configureAuthorizationTokenDao(DB db) {
        return new AuthorizationTokenDao(JacksonDBCollection.wrap(db.getCollection("authorizationToken"), AuthorizationToken.class, String.class));
    }

    private AddressDao configureAddressDao(DB db) {
        return new AddressDao(JacksonDBCollection.wrap(db.getCollection("addresses"), Address.class, String.class));
    }

    private void removeDefaultExceptionMappers(Environment environment) {
        List<Object> singletonsToRemove = new ArrayList<Object>();
        ResourceConfig jrConfig = environment.getJerseyResourceConfig();
        Set<Object> dwSingletons = jrConfig.getSingletons();

        for (Object s : dwSingletons) {
            if (s instanceof ExceptionMapper && s.getClass().getName().startsWith("com.yammer.dropwizard.jersey.")) {
                singletonsToRemove.add(s);
            }
        }
        for (Object s : singletonsToRemove) {
            jrConfig.getSingletons().remove(s);
        }

    }
}

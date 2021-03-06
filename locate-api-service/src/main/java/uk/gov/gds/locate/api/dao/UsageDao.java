package uk.gov.gds.locate.api.dao;

import com.google.common.base.Optional;
import com.mongodb.BasicDBObject;
import com.yammer.metrics.annotation.Timed;
import org.joda.time.DateTime;
import org.joda.time.DateTimeZone;
import org.mongojack.DBUpdate;
import org.mongojack.JacksonDBCollection;
import uk.gov.gds.locate.api.model.Usage;

import java.util.Date;
import java.util.Locale;
import java.util.TimeZone;

public class UsageDao {

    private final JacksonDBCollection<Usage, String> collection;

    public UsageDao(JacksonDBCollection<Usage, String> collection) {
        this.collection = collection;
    }

    @Timed
    public Optional<Usage> findUsageByIdentifier(String identifier) {
        return Optional.fromNullable(collection.findAndModify(new BasicDBObject("identifier", identifier), new DBUpdate.Builder().inc("count")));
    }

    @Timed
    public Boolean create(String identifier) {
        Date expiry = DateTime.now().withZone(DateTimeZone.UTC).withHourOfDay(23).withMinuteOfHour(59).withSecondOfMinute(59).withMillisOfSecond(999).toDate();
        return collection.insert(new Usage(org.bson.types.ObjectId.get().toString(), identifier, 1, expiry)).getN() == 1;
    }

    @Timed
    public void applyIndexes() {
        collection.ensureIndex(new BasicDBObject("identifier", 1), "identifier_index", true);
        collection.ensureIndex(new BasicDBObject("expireAt", 1), new BasicDBObject("expireAfterSeconds", 0));
    }
}

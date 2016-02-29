package uk.gov.gds.locate.api.resources;

import com.google.common.base.Strings;
import com.google.common.collect.ImmutableMap;
import com.yammer.dropwizard.auth.Auth;
import com.yammer.metrics.annotation.Timed;
import uk.gov.gds.locate.api.configuration.LocateApiConfiguration;
import uk.gov.gds.locate.api.dao.AddressDao;
import uk.gov.gds.locate.api.exceptions.LocateWebException;
import uk.gov.gds.locate.api.model.Address;
import uk.gov.gds.locate.api.model.AuthorizationToken;
import uk.gov.gds.locate.api.model.Format;
import uk.gov.gds.locate.api.model.QueryType;
import uk.gov.gds.locate.api.validation.ValidateFormat;
import uk.gov.gds.locate.api.validation.ValidatePostcodes;
import uk.gov.gds.locate.api.validation.ValidateQuery;
import uk.gov.gds.locate.api.validation.ValidateUPRN;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.QueryParam;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import java.util.List;

import static uk.gov.gds.locate.api.services.AddressTransformationService.*;

@Path("/locate/addresses")
@Produces(MediaType.APPLICATION_JSON)
public class AddressResource {

    private final AddressDao addressDao;
    private final LocateApiConfiguration configuration;

    public AddressResource(AddressDao addressDao, LocateApiConfiguration configuration) {
        this.addressDao = addressDao;
        this.configuration = configuration;
    }


    @GET
    @Timed
    public Response fetchAddresses(@Auth AuthorizationToken authorizationToken, @QueryParam("postcode") String postcode,
                                @QueryParam("uprn") String uprn, @QueryParam("format") String format,
                                @QueryParam("query") String query) throws Exception {

        if (!ValidatePostcodes.isValid(postcode) || !ValidateUPRN.isValid(uprn)) {
            if (! Strings.isNullOrEmpty(postcode)) {
                throw new LocateWebException(422, ImmutableMap.of("error", "postcode is invalid"));
            } else {
                throw new LocateWebException(422, ImmutableMap.of("error", "uprn is invalid"));
            }
        }

        if (!ValidateFormat.isValid(format)) {
            throw new LocateWebException(422, ImmutableMap.of("error", "format is invalid"));
        }

        if (!ValidateQuery.isValid(query)) {
            throw new LocateWebException(422, ImmutableMap.of("error", "query is invalid"));
        }

        if (! Strings.isNullOrEmpty(postcode)) {
            postcode = tidyPostcode(postcode);
        }
        List<Address> addresses = getAddressesFromDb(postcode, uprn);
        List<Address> filtered = orderAddresses(applyPredicate(addresses, QueryType.parse(query).predicate()));

        if (!Strings.isNullOrEmpty(format) && format.equals(Format.VCARD.getType())) {
            return buildResponse().entity(addressToVCard(filtered)).build();
        }

        if (!Strings.isNullOrEmpty(format) && format.equals(Format.ALL.getType())) {
            return buildResponse().entity(filtered).build();
        }

        return buildResponse().entity(addressToSimpleAddress(filtered)).build();
    }

    private String tidyPostcode(String postcode) {
        return postcode.toLowerCase().trim().replace(" ", "");
    }

    private List<Address> getAddressesFromDb(String postcode, String uprn) {
        List<Address> addresses = null;
        if (! Strings.isNullOrEmpty(postcode)) {
            addresses = addressDao.findAllForPostcode(postcode);
        } else {
            addresses = addressDao.findAllForUPRN(uprn);
        }
        if (configuration.getEncrypted()) {
            return decryptAddresses(addresses, configuration.getEncryptionKey());
        } else {
            return addresses;
        }
    }

    private Response.ResponseBuilder buildResponse() {
        return Response.ok().header("Content-type", "application/json");
    }
}

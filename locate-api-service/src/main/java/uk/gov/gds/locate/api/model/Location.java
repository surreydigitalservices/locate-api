package uk.gov.gds.locate.api.model;

import com.fasterxml.jackson.annotation.JsonProperty;

public class Location {

    @JsonProperty("lat")
    private Double latitude;

    @JsonProperty("long")
    private Double longitude;

    @JsonProperty("easting")
    private Double easting;

    @JsonProperty("northing")
    private Double northing;

    public Location() {
    }

    public Location(Double latitude, Double longitude, Double easting, Double northing) {
        this.latitude = latitude;
        this.longitude = longitude;
        this.easting = easting;
        this.northing = northing;
    }

    public Double getLatitude() {
        return latitude;
    }

    public Double getLongitude() {
        return longitude;
    }

    public Double getEasting() {
        return easting;
    }

    public Double getNorthing() {
        return northing;
    }

    @Override
    public String toString() {
        return "Location{" +
                "latitude=" + latitude +
                ", longitude=" + longitude +
                ", easting=" + easting +
                ", northing=" + northing +
                '}';
    }
}

package uk.gov.gds.locate.api.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import org.joda.time.DateTime;
import uk.gov.gds.locate.api.json.JsonDateDeserializer;
import uk.gov.gds.locate.api.json.JsonDateSerializer;

@JsonInclude(JsonInclude.Include.NON_NULL)
@JsonIgnoreProperties(ignoreUnknown = true)
public class Details {

    @JsonSerialize(using = JsonDateSerializer.class)
    @JsonDeserialize(using = JsonDateDeserializer.class)
    @JsonProperty("blpuCreatedAt")
    private DateTime blpuCreatedAt;

    @JsonSerialize(using = JsonDateSerializer.class)
    @JsonDeserialize(using = JsonDateDeserializer.class)
    @JsonProperty("blpuUpdatedAt")
    private DateTime blpuUpdatedAt;

    @JsonProperty("classification")
    private String classification;

    @JsonProperty("state")
    private String state;

    @JsonProperty("isPostalAddress")
    private Boolean isPostalAddress;

    @JsonProperty("isCommercial")
    private Boolean isCommercial;

    @JsonProperty("isResidential")
    private Boolean isResidential;

    @JsonProperty("isHigherEducational")
    private Boolean isHigherEducational;

    @JsonProperty("isElectoral")
    private Boolean isElectoral;

    @JsonProperty("usrn")
    private String usrn;

    @JsonProperty("file")
    private String file;

    @JsonProperty("primaryClassification")
    private String primaryClassification;

    @JsonProperty("secondaryClassification")
    private String secondaryClassification;

    public Details() {
    }

    public Details(DateTime blpuCreatedAt,
                   DateTime blpuUpdatedAt,
                   String classification,
                   String state,
                   Boolean isPostalAddress,
                   Boolean isCommercial,
                   Boolean isResidential,
                   Boolean isHigherEducational,
                   Boolean isElectoral,
                   String usrn,
                   String file,
                   String primaryClassification,
                   String secondaryClassification) {

        this.blpuCreatedAt = blpuCreatedAt;
        this.blpuUpdatedAt = blpuUpdatedAt;
        this.classification = classification;
        this.state = state;
        this.isPostalAddress = isPostalAddress;
        this.isCommercial = isCommercial;
        this.isResidential = isResidential;
        this.isHigherEducational = isHigherEducational;
        this.isElectoral = isElectoral;
        this.usrn = usrn;
        this.file = file;
        this.primaryClassification = primaryClassification;
        this.secondaryClassification = secondaryClassification;
    }

    public DateTime getBlpuCreatedAt() {
        return blpuCreatedAt;
    }

    public DateTime getBlpuUpdatedAt() {
        return blpuUpdatedAt;
    }

    public String getClassification() {
        return classification;
    }

    public String getState() {
        return state;
    }

    public Boolean getIsPostalAddress() {
        return isPostalAddress;
    }

    public Boolean getIsCommercial() {
        return isCommercial;
    }

    public Boolean getIsResidential() {
        return isResidential;
    }

    public Boolean getIsHigherEducational() {
        return isHigherEducational;
    }

    public Boolean getIsElectoral() {
        return isElectoral;
    }

    public String getUsrn() {
        return usrn;
    }

    public String getFile() {
        return file;
    }

    public String getPrimaryClassification() {
        return primaryClassification;
    }

    public String getSecondaryClassification() {
        return secondaryClassification;
    }

    @Override
    public String toString() {
        return "Details{" +
                "blpuCreatedAt=" + blpuCreatedAt +
                ", blpuUpdatedAt=" + blpuUpdatedAt +
                ", classification='" + classification + '\'' +
                ", state='" + state + '\'' +
                ", isPostalAddress=" + isPostalAddress +
                ", isCommercial=" + isCommercial +
                ", isResidential=" + isResidential +
                ", isHigherEducational=" + isHigherEducational +
                ", isElectoral=" + isElectoral +
                ", usrn='" + usrn + '\'' +
                ", file='" + file + '\'' +
                ", primaryClassification='" + primaryClassification + '\'' +
                ", secondaryClassification='" + secondaryClassification + '\'' +
                '}';
    }
}
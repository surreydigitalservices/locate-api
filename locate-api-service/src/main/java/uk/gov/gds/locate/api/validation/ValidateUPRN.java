package uk.gov.gds.locate.api.validation;

import com.google.common.base.Strings;

public abstract class ValidateUPRN {

    public static Boolean isValid(String uprn) {
        return Strings.isNullOrEmpty(uprn) || uprn.matches("\\d{1,12}");
    }
}

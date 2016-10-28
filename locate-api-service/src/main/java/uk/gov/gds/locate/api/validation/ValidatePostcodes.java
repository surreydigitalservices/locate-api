package uk.gov.gds.locate.api.validation;

import com.google.common.base.Strings;

public abstract class ValidatePostcodes {

    public static Boolean isValid(String postcode) {
        return Strings.isNullOrEmpty(postcode) || postcode.matches("\\s?[A-Za-z]{1,2}[0-9]{1,2}[A-Za-z]{0,1}[ ]{0,1}[0-9][A-Za-z]{2}\\s?");
    }
}

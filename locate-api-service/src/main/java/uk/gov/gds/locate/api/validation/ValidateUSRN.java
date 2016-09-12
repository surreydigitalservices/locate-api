package uk.gov.gds.locate.api.validation;

import com.google.common.base.Strings;

public abstract class ValidateUSRN {

    public static Boolean isValid(String usrn) {
        return Strings.isNullOrEmpty(usrn) || usrn.matches("\\d{1,8}");
    }
}

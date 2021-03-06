package uk.gov.gds.locate.api.validation;

import org.junit.Test;

import static org.junit.Assert.assertFalse;
import static org.junit.Assert.assertTrue;

public class ValidateUPRNTest {

    @Test
    public void shouldAllowValidUPRN() {
        assertTrue(ValidateUPRN.isValid("012345678901"));
    }

    @Test
    public void shouldDisallowTooLongText() {
        assertFalse(ValidateUPRN.isValid("0123456789012"));
    }

    @Test
    public void shouldDisallowTextThatContansNonNumericChars() {
        assertFalse(ValidateUPRN.isValid("a1"));
    }

}

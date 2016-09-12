package uk.gov.gds.locate.api.validation;

import org.junit.Test;

import static org.junit.Assert.assertFalse;
import static org.junit.Assert.assertTrue;

public class ValidateUSRNTest {

    @Test
    public void shouldAllowValidUSRN() {
        assertTrue(ValidateUSRN.isValid("01234567"));
    }

    @Test
    public void shouldDisallowTooLongText() {
        assertFalse(ValidateUSRN.isValid("012345678"));
    }

    @Test
    public void shouldDisallowTextThatContansNonNumericChars() {
        assertFalse(ValidateUSRN.isValid("a1"));
    }

}

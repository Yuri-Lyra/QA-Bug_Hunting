# Energy Telecom (practice registration form)

Environment: Windows 11, Chrome, logged out. The registration form is on the home page ("Contact Information").

## TEL-001: Email is not marked or validated as required
- **Severity:** Moderate
- **Steps:** 1. Open the home page. 2. Leave every field in "Contact Information" empty. 3. Click [Submit].
- **Expected:** Email is recognized as required.
- **Actual:** Email is not flagged, although other required fields carry an asterisk.

## TEL-002: [Clear] button fails with an error pop-up
- **Severity:** Major
- **Steps:** 1. Fill every field. 2. Click [Clear] and confirm.
- **Expected:** All fields are emptied.
- **Actual:** Fields keep their values and a pop-up shows "Error 17896 - Invalid data request..."

## TEL-003: A registered email can be used to create another account
- **Severity:** Critical
- **Steps:** 1. Fill the form with an email that is already registered. 2. Click [Submit].
- **Expected:** The system rejects the duplicate.
- **Actual:** The system confirms with "Thank you for your participation!"

## TEL-004: An invalid email format is accepted
- **Severity:** Critical
- **Steps:** 1. Fill the form with an invalid email. 2. Click [Submit].
- **Expected:** The system rejects the value.
- **Actual:** The system confirms the account creation.

## TEL-005: Special characters are accepted in first and last name
- **Severity:** Critical
- **Steps:** 1. Fill first and last name with special characters. 2. Click [Submit].
- **Expected:** The system rejects the values.
- **Actual:** The system confirms the account creation.
- **Notes:** Rated Critical because TEL-003 to TEL-005 together show that no server-side validation exists.

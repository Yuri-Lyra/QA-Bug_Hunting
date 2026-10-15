# Conduit (blogging demo app)

Environment: Windows 11, Chrome, logged out unless stated. Note: some expectations below are the tester's assumptions, not a written specification. They should be confirmed with the product owner before being treated as defects.

## CND-001: Only one popular tag can be active at a time
- **Severity:** Moderate
- **Preconditions:** User is logged out
- **Steps:** 1. Open the home page. 2. Click a popular tag. 3. Click a different popular tag.
- **Expected:** The article list crosses both tags and shows articles related to both.
- **Actual:** The second tag replaces the first one.
- **Notes:** Expectation not documented; may be intended single-tag filtering. Confirm before reporting as a defect.

## CND-002: "Article title" has no character limit
- **Severity:** Moderate
- **Preconditions:** Registered user, logged in
- **Steps:** 1. Click [New Article]. 2. Paste a term about 200 times into the title. 3. Click [Publish Article].
- **Expected:** A validation message states the maximum length.
- **Actual:** No validation message appears.

## CND-003: "What's this article about?" has no character limit
- **Severity:** Moderate
- **Steps:** Same as CND-002, filling the description field (about 200 characters repeated).
- **Expected:** A validation message states the maximum length.
- **Actual:** No validation message appears.

## CND-004: "Write your article" has no character limit
- **Severity:** Moderate
- **Steps:** Same as CND-002, filling the body field (about 1,000 repetitions).
- **Expected:** A validation message states the maximum length.
- **Actual:** No validation message appears.

## CND-005: Tags cannot be searched
- **Severity:** Minor
- **Preconditions:** User is logged out
- **Steps:** 1. Open the home page. 2. Look at the Popular Tags section.
- **Expected:** A search tool lets users find a tag.
- **Actual:** No search tool exists.
- **Notes:** This is an improvement suggestion rather than a defect.

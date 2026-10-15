# Bug report template

| Field | What to write |
|-------|---------------|
| ID | Short prefix per site + number (e.g. SHOP-001) |
| Summary | One sentence: what is wrong and where |
| Environment | OS, browser, user state (logged out / logged in) |
| Preconditions | Data or state needed before step 1 |
| Steps to reproduce | Numbered, one action per step, no ambiguity |
| Expected result | What should happen, and why (spec, convention or reasoning) |
| Actual result | What really happens, with the exact message or value |
| Evidence | Screenshot or video reference |
| Severity | Impact on the product (see the scale below) |
| Notes | Workaround, frequency, related issues, open questions |

## Severity scale used here
| Level | Meaning | Example |
|-------|---------|---------|
| Critical | Wrong money/data, security risk, or the main flow is broken | Invalid or duplicate data is accepted and confirmed |
| Major | A feature does not work, with no clean workaround | A button throws an error and does nothing |
| Moderate | Feature works but validation or behavior is wrong | Missing required-field marker |
| Minor | Cosmetic, wording or small usability issue | Tooltip hidden by a field |

Severity is the impact on the product. Priority (when to fix) is a separate decision for the team.

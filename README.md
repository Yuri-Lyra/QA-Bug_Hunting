# QA Bug Hunting on Public Sites

Exploratory testing results on public demo and practice web apps, written as reproducible bug reports and turned into automated Playwright checks. Because the sites are public, anyone can verify every report.

## Results

| Site | Bugs | Critical | Major | Moderate | Minor |
|------|------|----------|-------|----------|-------|
| Conduit (blog demo app) | 5 | 0 | 0 | 4 | 1 |
| Sweet Shop (e-commerce demo) | 4 | 1 | 0 | 0 | 3 |
| Energy Telecom (registration form) | 5 | 3 | 1 | 1 | 0 |
| **Total** | **14** | **4** | **1** | **5** | **4** |

## How the work was done
1. **Explore:** time-boxed sessions per page, using equivalence classes (valid, invalid, empty, extreme values) and error guessing.
2. **Report:** one reproducible report per defect, following [`docs/bug-report-template.md`](docs/bug-report-template.md).
3. **Rate:** severity by impact on the product (scale in the template); priority is left to the team.
4. **Automate:** each defect with a stable reproduction becomes a Playwright test that states the expected behavior.

## Why `test.fail()`
A test marked `test.fail()` passes while the bug exists and fails the day the bug is fixed. That failure is the signal to remove the marker and keep the test as a permanent regression check.

## Running the tests
```bash
npm init -y
npm i -D @playwright/test
npx playwright install chromium
SWEET_SHOP_URL=<site url> TELECOM_URL=<site url> npx playwright test
# Conduit also needs CONDUIT_URL, CONDUIT_USER and CONDUIT_PASS (a throw-away account)
```
Tests are skipped when their environment variable is missing.

## Honest limits
- Selectors in the specs are inferred from the reports and have to be adjusted against the live pages.
- Some expectations (for example multi-tag filtering in Conduit) are the tester's assumptions and are labelled as such.
- These sites can change or disappear, so reports record the date they were observed rather than promising they still reproduce.

## Repository map
| Path | Content |
|------|---------|
| `bug-reports/` | 14 reports grouped by site |
| `docs/bug-report-template.md` | Template and severity scale |
| `tests/` | Playwright specs (data-driven where it makes sense) |
| `playwright.config.ts` | Desktop Chrome project, trace on failure |

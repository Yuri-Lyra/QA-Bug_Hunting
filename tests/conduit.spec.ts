import { test, expect } from '@playwright/test';

// Field-length checks for the article form. A logged-in session is required:
// provide CONDUIT_USER / CONDUIT_PASS for a throw-away test account. Selectors are best guesses.

const BASE = process.env.CONDUIT_URL;
test.skip(!BASE || !process.env.CONDUIT_USER, 'Set CONDUIT_URL, CONDUIT_USER and CONDUIT_PASS');

test.beforeEach(async ({ page }) => {
  await page.goto(`${BASE}/#/login`);
  await page.getByPlaceholder(/email/i).fill(process.env.CONDUIT_USER!);
  await page.getByPlaceholder(/password/i).fill(process.env.CONDUIT_PASS!);
  await page.getByRole('button', { name: /sign in/i }).click();
});

test('CND-002 article title longer than 200 characters shows a validation message', async ({ page }) => {
  test.fail(true, 'Known bug CND-002: no limit is enforced');
  await page.goto(`${BASE}/#/editor`);
  await page.getByPlaceholder(/article title/i).fill('A'.repeat(200));
  await page.getByRole('button', { name: /publish article/i }).click();
  await expect(page.getByText(/too long|maximum|limit/i)).toBeVisible();
});

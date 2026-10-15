import { test, expect } from '@playwright/test';

// Each test describes the EXPECTED behavior. `test.fail()` tells Playwright the bug is known:
// the test is reported as passing while the bug exists, and as a failure once the bug is fixed,
// which is the signal to remove `test.fail()` and keep the test as a regression check.
// Selectors are best guesses from the bug reports and must be adjusted to the real page.

const BASE = process.env.SWEET_SHOP_URL;
test.skip(!BASE, 'Set SWEET_SHOP_URL to run these tests');

test('SHOP-001 standard shipping adds the fee to the basket total', async ({ page }) => {
  test.fail(true, 'Known bug SHOP-001: total shows NaN');
  await page.goto(BASE!);
  await page.getByRole('button', { name: /add to basket/i }).first().click();
  await page.getByRole('link', { name: /basket/i }).click();
  await page.getByLabel(/standard shipping/i).check();
  await expect(page.getByText(/total/i).first()).not.toContainText('NaN');
});

test('SHOP-004 empty promo code shows a validation message', async ({ page }) => {
  test.fail(true, 'Known bug SHOP-004: no message shown');
  await page.goto(BASE!);
  await page.getByRole('link', { name: /basket/i }).click();
  await page.getByRole('button', { name: /redeem/i }).click();
  await expect(page.getByText(/enter.*promo|required/i)).toBeVisible();
});

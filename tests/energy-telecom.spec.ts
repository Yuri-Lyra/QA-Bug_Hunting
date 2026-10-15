import { test, expect } from '@playwright/test';

// Data-driven checks for the registration form. Selectors are best guesses and need adjusting.

const BASE = process.env.TELECOM_URL;
test.skip(!BASE, 'Set TELECOM_URL to run these tests');

const invalidEmails = ['plainaddress', 'missing-at.example.com', 'a@b', '@no-user.com'];

for (const email of invalidEmails) {
  test(`TEL-004 rejects invalid email "${email}"`, async ({ page }) => {
    test.fail(true, 'Known bug TEL-004: invalid emails are accepted');
    await page.goto(BASE!);
    await page.getByLabel(/first name/i).fill('Test');
    await page.getByLabel(/last name/i).fill('User');
    await page.getByLabel(/email/i).fill(email);
    await page.getByRole('button', { name: /submit/i }).click();
    await expect(page.getByText(/thank you for your participation/i)).toHaveCount(0);
  });
}

test('TEL-005 rejects special characters in names', async ({ page }) => {
  test.fail(true, 'Known bug TEL-005: special characters are accepted');
  await page.goto(BASE!);
  await page.getByLabel(/first name/i).fill('@#$%^&*');
  await page.getByLabel(/last name/i).fill('!!??<>');
  await page.getByLabel(/email/i).fill('valid.user@example.com');
  await page.getByRole('button', { name: /submit/i }).click();
  await expect(page.getByText(/thank you for your participation/i)).toHaveCount(0);
});

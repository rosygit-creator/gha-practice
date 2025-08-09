// @ts-check
import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://thinking-tester-contact-list.herokuapp.com/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle('Contact List App');
});

test('login', async ({ page }) => {
  await page.goto('https://thinking-tester-contact-list.herokuapp.com/');

  // Fill in email and password fields
  await page.locator('#email').fill('testuser@example.com'); // Use a valid email if required
  await page.locator('#password').fill('password'); // Use a valid password if required

  // Click submit button
  await page.getByRole('button', { name: 'Submit' }).click();

  // Assert that login was successful by checking for a known element after login
  await expect(page).toHaveURL(/.*contactList/); // Adjust the URL regex as needed
});

// @ts-check
import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://thinking-tester-contact-list.herokuapp.com/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle('Contact List App');
});

test('login', async ({ page }) => {
  await page.goto('https://thinking-tester-contact-list.herokuapp.com/');

  // Click the get started link.
  await page.locator('#email').fill('abc');

  //password
  await page.locator('#password').fill('123');

  // click submit button
  await page.getByRole('button', { name: 'Submit' }).click();
});

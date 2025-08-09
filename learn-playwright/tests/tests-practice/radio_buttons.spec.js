// @ts-check
import { test, expect } from '@playwright/test';


test('login', async ({ page }) => {
  await page.goto('https://practice-automation.com/form-fields/');

  // Click radio button - Red.
  await page.locator('#color1').click();

  // verify its cheked
  await expect(page.locator('#color1')).toBeChecked();

  // count radio buttons
  const radioButtonsCount = await page.locator('input[type="radio"]').count();
  expect(radioButtonsCount).toBe(5);
});

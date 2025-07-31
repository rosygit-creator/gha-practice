// @ts-check
import { test, expect } from '@playwright/test';


test('login', async ({ page }) => {
  await page.goto('https://practice-automation.com/form-fields/');

  // Click radio button - Red.
  await page.locator('#drink2').click();

  // verify its cheked
  await expect(page.locator('#drink2')).toBeChecked();

  // count radio buttons
  const radioButtonsCount = await page.locator('input[type="checkbox"]').count();
  expect(radioButtonsCount).toBe(5);

  



});

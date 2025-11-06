import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://angular.realworld.io/register');
  await page.getByText('File not found').click();
  await page.getByText('File not found').click();
});
import { test, expect } from '@playwright/test';
import * as test_data from '../../test-data/test_data.json';

// the test file displays techniques for test data management
//  #1 reading from a json file
test('test data management', async ({ page }) => {
  await page.goto("url")
  // Fill in email and password fields
  await page.locator('#email').fill(test_data.valid_user1.user); // Use a valid email 
  await page.locator('#password').fill(test_data.valid_user1.password); // Use a valid password 
});

// #2 parametrize
// navigate to url and verify title
[
  { url: 'url1', expected: 'title1' },
  { url: 'url2', expected: 'title2' },
  { url: 'url3', expected: 'titl3' },
].forEach(({ url, expected }) => {
  test(`testing with ${url}`, async ({ page }) => {
    await page.goto(url);
    await expect(page).toHaveTitle(expected);
  });
});



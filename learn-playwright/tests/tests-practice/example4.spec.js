// @ts-check
import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://ultimateqa.com/complicated-page');

  const title=await page.title();

  await expect(page).toHaveTitle("Complicated Page - Ultimate QA");
});


test('fill the form', async ({ page }) => {
   await page.goto('https://webdriveruniversity.com/Login-Portal/index.html');

 await page.locator('#text').fill("rosy");
await page.locator('#password').fill("abc@gmail.com");
await page.getByRole('button', { name: 'Login' }).click();

});

// test('click the button', async ({ page }) => {
// await page.getByRole('button', { name: 'Login' }).click();


//   // Expects page to have a heading with the name of Installation.
//  // await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
// });
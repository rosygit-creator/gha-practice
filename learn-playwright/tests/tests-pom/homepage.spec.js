import {test} from '@playwright/test';
import { HomePage} from '../pom-objects/homePage.js';
import { assert } from 'console';

test('homepage test', async ({ page }) => {
  const homePage = new HomePage(page);
  // const popup = new Popup(page);

    // Navigate to the login page
  // await homePage.open();
  // await popup.clickPopup();

  await homePage.clickPopup();

  await homePage.clickSignInLink()

  await expect(page).tohaveTitle();

  
});

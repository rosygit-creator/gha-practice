import {test,page,expect} from '@playwright/test';
// import {user} from './testdata.js';
 import { LoginPage } from '../pom-objects/loginPage.js';

let loginPage;
// 
test.beforeEach(async ({ page }) => {
        loginPage = new LoginPage(page);
        await loginPage.open();
    });


test('login test', async ({page}) => {
  // await page.pause();

// const loginPage = new LoginPage(page);

// await loginPage.open();
// await expect(page).toHaveURL('https://www.saucedemo.com/');
await loginPage.login('standard_user', 'secret_sauce');
await expect(page).toHaveURL(/inventory/);


// expect(page).toHaveTitle('Secure Page page for Automation Testing Practice');


});

test('test2', async({page})=>{

// const loginPage = new LoginPage(page);

// await loginPage.open();
await loginPage.login('standard_user', 'secret_sauce');
await expect(page).toHaveURL(/inventory/);

});



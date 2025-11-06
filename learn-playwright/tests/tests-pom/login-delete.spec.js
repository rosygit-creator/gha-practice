import {test,page} from '@playwright/test';
// import {user} from './testdata.js';
import { LoginPage } from '../pom-objects/loginPage.js';

const loginPage = new LoginPage(page);

test('login test', async () => {
  // await page.pause();

  // const loginPage = new LoginPage(page);

    // Navigate to the login page
  // await loginPage.open();
  // await loginPage.login('practice', 'SuperSecretPassword!');

await page.goto('https://practice.expandtesting.com/login');

// expect(page.toHaveTitle('Test Login Page for Automation Testing Practice'));

 
  await page.getByRole('textbox', { name: 'Username' });

   await page.getByRole('textbox', { name: 'Password' });
  await  page.getByRole('button', { name: 'Login' });
    // Perform login using the user credentials

  // await loginPage.login(user.email, user.password);
  // await page.getByRole('textbox', { name: 'Password' }).fill(user.password);
  // await page.getByRole('button', { type: 'submit' }).click();


});


// learn-playwright/tests/pom-objects/loginPage.js
import { expect } from '@playwright/test';

export class HomePage {
  constructor(page) {
    this.page = page;

   this.signInLink=page.locator('a[routerlink="/login"]');

   // pop up
    // locate pop up window - automatic
    this.popupLocator=page.locator('#popup');

    // click button to make pop up invisible
    this.continuePopup=page.locator('#continue');
  }

  async open() {
    await this.page.goto('https://practice.expandtesting.com/login#google_vignette', {waitUntil: 'networkidle'});
  }

  async clickSignInLink(){
    // const e=this.page.getByRole('link', { name: 'Sign in' });
    const e=this.signInLink;
    await e.hover();
    await e.click();
  }

  async clickPopup(){
    if(this.popupLocator){
        // click continue
    await this.continuePopup.click();
    }

  }


  // async assertHomePage() {
  //   await expect(this.page).toHaveURL(/.*home/);
  // }
}
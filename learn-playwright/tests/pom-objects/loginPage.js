

export class LoginPage {
  constructor(page) {
   
    this.page = page;

    // define locators for the elements on  the login page

    this.emailInput = page.getByRole('textbox', { name: 'Username' });

    this.passwordInput = page.getByRole('textbox', { name: 'Password' });
    this.submitButton = page.locator('#login-button');

    // popup

    this.checkPopup=page.locator(' ');

    // continue button
    this.continueButton=page.locator(' ');


  }

  async open() {
    await this.page.goto('https://www.saucedemo.com/');
  }

  async checkPopupWindow(){

    if(await this.checkPopup.isVisible())
      this.continueButton.click();
  }
  async login(email, password) {

    
    await this.emailInput.fill(email);
    await this.passwordInput.fill(password);
    // await this.page.waitForTimeout(2000);
    await this.submitButton.click();
  
  }

  // async assertLoginSuccess() {
  //   await expect(this.page).toHaveURL(/.*contactList/);
  // }
}
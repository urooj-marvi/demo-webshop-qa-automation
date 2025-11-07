import { Page } from '@playwright/test';

export class RegisterPage {
  private genderMale;
  private firstName;
  private lastName;
  private emailField;
  private passwordField;
  private confirmPasswordField;
  private registerButton;

  constructor(private page: Page) {
    this.genderMale = page.locator('#gender-male');
    this.firstName = page.locator('#FirstName');
    this.lastName = page.locator('#LastName');
    this.emailField = page.locator('#Email');
    this.passwordField = page.locator('#Password');
    this.confirmPasswordField = page.locator('#ConfirmPassword');
    this.registerButton = page.locator('#register-button');
  }

  async registerUser(email: string, password: string) {
    await this.genderMale.click();
    await this.firstName.fill('Zoya');
    await this.lastName.fill('Shykh');
    await this.emailField.fill(email);
    await this.passwordField.fill(password);
    await this.confirmPasswordField.fill(password);
    await this.registerButton.click();
      await this.page.waitForSelector('text=Your registration completed');
  await this.page.click('text=Continue');
  }
}

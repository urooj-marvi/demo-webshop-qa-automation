import { Page } from '@playwright/test';

export class LoginPage {
  private emailField;
  private passwordField;
  private loginButton;

  constructor(private page: Page) {
    this.emailField = page.locator('#Email');
    this.passwordField = page.locator('#Password');
    this.loginButton = page.locator('input[value="Log in"]');
  }

  async login(email: string, password: string) {
    await this.emailField.fill(email);
    await this.passwordField.fill(password);
    await this.loginButton.click();
  }
}

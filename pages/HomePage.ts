import { Page } from '@playwright/test';

export class HomePage {
  constructor(private page: Page) {}

  async goto() {
    await this.page.goto('/');
  }

  async register(email: string, password: string) {
    await this.page.click('a.ico-register');
    await this.page.fill('#FirstName', 'Test');
    await this.page.fill('#LastName', 'User');
    await this.page.fill('#Email', email);
    await this.page.fill('#Password', password);
    await this.page.fill('#ConfirmPassword', password);
    await this.page.click('#register-button');
    await this.page.click('a.ico-logout');
  }

  async login(email: string, password: string) {
    await this.page.click('a.ico-login');
    await this.page.fill('#Email', email);
    await this.page.fill('#Password', password);
    await this.page.click('input[value="Log in"]');
  }

  async navigateToLaptop() {
    await this.page.hover('a[href="/computers"]');
    await this.page.click('a[href="/notebooks"]');
    await this.page.click('a:has-text("14.1-inch Laptop")');
  }
}

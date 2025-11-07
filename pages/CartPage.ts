import { Page, expect } from '@playwright/test';

export class CartPage {
  constructor(private page: Page) {}

  async verifyProductDetails(name: string, price: string) {
    await expect(this.page.locator('.product-name')).toContainText(name!);
    await expect(this.page.locator('.product-unit-price')).toContainText(price!);
  }

  async proceedToCheckout() {
    await this.page.check('#termsofservice');
    await this.page.click('#checkout');
  }
}

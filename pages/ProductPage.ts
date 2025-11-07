import { Page, expect } from '@playwright/test';

export class ProductPage {
  constructor(private page: Page) {}

  async addToCartAndVerify() {
    const name = await this.page.textContent('.product-name h1');
    const price = await this.page.textContent('.product-price span');
    await this.page.click('#add-to-cart-button-31');
    await this.page.waitForSelector('.content', { state: 'visible' });
    await this.page.click('.cart-label');
    return { name, price };
  }
}

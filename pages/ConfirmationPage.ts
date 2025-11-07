import { Page, expect } from '@playwright/test';
import { orderNumberRegex } from '../utils/helpers';

export class ConfirmationPage {
  constructor(private page: Page) {}

  async verifyThankYouPage() {
    await expect(this.page.locator('h1')).toHaveText('Thank you');
    const text = await this.page.textContent('.order-number');
    const match = text?.match(orderNumberRegex);
    expect(match).toBeTruthy();
    console.log('Order Number:', match?.[1]);
  }
}

import { Page } from '@playwright/test';

export class CheckoutPage {
  constructor(private page: Page) {}

  async fillBillingDetails(user: any) {
    await this.page.selectOption('#BillingNewAddress_CountryId', { label: user.country });
    await this.page.fill('#BillingNewAddress_City', user.city);
    await this.page.fill('#BillingNewAddress_Address1', user.address);
    await this.page.fill('#BillingNewAddress_ZipPostalCode', user.zip);
    await this.page.fill('#BillingNewAddress_PhoneNumber', user.phone);
    await this.page.click('input.button-1.new-address-next-step-button');
  }

  async completeCheckoutFlow() {
    for (let i = 0; i < 3; i++) {
      await this.page.click('input.button-1.new-address-next-step-button, input.button-1.shipping-method-next-step-button, input.button-1.payment-method-next-step-button', { timeout: 10000 }).catch(() => {});
      await this.page.click('input.button-1.payment-info-next-step-button', { timeout: 10000 }).catch(() => {});
    }
    await this.page.click('input.button-1.confirm-order-next-step-button');
  }
}

import { test } from '@playwright/test';

type UserData = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  country: string;
  city: string;
  address: string;
  zip: string;
  phone: string;
};
import userData from '../../test-data/users.json';

const users = userData as UserData[];


import { generateUniqueEmail } from '../../utils/helpers';
import { HomePage } from '../../pages/HomePage';
import { ProductPage } from '../../pages/ProductPage';
import { CartPage } from '../../pages/CartPage';
import { CheckoutPage } from '../../pages/CheckoutPage';
import { ConfirmationPage } from '../../pages/ConfirmationPage';



for (const data of users) {
  test(`E2E Purchase Flow for ${data.firstName}`, async ({ page }) => {
    const home = new HomePage(page);
    const product = new ProductPage(page);
    const cart = new CartPage(page);
    const checkout = new CheckoutPage(page);
    const confirmation = new ConfirmationPage(page);

    const email = generateUniqueEmail(data.email);

    await home.goto();
    await home.register(email, data.password);
    await home.login(email, data.password);
    await home.navigateToLaptop();

    const { name, price } = await product.addToCartAndVerify();
    await cart.verifyProductDetails(name!, price!);
    await cart.proceedToCheckout();

    await checkout.fillBillingDetails(data);
    await checkout.completeCheckoutFlow();

    await confirmation.verifyThankYouPage();
  });
}

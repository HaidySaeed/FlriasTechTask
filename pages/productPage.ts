import { $, driver } from '@wdio/globals';

export class productPage {

    // ============ Locators ============

    // أول product add to cart button (instance 0)
    private get firstProductAddToCart() {
        return $('android=new UiSelector().resourceId("com.androidsample.generalstore:id/productAddCart").instance(0)');
    }

    // cart icon (counter)
    private get cartCounter() {
        return $('android=new UiSelector().resourceId("com.androidsample.generalstore:id/counterText")');
    }

    // ============ Actions ============

    async addFirstProductToCart(): Promise<void> {
        await (await this.firstProductAddToCart).click();
    }

    async goToCart(): Promise<void> {
        await (await this.cartCounter).click();
    }
}
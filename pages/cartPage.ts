import { $ } from '@wdio/globals';
import { expect } from '@wdio/globals';

export class cartPage {

    // ============ Locators ============

    private get productName() {
        return $('android=new UiSelector().resourceId("com.androidsample.generalstore:id/productName")');
    }

    private get totalAmount() {
        return $('android=new UiSelector().resourceId("com.androidsample.generalstore:id/productPrice")');
    }

    // ============ Actions ============

    async getProductName(): Promise<string> {
        return await (await this.productName).getText();
    }

    async getTotalAmount(): Promise<string> {
        return await (await this.totalAmount).getText();
    }

    // ============ Assertions ============

    async assertProductDisplayed(expectedName: string): Promise<void> {
        const name = await this.getProductName();
        expect(name).toEqual(expectedName);
    }

    async assertTotalAmount(expectedAmount: string): Promise<void> {
        const amount = await this.getTotalAmount();
        expect(amount).toContain(expectedAmount);
    }
}
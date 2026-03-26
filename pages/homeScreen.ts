import { $, driver } from '@wdio/globals';

export class homeScreen {

    // ============ Locators ============

    private get spinnerCountry() {
        return $('android=new UiSelector().resourceId("com.androidsample.generalstore:id/spinnerCountry")');
    }

    private get dropdownList() {
        return $('android.widget.ListView');
    }

    private get nameField() {
        return $('android=new UiSelector().resourceId("com.androidsample.generalstore:id/nameField")');
    }

    private get radioFemale() {
        return $('android=new UiSelector().resourceId("com.androidsample.generalstore:id/radioFemale")');
    }

    private get btnLetsShop() {
        return $('android=new UiSelector().resourceId("com.androidsample.generalstore:id/btnLetsShop")');
    }

    // ============ Actions ============

    async selectCountry(countryName: string): Promise<void> {
        await (await this.spinnerCountry).click();
        await (await this.dropdownList).waitForDisplayed({ timeout: 5000 });
        const option = await $(`android=new UiSelector().text("${countryName}")`);
        await option.click();
    }

    async getSelectedCountry(): Promise<string> {
        return await (await this.spinnerCountry).getText();
    }

    async enterName(name: string): Promise<void> {
        await (await this.nameField).click();
        await (await this.nameField).setValue(name);
        await driver.hideKeyboard();
    }

    async selectFemale(): Promise<void> {
        await (await this.radioFemale).click();
    }

    async clickLetsShop(): Promise<void> {
        await (await this.btnLetsShop).click();
    }
}
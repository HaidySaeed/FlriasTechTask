import { homeScreen } from '../../pages/homeScreen';
import { productPage } from '../../pages/productPage';
import { cartPage } from '../../pages/cartPage';
describe('General Store - Full Flow', () => {

    let home: homeScreen;
    let product: productPage;
    let cart : cartPage;

    before(async () => {
        home = new homeScreen();
        product = new productPage();
        cart=new cartPage();
    });

    it('should fill the form and navigate to shop', async () => {
        await home.selectCountry('Andorra');
        await home.enterName('Haidy');
        await home.selectFemale();
        await home.clickLetsShop();
    });

    it('should add first product to cart and go to cart', async () => {
        await product.addFirstProductToCart();
        await product.goToCart();
    });
     it('should assert product is displayed in cart', async () => {
        await cart.assertProductDisplayed('Air Jordan 4 Retro');
        await cart.assertTotalAmount('160.97');

    });


});
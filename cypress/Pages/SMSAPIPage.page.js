const MainPage = require("./Main.page")

export default new class SMSAPIPage extends MainPage{
    elements = {
    portalButton: () => cy.get('[href="/sign-up"]>span').contains('portal'),

    productsDropdown: () => cy.get('button>div>span').contains('Products').first(),
    
    smsApiButton: () => cy.get('[href="/products/sms-api"]>span'),
    }
    clickPortalButton() {
        this.elements.portalButton().click()
    }
    clickProductsDropdown() {
        this.elements.productsDropdown().click();
    }
    clickSmsApiButton() {
        this.elements.smsApiButton().click();
    }
}
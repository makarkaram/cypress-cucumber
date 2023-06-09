export default class MainPage{
    elements = {
    pricingDropdown: () => cy.get('button>div>span').contains('Pricing').first(),
    
    globalNumbersButton : () => cy.get('a>span').contains('Global Numbers').first(),
    
    productsDropdown: () => cy.get('button>div>span').contains('Products').first(),
    
    partnersButton: () => cy.get('a>span').contains('Partners'),
    
    whyTelnyxButton: () => cy.get('button>div>span').contains('Why Telnyx'),
    
    solutionsButton: () => cy.get('[href="/solutions"]>span').contains('Solutions').first(),
    
    missionControlButton: () => cy.get('[href="/mission-control"]>span'),
    
    smsApiButton: () => cy.get('[href="/products/sms-api"]>span'),
    
    contactUsButton: () => cy.get('[href="/contact-us"]').first(),
    
    signUpButton: () => cy.get('[id="header-sign-up"]'),
    }
    clickPricingDropdown() {
        this.elements.pricingDropdown().click();
    }
    clickGlobalNumbersButton() {
        this.elements.globalNumbersButton().click();
    }
    clickProductsDropdown() {
        this.elements.productsDropdown().click();
    }
    clickWhyTelnyxButton() {
        this.elements.whyTelnyxButton().click();
    }
    clickPartnersButton() {
        this.elements.partnersButton().click();
    }
    clickSolutionsButton() {
        this.elements.solutionsButton().click();
    }
    clickMissionControlButton() {
        this.elements.missionControlButton().click();
    }
    clickSmsApiButton() {
        this.elements.smsApiButton().click();
    }
    clickSignUpButton() {
        this.elements.signUpButton().click();
    }
}
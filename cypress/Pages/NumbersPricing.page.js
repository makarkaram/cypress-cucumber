const MainPage = require("./Main.page")

export default new class NumbersPricing extends MainPage{
    elements = {
    payAsYouGoText: () => cy.get('h2#pay-as-you-go'),
    
    payAsYouGoDropdown: () => cy.get('div>button[type="button"]'),
    
    canadaOption: () => cy.get('a[href="/pricing/numbers/ca"][id]'),
    
    ukraineOption: () => cy.get('a[href="/pricing/numbers/ua"][id]'),

    globalNumbersButton : () => cy.get('a>span').contains('Global Numbers').first(),
    
    pricingDropdown: () => cy.get('button>div>span').contains('Pricing').first(),
    
    usingAnExistingNumberText: () => cy.get('tr>th').contains('Using an existing number'),
    }
    scrollDownPayAsYouGoDropdown() {
        this.elements.payAsYouGoDropdown().scrollIntoView()
    }
    clickGlobalNumbersButton() {
        this.elements.globalNumbersButton().click();
    }
    clickPricingDropdown() {
        this.elements.pricingDropdown().click();
    }
    selectCanadaOptionInPayAsYouGoDropdown() {
        this.elements.payAsYouGoDropdown().click({force: true})
        this.elements.canadaOption().click()
    }
    checkUsingAnExistingNumberTextVisibility() {
        this.elements.usingAnExistingNumberText().should('be.visible')
    }
    selectUkraineOptionInPayAsYouGoDropdown() {
        this.elements.payAsYouGoDropdown().click({force: true})
        this.elements.ukraineOption().click()
    }
    checkUsingAnExistingNumberTextNotVisible() {
        this.elements.usingAnExistingNumberText().should('not.exist')
    }
}
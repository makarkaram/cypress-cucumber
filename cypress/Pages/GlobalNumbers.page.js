const MainPage = require("./Main.page")

export default new class GlobalNumbersPage extends MainPage{

    elements = {
    searchNumbersButton: () => cy.get('a[title="[Talk to sales] Global Numbers - Button"]>span').first(),
    
    askOurExpertsButton: () => cy.get('[href="/contact-us"]>span').first(),
    
    seePricingButton: () => cy.get('[href="https://telnyx.com/pricing/"]'),

    globalNumbersButton : () => cy.get('a>span').contains('Global Numbers').first(),
    
    productsDropdown: () => cy.get('button>div>span').contains('Products').first(),
    }
    clickSearchNumbersButton() {
        this.elements.searchNumbersButton().click({force: true})
    }
    clickAskOurExpertsButton() {
        this.elements.askOurExpertsButton().click({force: true})
    }
    scrollToSeePricingButton() {
        this.elements.seePricingButton().scrollIntoView()
    }
    clickSeePricingButton() {
        this.elements.seePricingButton().click({force: true})
    }
    clickProductsDropdown() {
        this.elements.productsDropdown().click();
    }
    clickGlobalNumbersButton() {
        this.elements.globalNumbersButton().click();
    }
}

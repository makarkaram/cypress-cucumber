class PricingPage {
    elements = {
    payAsYouGoWindow: () => cy.get('section>div>div>strong').contains('Pay as you go'),
    
    volumeBasedPrising: () => cy.get('section>div>div>strong').contains('Volume-based pricing'),
    }
    checkPayAsYouGoWindowVisibility() {
        this.elements.payAsYouGoWindow().should('be.visible')
    }
    checkVolumeBasedPrisingVisibility() {
        this.elements.volumeBasedPrising().should('be.visible')
    }
}
module.exports = new PricingPage()
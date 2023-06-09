const MainPage = require("./Main.page")

export default new class SolutionsPage extends MainPage{
    elements = {
    seeIndustriesButton: () => cy.get('[href="#industries"]>span'),
    
    seeUseCasesButton: () => cy.get('[href="#use-cases"]>span'),
    
    healthcareButton: () => cy.get('[href="/solutions/healthcare"]'),
    
    accountNotificationWindow: () => cy.get('ul>li>div').eq(0),
    
    solutionsButton: () => cy.get('[href="/solutions"]>span').contains('Solutions').first(),
    }
    scrollToSeeIndustriesButton() {
        this.elements.seeIndustriesButton().scrollIntoView()
    }
    clickSeeUseCasesButton() {
        this.elements.seeUseCasesButton().click()
    }
    checkHealthcareButtonVisibility() {
        this.elements.healthcareButton().should('be.visible')
    }
    checkAccountNotificationWindowVisibility() {
        this.elements.accountNotificationWindow().should('be.visible')
    }
    clickSolutionsButton() {
        this.elements.solutionsButton().click();
    }
    clickSeeIndustriesButton() {
        this.elements.seeIndustriesButton().click({force: true})
    }
}

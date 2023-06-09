class SignInPage {
    elements = {
    emailField: () => cy.get('[name="email"]').first(),
    
    passwordField: () => cy.get('[name="password"]').first(),
    
    logInButton: () => cy.get('form>div~button[type="submit"]').first(),
    
    errorMesage: () => cy.get('div>div>div>span[class]').first(),
    
    emptyFieldErrorMesage: () => cy.get('[class*="TextField__Error"]').first(),
    }
    enterEmailFieldValue(Email) {
        this.elements.emailField().type(Email)
    }
    enterPasswordFieldValue(Password) {
        this.elements.passwordField().type(Password)
    }
    clickLogInButton() {
        this.elements.logInButton().click({force: true})
    }
    checkErrorMesageVisibility() {
        this.elements.errorMesage().should('be.visible')
    }
    checkEmptyFieldErrorMesageVisibility() {
        this.elements.emptyFieldErrorMesage().should('be.visible')
    }
}
module.exports = new SignInPage()
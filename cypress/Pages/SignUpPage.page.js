const MainPage = require("./Main.page")

export default new class SignUpPage extends MainPage{
    elements = {
    submitButton: () => cy.get('[type="submit"]>span').contains('SIGN UP').first(),
    
    emailField: () => cy.get('#email'),
    
    firstNameField: () => cy.get('#first_name'),
    
    lastNameField: () => cy.get('#last_name'),
    
    passwordField: () => cy.get('#password'),
    
    agreeButton: () => cy.get('#terms_and_conditions'),
    
    submitTextMessage: () => cy.get('div[class]>p[class]'),
    
    errorTextMessage: () => cy.get('#first_name_message'),
    
    logInLinkButton: () => cy.get('p>a[href*="telnyx"]'),
    
    telnyxsTermsLinkButton: () => cy.get('[href="/terms-and-conditions-of-service"]').first(),
    
    privacyPolicyLinkButton: () => cy.get('[href="/privacy-policy"]').first(),
    
    titleText: () => cy.get('div>h1>span'),

    signUpButton: () => cy.get('[id="header-sign-up"]'),
    }
    enterEmailFieldValue(Email) {
        this.elements.emailField().type(Email, { force: true })
    }
    enterFirstNameFieldValue(Name) {
        this.elements.firstNameField().type(Name)
    }
    enterLastNameFieldValue(Name) {
        this.elements.lastNameField().type(Name)
    }
    enterPasswordFieldValue(Password) {
        this.elements.passwordField().type(Password)
    }
    clickAgreeButton() {
        this.elements.agreeButton().click()
    }
    clickSubmitButton() {
        this.elements.submitButton().click()
    }
    checkSubmitMessageVisibility() {
        for(let i=0; i>2; i++) {
            this.elements.submitTextMessage().eq(i).should('be.visible')
        }
    }
    checkErrorMessageVisibility() {
        this.elements.errorTextMessage().scrollIntoView()
        this.elements.errorTextMessage().should('be.visible')
    }
    scrollToLogInLinkButton() {
        this.elements.logInLinkButton().scrollIntoView()
    }
    scrollTelnyxsTermsLinkButton() {
        this.elements.telnyxsTermsLinkButton().scrollIntoView()
    }
    clickLogInLinkButton() {
        this.elements.logInLinkButton().invoke('removeAttr', 'target').click()
    }
    clickTelnyxsTermsLinkButton() {
        this.elements.telnyxsTermsLinkButton().invoke('removeAttr', 'target').click({force: true})
    }
    clickPrivacyPolicyLinkButton() {
        this.elements.privacyPolicyLinkButton().invoke('removeAttr', 'target').click({force: true})
    }
    checkTitleTextVisibility() {
        this.elements.titleText().should('be.visible')
    }
    clickSignUpButton() {
        this.elements.signUpButton().click();
    }
}
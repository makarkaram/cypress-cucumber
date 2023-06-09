const MainPage = require("./Main.page")

export default new class PartnershipPage extends MainPage{
    elements = {
    whyTelnyxButton: () => cy.get('button>div>span').contains('Why Telnyx'),
    
    becomeAPartnerButton: () => cy.get('div>a>span').contains('BECOME A PARTNER').first(),
    
    firstNameField: () => cy.get('#FirstName'),
    
    lastNameField: () => cy.get('#LastName'),
    
    companyField: () => cy.get('#Company'),
    
    emailField: () => cy.get('#Email'),
    
    countryDropdown: () => cy.get('#Phone_Number_Extension__c'),
    
    phoneNumberField: () => cy.get('#Phone_Number_Base__c'),

    partnerTypeDropdown: () => cy.get('#Partner_Type__c'),
    
    tellUsField: () => cy.get('#Form_Additional_Information__c'),
    
    applyNowButton: () => cy.get('[type="submit"]'),
    
    submitMessageText: () => cy.get('h1>span'),
    
    errorMessageText: () => cy.get('#ValidMsgFirstName'),
    
    partnersButton: () => cy.get('a>span').contains('Partners'),
    }
    clickBecomeAPartnerButton() {
        this.elements.becomeAPartnerButton().click({force: true})
    }
    enterFirstNameFieldValue(Name) {
        this.elements.firstNameField().type(Name, {force: true})
    }
    enterLastNameFieldValue(Name) {
        this.elements.lastNameField().type(Name)
    }
    enterEmailFieldValue(Email) {
        this.elements.emailField().type(Email)
    }
    selectCanadaOptionInCountryDropdown() {
        this.elements.countryDropdown().select('Canada (+1)')
    }
    enterPhoneNumberFieldValue(Number) {
        this.elements.phoneNumberField().type(Number)
    }
    enterCompanyFieldValue(Name) {
        this.elements.companyField().type(Name)
    }
    selectResellerOptionInPartnerTypeDropdown() {
        this.elements.partnerTypeDropdown().select('Reseller')
    }
    enterTellUsFieldValue(Text) {
        this.elements.tellUsField().type(Text)
    }
    clickApplyNowButton() {
        this.elements.applyNowButton().click()
    }
    checkSubmitMessageVisibility() {
        this.elements.submitMessageText().should('have.text', 'Thank you.')
    }
    checkErrorMessageVisibility() {
        this.elements.errorMessageText().should('be.visible')
    }
     clickWhyTelnyxButton() {
        this.elements.whyTelnyxButton().click();
    }
    clickPartnersButton() {
        this.elements.partnersButton().click();
    }
}
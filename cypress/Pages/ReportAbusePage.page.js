class ReportAbusePage {
    elements = {
    reportingField: () => cy.get('#shortDescription'),
    
    phoneCausingNumberField: () => cy.get('#abusivePhoneNumber'),
    
    countryCausingAbuseDropdown: () => cy.get('[id="Select country"]').first(),
    
    countryReceivingNumberField: () => cy.get('#abusedPhoneNumber'),
    
    countryReceivingAbuseDropdown: () => cy.get('[id="Select country"]').eq('1'),
    
    dateAndTimeField: () => cy.get('#dateTime'),
    
    voiceButton: () => cy.get('#abusedServicesoption0'),
    
    messagingButton: () => cy.get('#abusedServicesoption1'),
    
    fullNameField: () => cy.get('#reporterName'),
    
    emailField: () => cy.get('#reporterEmail'),
    
    additionalDetails: () => cy.get('#longDescription'),
    
    submitButton: () => cy.get('button>span[class]').first(),
    
    submitMessageText: () => cy.get('h1>span'),
    
    errorMessageText: () => cy.get('#shortDescription_message'),
    }
    enterInReportingFieldValue(Text) {
        this.elements.reportingField().click({force: true})
        this.elements.reportingField().type(Text)
    }
    enterInPhoneCausingNumberFieldValue(Number) {
        this.elements.phoneCausingNumberField().type(Number)
    }
    selectAlbaniaOptionInCountryCausingAbuseDropdown() {
        this.elements.countryCausingAbuseDropdown().select('Albania')
    }
    enterInPhoneReceivingNumberFieldValue(Number) {
        this.elements.phoneReceivingNumberField().type(Number)
    }
    selectAustrealiaOptionInCountryReceivingAbuseDropdown() {
        this.elements.countryReceivingAbuseDropdown().select('Austrealia')
    }
    enterInDateAndTimeFieldValue(Date, Time) {
        this.elements.dateAndTimeField().type(Date)
        this.elements.dateAndTimeField().type({leftArrow})
        this.elements.dateAndTimeField().type(Time)
    }
    clickVoiceButton() {
        this.elements.voiceButton().click()
    }
    clickMessagingButton() {
        this.elements.messagingButton().click()
    }
    enterInFullNameFieldValue(Name) {
        this.elements.fullNameField().type(Name)
    }
    enterInEmailFieldValue(Email) {
        this.elements.emailField().type(Email)
    }
    enterInAdditionalDetailsValue(Text) {
        this.elements.additionalDetails().type(Text)
    }
    scrollToSubmitButton() {
        this.elements.submitButton().scrollIntoView()
    }
    clickSubmitButton() {
        this.elements.submitButton().click({force: true})
    }
    checkSubmitMessageTextVisibility() {
        this.elements.submitMessageText().should('be.visible')
    }
    checkErrorMessageTextVisibility() {
        this.elements.errorMessageText().should('be.visible')
    }
}
module.exports = new ReportAbusePage()
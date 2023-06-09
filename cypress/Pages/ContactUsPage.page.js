class ContactUsPage {
    elements = {
    firstNameField : () => cy.get('#FirstName'),
    
    lastNameField : () => cy.get('#LastName'),
    
    emailField : () => cy.get('#Email'),
    
    countryDropdown : () => cy.get('[name="Phone_Number_Extension__c"]'),
    
    canadaOption : () => cy.get('[value="+1"]').contains('Canada (+1)'),
    
    reasonForContactDropdown : () => cy.get('#Reason_for_Contact__c'),
    
    phoneNumberField : () => cy.get('#Phone_Number_Base__c'),
    
    companyWebsiteField : () => cy.get('#Website'),
    
    describeYourRequestField : () => cy.get('#Form_Additional_Information__c'),
    
    submitButton : () => cy.get('[type="Submit"]'),
    
    submitMessageText : () => cy.get('h1>span'),
    
    howDidYouHearAboutTelnyxField : () => cy.get('#How_did_you_hear_about_Telnyx_Open__c'),
    
    errorMesageText : () => cy.get('#ValidMsgReason_for_Contact__c'),
    
    reportAbuseLinkButton : () => cy.get('[href="https://telnyx.com/report-abuse"]>span').first(),
    }

    selectSupportOptionInReasonForContactDropdown() {
        this.elements.reasonForContactDropdown().select('Support', {force: true})
    }
    enterFirstNameFieldValue(Name) {
        this.elements.firstNameField().type(Name)
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
    enterCompanyWebsiteFieldValue(Website) {
        this.elements.companyWebsiteField().type(Website)
    }
    enterDescribeYourRequestFieldValue(Text) {
        this.elements.describeYourRequestField().type(Text)
    }
    clickSubmitButton() {
        this.elements.submitButton().click()
    }
    checkSubmitMessageText(text) {
        this.elements.submitMessageText().should('have.text', text)
    }
    clickSupportCenterButton() {
        this.elements.supportCenterButton().invoke('removeAttr', 'target').click()
    }
    enterHowDidYouHearAboutTelnyxFieldValue(Text) {
        this.elements.howDidYouHearAboutTelnyxField().type(Text)
    }
    checkErrorMesageTextVisibility() {
        this.elements.errorMesageText().should('be.visible')
    }
    scrollToReportAbuseLinkButton() {
        this.elements.reportAbuseLinkButton().scrollIntoView()
    }
    clickReportAbuseLinkButton() {
        this.elements.reportAbuseLinkButton().click()
    }
    
}

module.exports = new ContactUsPage()
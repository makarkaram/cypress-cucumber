import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps"
import CoockiesPage from "../../Pages/CoockiesPage.page";
import PartnershipsPage from "../../Pages/PartnershipsPage.page";
import TextGenerator from "../../Helper/TextGenerator";

const Name = TextGenerator.randomName()
const Email = TextGenerator.randomEmail()
const Number = TextGenerator.randomNumber()
const Text = TextGenerator.randomLongText()

Given('I am on the Telnyx page and confirm the cookies', () => { 
    cy.visit('/')
    CoockiesPage.acceptCookies()
})
And('I select "Why Telnyx" option in "Partners" dropdown', () => {
    PartnershipsPage.clickWhyTelnyxButton()
    PartnershipsPage.clickPartnersButton()
})
When('I click on "Become a partner" button', () => {
    PartnershipsPage.clickBecomeAPartnerButton()
})
And('I fill the "Become a Telnyx Partner" form with correct data', async() => {
    PartnershipsPage.enterFirstNameFieldValue(Name)
    PartnershipsPage.enterLastNameFieldValue(Name)
    PartnershipsPage.enterCompanyFieldValue(Name)
    PartnershipsPage.enterEmailFieldValue(Email)
    PartnershipsPage.selectCanadaOptionInCountryDropdown()
    PartnershipsPage.enterPhoneNumberFieldValue(Number)
    PartnershipsPage.selectResellerOptionInPartnerTypeDropdown()
    PartnershipsPage.enterTellUsFieldValue(Text)
})
And('I click on "Apply Now" button', () => {
    PartnershipsPage.clickApplyNowButton()
})
Then('I should see "Thank you." message', () => {
    PartnershipsPage.checkSubmitMessageVisibility()
})
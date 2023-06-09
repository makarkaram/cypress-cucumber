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
When('I select "Partners" option in "Why Telnyx" dropdown', () => {
    PartnershipsPage.clickWhyTelnyxButton()
    PartnershipsPage.clickPartnersButton()
})
And('I click on "Become a partner" button', () => {
    PartnershipsPage.clickBecomeAPartnerButton()
})
And('I click on "Apply Now" button', () => {
    PartnershipsPage.clickApplyNowButton()
})
Then('I should see "This field is required." message', () => {
    PartnershipsPage.checkErrorMessageVisibility()
})
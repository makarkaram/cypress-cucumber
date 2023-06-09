import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps"
import CoockiesPage from "../../Pages/CoockiesPage.page";
import SignUpPage from "../../Pages/SignUpPage.page";
import SMSAPIPage from "../../Pages/SMSAPIPage.page";
import TextGenerator from "../../Helper/TextGenerator";

const Email = TextGenerator.randomEmail()
const Name = TextGenerator.randomName()
const Password = TextGenerator.randomPassword()

Given('I am on the Telnyx page and confirm the cookies', () => { 
    cy.visit('/')
    CoockiesPage.acceptCookies()
})
When('I select "SMS API" option in "Products" dropdown', () => {
    SMSAPIPage.clickProductsDropdown()
    SMSAPIPage.clickSmsApiButton()
})
And('I click on "portal" link button', () => {
    SMSAPIPage.clickPortalButton()
})
And('I click on "Submit" button', () => {
    SignUpPage.clickSubmitButton()
})
Then('I should see "This field is required." message', () => {
    SignUpPage.checkErrorMessageVisibility()
})
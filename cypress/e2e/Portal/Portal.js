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
And('I fill the "Sign Up" form with correct data', async() => {
    SignUpPage.enterEmailFieldValue(Email)
    SignUpPage.enterFirstNameFieldValue(Name)
    SignUpPage.enterLastNameFieldValue(Name)
    SignUpPage.enterPasswordFieldValue(Password)
    SignUpPage.clickAgreeButton()
})
And('I click on "SUBMIT" button', () => {
    SignUpPage.clickSubmitButton()
})
Then('I should see "one last step" message', () => {
    SignUpPage.checkSubmitMessageVisibility()
})
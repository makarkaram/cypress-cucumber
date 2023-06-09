import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps"
import CoockiesPage from "../../Pages/CoockiesPage.page";
import SignUpPage from "../../Pages/SignUpPage.page";

Given('I am on the Telnyx page and confirm the cookies', () => { 
    cy.visit('/')
    CoockiesPage.acceptCookies()
})
When('I click on "Sign Up" button', () => {
    SignUpPage.clickSignUpButton()
})
And('I click on "Telnyxs Terms and Conditions" link button', () => {
    SignUpPage.clickTelnyxsTermsLinkButton()
})
Then('I should see title text', () => {
    SignUpPage.checkTitleTextVisibility()
})
import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps"
import CoockiesPage from "../../Pages/CoockiesPage.page";
import TextGenerator from "../../Helper/TextGenerator";
import SignUpPage from "../../Pages/SignUpPage.page";
import SignInPage from "../../Pages/SignInPage.page";

const Email = TextGenerator.randomEmail()
const Password = TextGenerator.randomPassword()

Given('I am on the Telnyx page and confirm the cookies', () => { 
    cy.visit('/')
    CoockiesPage.acceptCookies()
})
When('I click on "Sign Up" button', () => {
    SignUpPage.clickSignUpButton()
})
And('I scroll down to "Log In" link button', () => {
    SignUpPage.scrollToLogInLinkButton()
})
And('I click on "Log In" link button', () => {
    SignUpPage.clickLogInLinkButton()
})
And('I click on "Log In" button', () => {
    SignInPage.clickLogInButton()
})
Then('I should see "Required" message', () => {
    SignInPage.checkEmptyFieldErrorMesageVisibility()
})
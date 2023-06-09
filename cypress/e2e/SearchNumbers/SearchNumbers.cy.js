import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import GlobalNumbersPage from "../../Pages/GlobalNumbers.page";
import SignUpPage from "../../Pages/SignUpPage.page";
import TextGenerator from "../../Helper/TextGenerator";
import CoockiesPage from "../../Pages/CoockiesPage.page";

const Email = TextGenerator.randomEmail()
const Name = TextGenerator.randomName()
const Password = TextGenerator.randomPassword()

Given('I am on the Telnyx page and confirm the cookies', async() => { 
    cy.visit('/')
    CoockiesPage.acceptCookies()
})
When('I Select "Global Numbers" option in "Products" dropdown', async() => {
    GlobalNumbersPage.clickProductsDropdown()
    GlobalNumbersPage.clickGlobalNumbersButton()
})
And('I click on "Search numbers" button', async() => {
    GlobalNumbersPage.clickSearchNumbersButton()
})
And('I fill the "Sign Up" form with correct data', async() => {
    SignUpPage.enterEmailFieldValue(Email)
    SignUpPage.enterFirstNameFieldValue(Name)
    SignUpPage.enterLastNameFieldValue(Name)
    SignUpPage.enterPasswordFieldValue(Password)
    SignUpPage.clickAgreeButton()
})
And('I click on "Submit" button', async() => {
    SignUpPage.clickSubmitButton()
})
Then('I should see "one last step" message', async() => {
    SignUpPage.checkSubmitMessageVisibility()
})
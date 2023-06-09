import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps"
import CoockiesPage from "../../Pages/CoockiesPage.page";
import SolutionsPage from "../../Pages/SolutionsPage.page";

Given('I am on the Telnyx page and confirm the cookies', () => { 
    cy.visit('/')
    CoockiesPage.acceptCookies()
})
When('I click on "Solutions" button', () => {
    SolutionsPage.clickSolutionsButton()
})
And('I click on "See industries" button', () => {
    SolutionsPage.clickSeeIndustriesButton()
})
Then('I should see "Healthcare" button', () => {
    SolutionsPage.checkHealthcareButtonVisibility()
})
When('I scroll up to "See use cases" button', () => {
    SolutionsPage.scrollToSeeIndustriesButton()
})
And('I click on "See use cases" button', () => {
    SolutionsPage.clickSeeUseCasesButton()
})
Then('I should see "Account notifications" text and image', () => {
    SolutionsPage.checkAccountNotificationWindowVisibility
})
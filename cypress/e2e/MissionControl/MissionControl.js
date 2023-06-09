import { Given, When, Then } from "cypress-cucumber-preprocessor/steps"
import CoockiesPage from "../../Pages/CoockiesPage.page";
import MissionControlPage from "../../Pages/MissionControlPage.page";

Given('I am on the Telnyx page and confirm the cookies', () => { 
    cy.visit('/')
    CoockiesPage.acceptCookies()
})
When('I select "Mission Control" option in "Why Telnyx" dropdown', () => {
    MissionControlPage.clickWhyTelnyxButton()
    MissionControlPage.clickMissionControlButton()
})
Then('I should see visibility of the "Mission Control Portal" topic text', () => {
    let text = 'Mission Control Portal' 
    MissionControlPage.checkTopicTextMaching(text)
})
When('I scroll down to the "industry-leading platform" link-button', () => {
    MissionControlPage.scrollToIndustryLeadingLincButton()
})
Then('I should see clickability of the "industry-leading platform" link-button', () => {
    MissionControlPage.checkIndustryLeadingLincButtonClickability()
})
import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps"
import CoockiesPage from "../../Pages/CoockiesPage.page";
import MissionControlPage from "../../Pages/MissionControlPage.page";
import G2ComparePage from "../../Pages/G2ComparePage.page";
import ContactUsPage from "../../Pages/ContactUsPage.page";
import TextGenerator from "../../Helper/TextGenerator";

const Name = TextGenerator.randomName()
const Email = TextGenerator.randomEmail()
const Number = TextGenerator.randomNumber()
const Website = TextGenerator.randomWebsite()
const Text = TextGenerator.randomLongText()

Given('I am on the Telnyx page and confirm the cookies', () => { 
    cy.visit('/')
    CoockiesPage.acceptCookies()
})
When('I select "Mission Control" option in "Why Telnyx" dropdown', () => {
    MissionControlPage.clickWhyTelnyxButton()
    MissionControlPage.clickMissionControlButton()
})
And('I scroll down to the "industry-leading platform" link-button', () => {
    MissionControlPage.scrollToIndustryLeadingLincButton()
})
And('I click on "industry-leading platform" link-button', () => {
    MissionControlPage.clickIndustryLeadingLincButton()
})
And('I click on "Talk to an expert" link button', () => {
    G2ComparePage.clickTalkToAnExpertButton()
})
And('I fill the "Contact Us" form with correct data', async() => {
    ContactUsPage.selectSupportOptionInReasonForContactDropdown()
    ContactUsPage.enterFirstNameFieldValue(Name)
    ContactUsPage.enterLastNameFieldValue(Name)
    ContactUsPage.enterEmailFieldValue(Email)
    ContactUsPage.selectCanadaOptionInCountryDropdown()
    ContactUsPage.enterPhoneNumberFieldValue(Number)
    ContactUsPage.enterCompanyWebsiteFieldValue(Website)
    ContactUsPage.enterDescribeYourRequestFieldValue(Text)
    ContactUsPage.enterHowDidYouHearAboutTelnyxFieldValue(Text)
})
And('I click on "Submit" button', () => {
    ContactUsPage.clickSubmitButton()
})
Then('I should see "Thank you." message', () => {
    ContactUsPage.checkSubmitMessageText('Thank you.')
})
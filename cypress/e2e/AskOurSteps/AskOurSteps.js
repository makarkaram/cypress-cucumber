import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps"
import CoockiesPage from "../../Pages/CoockiesPage.page";
import GlobalNumbersPage from "../../Pages/GlobalNumbers.page";
import ContactUsPage from "../../Pages/ContactUsPage.page";
import TextGenerator from "../../Helper/TextGenerator";
import MainPage from "../../Pages/Main.page";

const Name = TextGenerator.randomName()
const Email = TextGenerator.randomEmail()
const Number = TextGenerator.randomNumber()
const Website = TextGenerator.randomWebsite()
const Text = TextGenerator.randomLongText()

Given('I am on the Telnyx page and confirm the cookies', () => { 
    cy.visit('/')
    CoockiesPage.acceptCookies()
})
And('I select "Global Numbers" option in "Products" dropdown', () => {
    GlobalNumbersPage.clickProductsDropdown()
    GlobalNumbersPage.clickGlobalNumbersButton()
})
When('I click on "Ask our experts" link button', () => {
    GlobalNumbersPage.clickAskOurExpertsButton()
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
And('I click on "SUBMIT" button', () => {
    ContactUsPage.clickSubmitButton()
})
Then('I should see "Thank you." message text', () => {
    let text = 'Thank you.'
    ContactUsPage.checkSubmitMessageText(text)
})
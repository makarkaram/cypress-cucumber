Feature: Test the "Contact Us" form with positive scenario, form opened via link from the Global Numbers page

    Scenario: Verify that "Thank you." message appears after submitting Contact Us form with valid credentials, the "Contact Us" form is triggered after clicking the "Ask our experts" button on the "Global Numbers" page.
        Given I am on the Telnyx page and confirm the cookies
        When I select "Global Numbers" option in "Products" dropdown
        And I click on "Ask our experts" link button
        And I fill the "Contact Us" form with correct data
        And I click on "SUBMIT" button
        Then I should see "Thank you." message text
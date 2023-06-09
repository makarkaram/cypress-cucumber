Feature: Test the "Contact Us" form with positive scenario, form opened via "Talk to an expert" link button from the "g2-compare" page
    
    Scenario: Verify that "Thank you." message appears after submitting Contact Us form with valid credentials, the "Contact Us" form is triggered after clicking the "Talk to an expert" link button on the "g2-compare" page.
        Given I am on the Telnyx page and confirm the cookies
        When I select "Mission Control" option in "Why Telnyx" dropdown
        And I scroll down to the "industry-leading platform" link-button
        And I click on "industry-leading platform" link-button
        And I click on "Talk to an expert" link button
        And I fill the "Contact Us" form with correct data
        And I click on "Submit" button
        Then I should see "Thank you." message
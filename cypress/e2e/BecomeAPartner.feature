Feature: Test the "Become a Telnyx Partner" form with positive scenario, form opened via link from the Partnerships page

    Scenario: Verify that "Thank you." message appears after submitting "Become a Telnyx Partner" form with valid credentials, the "Become a Telnyx Partner" form is triggered after clicking the "Become a partner" button on the "Partnerships" page.
        Given I am on the Telnyx page and confirm the cookies
        When I select "Why Telnyx" option in "Partners" dropdown
        And I click on "Become a partner" button
        And I fill the "Become a Telnyx Partner" form with correct data
        And I click on "Apply Now" button
        Then I should see "Thank you." message
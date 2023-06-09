Feature: Test "Become a Telnyx Partner" form with negative scenario where all fields are filled with incorrect data

    Scenario: Verify that "This field is required." message appears after clicking "Submit" button with empty fields, the "Become a Telnyx Partner" form is triggered after clicking the "Become a partner" button on the "Partnerships" page.
        Given I am on the Telnyx page and confirm the cookies
        When I select "Partners" option in "Why Telnyx" dropdown
        And I click on "Become a partner" button
        And I click on "Apply Now" button
        Then I should see "This field is required." message
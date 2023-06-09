Feature: Chech that "Telnyxs Terms & Conditions" link navigate to "Telnyxs Terms & Conditions" page from the Sign up page
    
    Scenario: Verify that after clicking on the "Telnyxs Terms & Conditions" button from the Sign up page the "Telnyxs Terms & Conditions" text appears.
        Given I am on the Telnyx page and confirm the cookies
        When I click on "Sign Up" button
        And I click on "Telnyxs Terms and Conditions" link button
        Then I should see title text
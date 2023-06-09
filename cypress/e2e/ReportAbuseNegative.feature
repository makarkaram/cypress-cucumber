Feature: Chech that "Privacy Policy" link navigate to "Privacy Policy" page from the Sign up page
    
    Scenario: Verify that after clicking on the "Privacy Policy" button from the Sign up page the "Privacy Policy" text appears.
        Given I am on the Telnyx page and confirm the cookies
        When I click on "Sign Up" button
        And I scroll down to "Telnyxs Terms & Conditions" link button
        And I click on "Privacy Policy" button
        Then I should see topic text
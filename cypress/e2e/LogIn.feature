Feature: Test Sign In form from Sign Up page with negative scenario where all fields are filled with incorrect credentials
    
    Scenario: Verify that "That email and password combinations is not valid ..." message appears and user is not signed in after submitting Log In form with invalid credentials from Contuct Us page 
        Given I am on the Telnyx page and confirm the cookies
        When I click on "Sign Up" button
        And I scroll down to "Log In" link button
        And I click on "Log In" link button
        And I fill the "Sign In" form with correct data
        And I click on "Log In" button
        Then I should see "That email and password combinations is not valid ..." message
Feature:Test the Sign up form with positive scenario, form opened via link from the "Global Numbers" page
    
    Scenario: Verify that "The last one step" message appears after submitting Sign up form with valid credentials, the Sign up form is triggered after clicking the "Search Numbers" button on the "Global Numbers" page.
        Given I am on the Telnyx page and confirm the cookies
        When I Select "Global Numbers" option in "Products" dropdown
        And I click on "Search numbers" button
        And I fill the "Sign Up" form with correct data
        And I click on "Submit" button
        Then I should see "one last step" message
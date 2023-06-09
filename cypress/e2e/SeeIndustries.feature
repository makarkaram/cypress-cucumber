Feature: Test "See use cases" and "See industries" buttons functionality on "Solutions" page
    
    Scenario: Verify "See industries" button scroll to "Healthcare" button and "See use cases" button scroll to "Account notifications" text and image on the "Solutions" page
        Given I am on the Telnyx page and confirm the cookies
        When I click on "Solutions" button
        And I click on "See industries" button
        Then I should see "Healthcare" button
        When I scroll up to "See use cases" button
        And I click on "See use cases" button
        Then I should see "Account notifications" text and image
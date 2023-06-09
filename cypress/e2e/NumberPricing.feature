Feature: Check "Number pricing" form changes depending on selected option in "Pay as you go" dropdown on "Numbers pricing" page					
    
    Scenario: Verify "Number pricing" text changes when switching "Pay as you go" dropdown on "Numbers pricing" page
        Given I am on the Telnyx page and confirm the cookies
        When I Select "Global Numbers" option in "Pricing" dropdown
        And I scroll down to "Pay as you go" dropdown
        And I select "Canada" option in "Pay as you go" dropdown
        Then I should see "Using an existing number" text
        When I select "Ukraine" option in "Pay as you go" dropdown
        Then I shouldn`t see "Using an existing number" text
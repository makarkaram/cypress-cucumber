Feature: Chech that "See pricing" button navigate to "Pricing" page from the "Global Numbers" page

    Scenario: Verify that after clicking on the "See pricing" button from the Global Numbers page the "Pay as you go" and "Volume-based pricing" windows appears.
        Given I am on the Telnyx page and confirm the cookies
        When I select "Global Numbers" option in "Products" dropdown
        And I scroll down to "See pricing" button
        And I click on "See pricing" button
        Then I should see visibility of the "Pay as you go" window
        And I should see visibility of the "Volume-based pricing" window
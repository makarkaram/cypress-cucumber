Feature: Chech that "Mission Control" link navigate to "Mission Control" page from the "Why Telnyx" dropdown
    
    Scenario: Verify that "Mission Control Portal" topic text visibility and "industry-leading platform" link-button clickability on "Mission Control" page
        Given I am on the Telnyx page and confirm the cookies
        When I select "Mission Control" option in "Why Telnyx" dropdown
        Then I should see visibility of the "Mission Control Portal" topic text
        When I scroll down to the "industry-leading platform" link-button
        Then I should see clickability of the "industry-leading platform" link-button
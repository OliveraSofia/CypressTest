Feature: Shopping on Tools QA 
I want to shop on Tools QA Shopping Website

Scenario: Placing Order for 2 Shirts

Given I Open the amazon Page and wait to load
When I search for the value toy
And I verify the cart and the locations state
And I select the first element od the search results
Then I add the element to the cart
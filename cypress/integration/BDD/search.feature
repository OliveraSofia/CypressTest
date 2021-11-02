Feature: Shopping on Amazon 
I want to shop on amazon Website

@test
Scenario: Add item to the cart
Given I Open the amazon Page and wait to load
When I search for the value toy
And I verify the cart and the locations are visible
And I go to the second page results
And I select the first element of the search results
Then I add the element to the cart
And Scroll down to complete load the page
Then Verify Item has been added to the cart

Scenario: Validate location
Given I Open the amazon Page and wait to load
When I search for the value toy
And I select the first element of the search results
Then I add the element to the cart
Then I expect matches delivery Location


Scenario: Add to cart the item if it is avilable if not go back
Given I Open the amazon Page and wait to load
When I search for the value toy
And I verify the cart and the locations are visible
And I select the first element of the search results
Then Add to cart the item if it is avilable if not go back

Scenario: Add to cart the item and compare delivery Location
Given I Open the amazon Page and wait to load
When I search for the value toy
And I verify the cart and the locations are visible
And I select the first element of the search results
Then I expect matches delivery Location
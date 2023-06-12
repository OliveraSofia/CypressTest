Feature: Shopping on Amazon 
I want to shop on amazon Website

@test
Scenario Outline: Add item to the cart
Given I Open the amazon Page and wait to load
When I search for the <value>
And I verify the cart and the locations are visible
And I go to the second page results
And Verify Result Label is displayed
And I select the last element of the search results
Then I add the element to the cart and verify

 Examples:
      | value  | 
      | dragon | 


Scenario Outline: Validate location
Given I Open the amazon Page and wait to load
When I search for the <value>
And I select the first element of the search results
Then I expect matches delivery Location
Then I add the element to the cart and verify


 Examples:
      | value  | 
      | cat    | 


Scenario Outline:  Add to cart the item if it is avilable if not go back
Given I Open the amazon Page and wait to load
When I search for the <value>
And I verify the cart and the locations are visible
And I select the first element of the search results
Then Add to cart the item if it is avilable if not go back

 Examples:
      | value  | 
      | dragon | 

Scenario Outline:  Add to cart the item and compare delivery Location
Given I Open the amazon Page and wait to load
When I search for the <value>
And I verify the cart and the locations are visible
And I select the first element of the search results
Then I expect matches delivery Location

 Examples:
      | value  | 
      | dragon | 
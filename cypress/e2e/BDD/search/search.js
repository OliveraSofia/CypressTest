

import { Given , And , Then , When} from "cypress-cucumber-preprocessor/steps";
import MAINPAGE from '../../pages/pageObject';
import LIST from '../../pages/pageObject';
import ITEM from '../../pages/pageObject'

var element = require('../../pages/pageObject')



//Test Steps
//paginacion
Given('I Open the amazon Page and wait to load', () => {
  cy.visit('www.amazon.com')
  

  When('I search for the {word}', (value) => {
    
    cy.searchItem(value)
    cy.get(element.ITEM.PAGE_LOGO).should('be.visible')

  })

  And('I verify the cart and the locations are visible', () =>{
    cy.get(element.MAINPAGE.CART_ITEM_NUMBERS).contains('0')
    cy.get(element.MAINPAGE.LOCATION).should('be.visible')
  })

  And('I go to the second page results', () =>{
    cy.get(element.LIST.LIST_RESULT_PAGE_TWO).click()
  })

  And('I select the first element of the search results', () =>{
    
    cy.xpath(element.LIST.LIST_SEARCH_ITEMS_XPATH)
    .first()
    .click()
  
  })


  And('I select the last element of the search results', () =>{
    cy.xpath(element.LIST.LIST_SEARCH_ITEMS_XPATH)
    .last()
    .click()
  
  })

  And('Scroll down to complete load the page', () =>{
    cy.scrollTo("bottom")
  })

  And('Verify Result Label is displayed', ()=>{
    cy.get('.s-no-outline > .a-size-medium-plus').should('be.visible')
  })

  Then('I add the element to the cart and verify',()=>{

    cy.get(element.ITEM.ADD_TO_CART_BUTTON).should('be.visible')
    .click()

 

    cy.get("body").then($body => {
      if ($body.find(element.ITEM.ADDED_TO_CART_MESSAGE_CROSS ).length > 0) {   
          cy.get(element.ITEM.ADDED_TO_CART_MESSAGE_CROSS ).click()
          cy.get(element.MAINPAGE.CART_ITEM_NUMBERS).contains('1')
      }
      else {
        cy.get(element.MAINPAGE.CART_ITEM_NUMBERS).contains('1')
              }
          
    })


    cy.scrollTo("bottom")
    cy.get(element.MAINPAGE.CART_ITEM_NUMBERS).should("not.be.a", "0")
  

  })

  Then('Add to cart the item if it is avilable if not go back', ()=>{

      cy.get("body").then($body => {
        if ($body.find(element.ITEM.ADD_TO_CART_BUTTON).length > 0) {   
            //evaluates as true
            cy.get(element.ITEM.ADD_TO_CART_BUTTON).click()
        } else {
          cy.go('back')
        }

      });
  })

  Then('I expect matches delivery Location', ()=>{

    cy.scrollTo("top")
    cy.compareText(element.MAINPAGE.LOCATION,element.ITEM.ITEM_DELIVERY_LOCATION)

  })


})



/*


//mismo tc para api y para ui (actions)
})



*/

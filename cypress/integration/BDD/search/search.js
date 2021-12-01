/// <reference types="Cypress" />

import { Given , And , Then , When} from "cypress-cucumber-preprocessor/steps";
import MAINPAGE from '../../pages/pageObject';
import LIST from '../../pages/pageObject';
import ITEM from '../../pages/pageObject'

var element = require('../../pages/pageObject')



//Test Steps
//paginacion
Given('I Open the amazon Page and wait to load', () => {
  cy.visit('www.amazon.com')
  //cy.wait(500)

  When('I search for the {value}', (value) => {
    
    cy.searchItem(value)
    cy.wait(500)
  })

  And('I verify the cart and the locations are visible', () =>{
    cy.get(element.MAINPAGE.CART_ITEM_NUMBERS).contains('0')
    cy.get(element.MAINPAGE.LOCATION).should('be.visible')
  })

  And('I select the first element of the search results', () =>{
    cy.xpath(element.LIST.LIST_SEARCH_ITEMS_XPATH)
    .first()
    .click()
  
  })


  And('I go to the second page results', () =>{
    cy.get(element.LIST.LIST_RESULT_PAGE_TWO).click()
  })


  And('I select the last element of the search results', () =>{
    cy.xpath(element.LIST.LIST_SEARCH_ITEMS_XPATH)
    .last()
    .click()
  
  })

  And('Scroll down to complete load the page', () =>{
    cy.scrollTo("bottom")
  })

  Then('I add the element to the cart',()=>{

    cy.get(element.ITEM.ADD_TO_CART_BUTTON).click()
    cy.wait(500)
    cy.get("body").then($body => {
      if ($body.find(element.ITEM.ADDED_TO_CART_MESSAGE_CROSS ).length > 0) {   
          cy.get(element.ITEM.ADDED_TO_CART_MESSAGE_CROSS ).click()
          cy.get(element.MAINPAGE.CART_ITEM_NUMBERS).contains('1')
      } else {
        cy.get(element.MAINPAGE.CART_ITEM_NUMBERS).contains('1')
      }

    })

  })

  Then('Verify Item has been added to the cart', ()=> {

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


    cy.get("body").then($body => {
      if ($body.find(element.ITEM.ADDED_TO_CART_MESSAGE_CROSS ).length > 0) {   
          cy.get(element.ITEM.ADdED_TO_CART_MESSAGE_CROSS ).click()
          cy.get(element.MAINPAGE.CART_ITEM_NUMBERS).contains('1')
      } else {
        cy.get(element.MAINPAGE.CART_ITEM_NUMBERS).contains('1')
      }

    })

    Cypress.Commands.add('compareText', (obj1 , obj2) => {
      const normalizeText = (inputString) => inputString.replace(/\s/g, '').toLowerCase()
         cy.get(obj1)
           .then(($first) => {
             firstText = normalizeText($first.text())
           })
     
           cy.get(obj2)
           .then(($second) => {
              secondText = normalizeText($second.text())
              expect(secondText, 'Item Delyvery').to.equal(firstText)
           })
           
    });
    cy.compareText(element.MAINPAGE.LOCATION,ITEM.ITEM_DELIVERY_LOCATION)

  })


})



/*


//mismo tc para api y para ui (actions)
})



*/

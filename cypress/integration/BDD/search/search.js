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
  cy.wait(500)

  When('I search for the value toy', () => {
    
    Cypress.Commands.add('searchItem', (value) => {
      cy.get('#twotabsearchtextbox').type(value)
      cy.wait(500)
      cy.get('#twotabsearchtextbox').click()
      cy.get('#nav-search-submit-button').click()
      
    });
    cy.searchItem('toy')
    cy.wait(500)
  })

  And('I verify the cart and the locations state', () =>{
    cy.get(element.MAINPAGE.CART_ITEM_NUMBERS).contains('0')
    cy.get(element.MAINPAGE.LOCATION).should('be.visible')
  })

  And('I select the first element od the search results', () =>{
    cy.get(element.LIST.LIST_RESULT_PAGE_TWO).click()
    //cy.get(LIST.LIST_RESULT_ITEM_SEVENTEEN).click()
    cy.xpath('//*[@class="a-size-medium a-color-base a-text-normal"]')
    .first()
    .click()
    
  })

  Then('I add the element to the cart',()=>{

    cy.get(element.ITEM.ADD_TO_CART_BUTTON).click()
    cy.get("body").then($body => {
      if ($body.find(element.ITEM.ADDED_TO_CART_MESSAGE_CROSS ).length > 0) {   
          //evaluates as true
          cy.get(element.ITEM.AADDED_TO_CART_MESSAGE_CROSS ).click()
          cy.get(element.MAINPAGE.CART_ITEM_NUMBERS).contains('1')
      } else {
        cy.get(element.MAINPAGE.CART_ITEM_NUMBERS).contains('1')
      }

    })

  })
})



/*

 

 
    
    
  })

  it('US2 Select last items by xpath', () =>{
    cy.searchItem('dragon')
    cy.xpath(element.LIST.LIST_SEARCH_ITEMS_XPATH)
      .last()
      .click()

  })

  it('US3: expect matches delivery Location', () => {
    
    cy.searchItem('doll')
    cy.xpath(element.LIST.LIST_SEARCH_ITEMS_XPATH)
     .first()
     .click()

     //make it ut, github actions
    cy.compareText(element.MAINPAGE.LOCATION,ITEM.ITEM_DELIVERY_LOCATION)
    

    })

    //run unit test validate code

    it('US4: Add to cart item if it is avilable if not go back', () => {
      cy.searchItem('dragon')
      cy.xpath(element.LIST.LIST_SEARCH_ITEMS_XPATH)
       .last()
       .click()

      cy.get("body").then($body => {
        if ($body.find(element.ITEM.ADD_TO_CART_BUTTON).length > 0) {   
            //evaluates as true
            cy.get(element.ITEM.ADD_TO_CART_BUTTON).click()
        } else {
          cy.go('back')
        }

      });

    })


//pom o paradigma
// exp foward

//mismo tc para api y para ui (actions)
})



*/

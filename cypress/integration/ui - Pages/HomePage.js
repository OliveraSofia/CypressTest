

//Elements
const SEARCH ={
    MAIN_SEARCH_BAR  : '#twotabsearchtextbox',
    MAIN_SEARCH_BUTTON : '#nav-search-submit-button',
    SEARCH_PAGE_NUMBER : '.a-selected'

};

const LIST = {

  LIST_RESULT_PAGE_TWO : '[href$=sr_pg_2]',
  LIST_RESULT_ITEM_TWO : '[data-image-index=3]', 
  LIST_RESULT_ITEM_FIVE : '[data-image-index=5]',
  LIST_RESULT_ITEM_SEVENTEEN : '[data-image-index=17]',
  //npm install --save-dev cypress@8.3.1
};

const ITEM = {

    ADD_TO_CART_BUTTON  : '#add-to-cart-button',
    ADDED_TO_CART_MESSAGE_CROSS : '#attach-close_sideSheet-link',
    ITEM_DELIVERY_LOCATION : '#contextualIngressPtLabel_deliveryShortLine > :nth-child(2)'
    

};

const MAINPAGE = {

  
  LOCATION : '#glow-ingress-line2',
  CART_ITEM_NUMBERS : '#nav-cart-count'
};


describe('Load Page', () => {
    beforeEach(() => {

        cy.visit('/')
        cy.wait(500)

   })

   it('US1 :Check cart items', () => {

    cy.get(MAINPAGE.CART_ITEM_NUMBERS).contains('0')
    cy.get(SEARCH.MAIN_SEARCH_BAR).type('dragon')
    cy.wait(500)
    cy.get(SEARCH.MAIN_SEARCH_BAR).click()
    cy.get(SEARCH.MAIN_SEARCH_BUTTON).click()
    cy.get(MAINPAGE.LOCATION).should('be.visible')
    cy.get(LIST.LIST_RESULT_PAGE_TWO).click()
    cy.get(LIST.LIST_RESULT_ITEM_SEVENTEEN).click()
    cy.get(ITEM.ADD_TO_CART_BUTTON).click()
    cy.get(ITEM.ADDED_TO_CART_MESSAGE_CROSS).click()
    cy.get(MAINPAGE.CART_ITEM_NUMBERS).contains('1')
    
  })

  it(' US2: expect matches delivery Location', () => {

    cy.get(SEARCH.MAIN_SEARCH_BAR).type('doll')
    cy.wait(500)
    cy.get(SEARCH.MAIN_SEARCH_BAR).click()
    cy.get(SEARCH.MAIN_SEARCH_BUTTON).click()
    cy.get(LIST.LIST_RESULT_ITEM_TWO).click()

    const normalizeText = (inputString) => inputString.replace(/\s/g, '').toLowerCase()

    let firstText
    let secondText

    cy.get(MAINPAGE.LOCATION)
      .then(($first) => {
        firstText = normalizeText($first.text())
      })

      cy.get(ITEM.ITEM_DELIVERY_LOCATION)
      .then(($second) => {
         secondText = normalizeText($second.text())
         expect(secondText, 'Item Delyvery').to.equal(firstText)
      })

    })


    it('US3: Add to cart item if it is avilable if not go back', () => {
      cy.get(SEARCH.MAIN_SEARCH_BAR).type('dragon')
      cy.wait(500)
      cy.get(SEARCH.MAIN_SEARCH_BAR).click()
      cy.get(SEARCH.MAIN_SEARCH_BUTTON).click()
      cy.get(LIST.LIST_RESULT_ITEM_TWO).click()

      cy.get("body").then($body => {
        if ($body.find('#add-to-cart-button').length > 0) {   
            //evaluates as true
            cy.get('#add-to-cart-button').click()
        } else {
          cy.go('back')
        }

      });

    })


      
    


})

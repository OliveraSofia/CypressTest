
// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

//New command for repetitive steps.




Cypress.Commands.add('searchItem', (value) => {
    cy.get('#twotabsearchtextbox').type(value)
    cy.wait(500)
    cy.get('#twotabsearchtextbox').click()
    cy.get('#nav-search-submit-button').click()
    
});

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

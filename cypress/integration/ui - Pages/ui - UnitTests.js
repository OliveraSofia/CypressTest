



describe('Test Methods', () => {
    
    it('01 :Verify searchItem', () => {
    
        cy.visit('/')
        cy.wait(500)
        cy.searchItem('book.')
        cy.get('#twotabsearchtextbox').clear()
        cy.searchItem(' ')
        cy.get('#twotabsearchtextbox').clear()
        cy.searchItem('6!@#$%^&*() ')
        
        
    })

    it('02 :Verify normalizeText', () => {
    
       
        
        
    })

})
        



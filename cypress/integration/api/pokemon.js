

            
describe('Products api', () => {
    context('GET /products', () => {
      it('Pokemon verify response', () => {
            cy.request({
                method: 'GET',
                url: 'https://pokeapi.co/api/v2/pokemon/ditto'
            })
                .should((response) => {
                    cy.log(JSON.stringify(response.body))
                });
        });

        it('Pokemon verify Status',() => {
            cy.request({
                method: 'GET',
                url: 'https://pokeapi.co/api/v2/pokemon/ditto'
            })
             .should((response) => {
                expect(response.status).to.eq(200)
             })
        })
    });
});
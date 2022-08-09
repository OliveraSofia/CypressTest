

            
describe('Products api', () => {
    context('GET /products', () => {
        it('Pokemon verify Status',() => {
            cy.request({
                method: 'GET',
                url: 'https://pokeapi.co/api/v2/pokemon/ditto'
            })
             .should((response) => {
                expect(response.status).to.eq(200)
             })
        })

        it('Pokemon Verify response data', () => {
            cy.request({
                method : 'GET',
                url: 'https://pokeapi.co/api/v2/pokemon/ditto'
            }) 
            .should((response) => {
                expect(response.status).to.eq(200)
                expect(response.body.abilities[0]).to.have.all.keys(
                    'ability', 'is_hidden', 'slot')
                expect(response.body.abilities[0].ability).to.have.all.keys(
                        'name', 'url')
             })

        })
    });
});
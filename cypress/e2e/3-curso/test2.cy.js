describe('My Second my Test', function(){
    it('Does not do much!', function(){
        cy.visit('/')
        cy.get('.search-keyword').type('ca{enter}')
        cy.wait(2000)

        //Parent child chaining
        cy.get('.products').as('productLocator')
      
        cy.get('@productLocator').find('.product').each(($el, index, $list) =>{

            const textVeg = $el.find('h4.product-name').text()
            if(textVeg.includes('Cashews')){
                cy.wrap($el).find('button').click()
            }
        })

        // assert if logo text is correctly displayed
        cy.get('.brand').should('have.text', 'GREENKART')

        cy.get('.cart-icon > img').click()
    })

    
})
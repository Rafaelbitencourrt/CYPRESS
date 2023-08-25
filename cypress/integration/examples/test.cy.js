describe('My first Test', function(){
    it('Does not do much!', function(){
        cy.visit('/')
        cy.get('.search-keyword').type('ca{enter}')
        cy.wait(2000)
        //selenium get hit url in browser, cypress get acts like findElements of selenium
        cy.get('.product:visible').should('have.length',4)
        //Parent child chaining
        cy.get('.products').find('.product').eq(2).contains('ADD TO CART').click()

        cy.get('.products').find('.product').each(($el, index, $list) =>{

            const textVeg = $el.find('h4.product-name').text()
            if(textVeg.includes('Cashews')){
                cy.wrap($el).find('button').click()
            }
        })
    })
})
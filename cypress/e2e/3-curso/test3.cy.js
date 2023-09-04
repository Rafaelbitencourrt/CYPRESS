/// <reference types="Cypress" />


describe('Checkbox', function(){
    it('Test Ckeckbox', function(){
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

        cy.get('#checkBoxOption1').check().should('be.checked').and('have.value','option1')
        cy.get('#checkBoxOption1').uncheck().should('not.be.checked')
        cy.get('input[type="checkbox"]').check(['option2','option3'])

        ///Dropdown estatico

        cy.get('select').select('option2').should('have.value','option2')

        ///Dropdown dinamico

        cy.get('#autocomplete').type('ind')

        cy.get('.ui-menu div').each(($el, index, $list) =>{

           if($el.text()==='India')
           {
            cy.wrap($el).click()
           }
        })
        cy.get('#autocomplete').should('have.value','India')

        ///verificando se um elemento esta visisel

        cy.get('#displayed-text').should('be.visible')
        cy.get('#hide-textbox').click()
        cy.get('#displayed-text').should('be.not.visible')
        cy.get('#show-textbox').click()
        cy.get('#displayed-text').should('be.visible')

        ///radio buttons
        cy.get('[value="radio2"]').check().should('be.checked')

        ////pop-up

        

    })

    
})
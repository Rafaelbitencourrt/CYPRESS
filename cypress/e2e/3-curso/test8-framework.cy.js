/// <reference types="Cypress" />


describe('Alerts', function(){


    before(function(){
        cy.fixture('example').then(function(data){
            this.data=data
        })
        //runs once before all tests in the block
    })

    it('Test Ckeckbox', function(){
        cy.visit('https://rahulshettyacademy.com/angularpractice/')

        cy.get('input[name="name"]:nth-child(2)').type(this.data.name)
        //cy.get('#exampleFormControlSelect1').select('Female')
        cy.get('select').select(this.data.sexo)
        cy.get(':nth-child(4) > .ng-untouched').should('have.value', this.data.name)
        cy.get('input[name="name"]:nth-child(2)').should('have.attr','minlength','2')
        cy.get('#inlineRadio3').should('be.disabled')
    })

    
})
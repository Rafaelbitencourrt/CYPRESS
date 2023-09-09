/// <reference types="Cypress" />


describe('Alerts', function(){


    before(function(){
        //runs once before all tests in the block
    })

    it('Test Ckeckbox', function(){
        cy.visit('https://rahulshettyacademy.com/angularpractice/')

        cy.get('input[name="name"]:nth-child(2)').type('Bob')
        cy.get('#exampleFormControlSelect1').select('Female')
        cy.get('select').select('Female')

    })

    
})
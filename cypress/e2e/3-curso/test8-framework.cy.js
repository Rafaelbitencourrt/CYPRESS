/// <reference types="Cypress" />

import homePage from "../../pages/curso-cypress/homePage"


describe('Alerts', function(){


    before(function(){
        cy.fixture('example').then(function(data){
            this.data=data
        })
        //runs once before all tests in the block
    })

    it('Test Ckeckbox', function(){
        cy.visit('https://rahulshettyacademy.com/angularpractice/')

        homePage.typeUsername(this.data.name)
        homePage.selectGender(this.data.sexo)
        homePage.elements.dataBinding().should('have.value', this.data.name)
        //Verificando o numero minimo de caracteres em um campo
        cy.get('input[name="name"]:nth-child(2)').should('have.attr','minlength','2')
        homePage.elements.statusEmployment().should('be.disabled')
        homePage.elements.menuShop().click()
        cy.selectProduct('Blackberry')
    })

    
})
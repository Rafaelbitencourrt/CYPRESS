/// <reference types="Cypress" />

import homePage from "../../pages/curso-cypress/homePage"
import productPage from "../../pages/curso-cypress/productPage"


describe('Alerts', function(){


    before(function(){
        cy.fixture('example').then(function(data){
            this.data=data
        })
        //runs once before all tests in the block
    })

    it('Test Ckeckbox', function(){
        Cypress.config('defaultCommandTimeout', 8000)
        cy.visit('https://rahulshettyacademy.com/angularpractice/')

        homePage.typeUsername(this.data.name)
        homePage.selectGender(this.data.sexo)
        homePage.elements.dataBinding().should('have.value', this.data.name)
        //Verificando o numero minimo de caracteres em um campo
        cy.get('input[name="name"]:nth-child(2)').should('have.attr','minlength','2')
        homePage.elements.statusEmployment().should('be.disabled')
        homePage.elements.menuShop().click()

        this.data.productName.forEach(function(element){
            cy.selectProduct(element)
        })

        productPage.clickCheckOutButton()
        cy.get('tr td:nth-child(4) strong').each(($el, index, $list) =>{
            cy.log($el.text())
        })
        cy.get(':nth-child(4) > :nth-child(5) > .btn').click()
        cy.get('#country').type('India')
        cy.get('.suggestions > ul > li > a').click()
        cy.get('#checkbox2').check({force:true})
        cy.get('.ng-untouched > .btn').click()
        cy.get('.alert').then(function(element){
            const actualText = element.text();
            expect(actualText.includes('Succes')).to.be.true
        })
    })

    
})
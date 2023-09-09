/// <reference types="Cypress" />
/// <reference types="cypress-iframe" />
import 'cypress-iframe'


describe('test frame', function(){
    it('Test frame', function(){

        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.viewport(1900, 1400)
        cy.frameLoaded('#courses-iframe')
        cy.iframe().find("a[href*='mentorship']").eq(0).click()
        cy.iframe().find("h1[class*='pricing-title']").should('have.length',2)
       
    })

    
})
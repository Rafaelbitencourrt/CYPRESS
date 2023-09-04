/// <reference types="Cypress" />


describe('Alerts', function(){
    it('Test Ckeckbox', function(){
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

        ////pop-up
        cy.get('#alertbtn').click()
        cy.get('[value="Confirm"]').click()
        
        //window:alert
        cy.on('window:alert',(str)=>
        {
            //MOCHA
            expect(str).to.equal('Hello , share this practice page and share your knowledge')
        })

    })

    
})
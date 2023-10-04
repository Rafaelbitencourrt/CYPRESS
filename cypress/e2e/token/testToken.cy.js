/// <reference types="cypress" />



describe('JWT Session', () =>{
    it('Is logged in trought local storage', ()=>{

        cy.loginAPI().then(function(){

            cy.visit('https://rahulshettyacademy.com/client/',{
                onBeforeLoad:function(window)
                {
                    window.localStorage.setItem('token',Cypress.env('token'))
                }
            })


        })


    })
})
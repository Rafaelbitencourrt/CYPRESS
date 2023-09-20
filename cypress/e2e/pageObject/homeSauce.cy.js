import homeSaucePage from '../../pages/saucedemo/homeSaucePage'
import inventoryPage from '../../pages/saucedemo/inventoryPage'

describe('Page Object Model Implementation', () =>{
    beforeEach(() =>{
        cy.visit('https://www.saucedemo.com/v1/')
    });

    it('Should login to inventory page', () =>{
        homeSaucePage.typeUsername('standard_user');
        homeSaucePage.typePassword('secret_sauce');
        homeSaucePage.clickLogin();

        inventoryPage.elements.titleSpan().should('have.text', 'Products');
    })

    it('Should display locked out message', () =>{
        homeSaucePage.typeUsername('locked_out_user');
        homeSaucePage.typePassword('secret_sauce');
        homeSaucePage.clickLogin();

        homeSaucePage.elements.errorMessage().should('have.text','Epic sadface: Sorry, this user has been locked out.')
    })

    it('Should display incorrect username message', () =>{
        homeSaucePage.typeUsername('rafael');
        homeSaucePage.typePassword('secret_sauce');
        homeSaucePage.clickLogin();

        homeSaucePage.elements.errorMessage().should('have.text','Epic sadface: Username and password do not match any user in this service')
    })

    it('Should display incorrect password message', () =>{
        homeSaucePage.typeUsername('standard_user');
        homeSaucePage.typePassword('123');
        homeSaucePage.clickLogin();

        homeSaucePage.elements.errorMessage().should('have.text','Epic sadface: Username and password do not match any user in this service')
    })

})


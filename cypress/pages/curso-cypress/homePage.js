class homePage{

    elements = {
    
        usernameInput: () => cy.get('input[name="name"]:nth-child(2)'),
        genderSelect: () => cy.get('#exampleFormControlSelect1'),
        dataBinding: () => cy.get(':nth-child(4) > .ng-untouched'),
        statusEmployment: () => cy.get('#inlineRadio3'),
        menuShop: () => cy.get(':nth-child(2) > .nav-link'),
        errorMessage: () => cy.get('[data-test="error"]')
    }
    
    typeUsername(username){
        this.elements.usernameInput().type(username)
    }
    selectGender(gender){
        this.elements.genderSelect().select(gender)
    }
    
    typePassword(password){
        this.elements.passwordInput().type(password)
    }
    
    clickLogin(){
        this.elements.loginBtn().click()
    }
    
    }
    
    export default new homePage();
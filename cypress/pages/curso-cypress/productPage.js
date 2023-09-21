class productPage
{
    elements = {
    
        btnCheckout: () => cy.get('#navbarResponsive > .navbar-nav > .nav-item > .nav-link')
    }

clickCheckOutButton()
{
    this.elements.btnCheckout().click()
}

}


export default new productPage();

Cypress.Commands.add('loginAPI',()=>
{
    cy.request('POST', 'https://rahulshettyacademy.com/api/ecom/auth/login',
    {"userEmail":"rahulshetty@gmail.coom","userPassWord":"Iamking@00"}).then(function(response){
        expect(response.status).to.eq(200)
        Cypress.env('token', response.body.token)
    })
})
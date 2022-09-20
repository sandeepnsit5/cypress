///<refrence types = "cypress" />


it('LOGIN TEST', function(){

    cy.visit('https://dev-artists.alive.house/')
    cy.get('button').click()
    cy.get('#identifier').type('jodefom470@logodez.com')
    cy.get('#password').type('Abcd1234')
    cy.get('.justify-end > .border').click()
})
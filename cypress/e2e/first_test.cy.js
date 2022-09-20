/// <refrence types = "cypress" />


it('google test', function() {
    cy.visit("https://google.com")
    cy.get('.gLFyf').type('Lion Day{enter}')

    cy.get(':nth-child(3) > .g > .GLI8Bc > .jGGQ5e > .yuRUbf > a > .LC20lb').click()
})

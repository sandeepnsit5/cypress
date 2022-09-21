///<refrence types = "cypress" />


it('LOGIN TEST', function(){
    cy.visit('https://dev-artists.alive.house/',{
        auth: {
          username: 'alive-team',
          password: 'webgl',
        },
      }) 


    //TO LOG IN
    cy.get('button').click()
    cy.get('#identifier').type('jodefom470@logodez.com')
    cy.get('#password').type('Abcd1234')
    cy.get('.justify-end > .border').click({ force: true });

    cy.url().should('include', 'profile-detail')
    cy.contains('Save').click()
    cy.url().should('include', 'upload-song')

    cy.contains('next').click()
    cy.contains('single').click()
    cy.url().should('include', 'uploaded-song')
    cy.get('.mb-12 > .w-full').click()
    //cy.wait(3000)//
    //cy.scrollTo(500,800)
    })
    
   


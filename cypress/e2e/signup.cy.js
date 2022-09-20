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
    cy.get('.justify-end > .border').click()

    cy.get(':nth-child(2) > .pb-8 > .relative > .min-w-0 > .font-regular > a').click()
    //cy.wait(3000)
    //cy.scrollTo(500,800)

    //cy.get('.w-\[812px\] > .border').click({force:true})
    })
    
   


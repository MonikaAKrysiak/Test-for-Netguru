Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
  })


//Run the proper website
describe('Run the website', () => {
    it('Should load correct URL', () => {
        cy.visit('https://trello.com/')
        cy.url()
            .should('include', 'trello.com')
    })
})

//Click on the Zaloguj button.
describe('Zaloguj form', () => {
    it('should click on the Zaloguj button', () => {
        cy.get('a')
            .contains('Log in')
            .click()
    })
})

//Set proper e-mail address and improper password
describe('only proper e-mail address', () => {
    it('should add proper e-mail address', () => {
        cy.get('#user')
            .type('mkrysiak@womenintechnology.pl')
    })
    it('should add improper password', () => {
        cy.get('#user')
            .type('test1234')
    })
    it('should click on Zaloguj button', () => {
        cy.get('#login')
            .click()
    })  
    it('should wait 5 sec', () => {
        cy.wait(5000)
    })    
})

//Set improper e-mail address and improper password
describe('improper password', () => {
    it('should add improper e-mail address', () => {
        cy.get('#user')
            .clear()
        cy.get('#user')
            .type('test@test.pl')
    })
    it('should add improper password', () => {
        cy.get('#user')
            .type('test1234')
    })
    it('should click on Zaloguj button', () => {
        cy.get('#login')
            .click()
    })
    it('should wait 5 sec', () => {
        cy.wait(5000)
    })
})

//Set improper format of e-mail address and improper password
describe('improper format e-mail', () => {
    it('should add improper e-mail address format', () => {
        cy.get('#user')
            .clear()
        cy.get('#user')
            .type('1234')
    })
    it('should click on Zaloguj button', () => {
        cy.get('#login')
            .click()
    })
    it('should wait 5 sec', () => {
        cy.wait(5000)
    }) 
})


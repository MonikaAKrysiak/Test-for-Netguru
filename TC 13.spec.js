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

//Click on the Nie możesz sie zalogować button
describe('cannot form', () => {
    it('should click on the cannot button', () => {
        cy.get('a')
            .contains('Nie możesz się zalogować?')
            .click()
    })
})

//Set fake e-mail address and click on the wyślij łącze odzyskiwania button
describe('cannot form', () => {
    it('sould set fake e-mail address', () => {
        cy.get('#email')
            .clear()
        cy.get('#email')
            .type('monika.monika@monika.com.pl')
    })
    it('should click on the wyślij łącze odzyskiwania button', () => {
        cy.get('#submit')
            .click()
    })
})

//Don't set an e-mail address and click on the wyślij łącze odzyskiwania button
describe('cannot form', () => {
    it('sould set fake e-mail address', () => {
        cy.get('#email')
            .clear()
    })
    it('should click on the wyślij łącze odzyskiwania button', () => {
        cy.get('#submit')
            .click()
    })
})
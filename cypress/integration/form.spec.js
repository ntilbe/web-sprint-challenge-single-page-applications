describe('Add text to name', () => {
    it('can navigate to the site;', () => {
        cy.visit('http://localhost:3000/pizza')
    })
    it('input name', () => {
        cy.get('input[name="name"]')
        .type('Bob Ross')
        .should('have.value', 'Bob Ross')
    })

})

describe('Select Toppings', () => {
    it('mark pepperoni box', () => {
        cy.get('input[name="pepperoni"]')
      .check().should('be.checked')
    })
    it('mark pineapple box', () => {
        cy.get('input[name="pineapple"]')
      .check().should('be.checked')
    })

})

describe('Submit Form', () => {
    it('submit form', () => {
        cy.get('.submit-btn').click()
    cy.get('input[name="name"]')
        .should('have.value', '')
    

})
})
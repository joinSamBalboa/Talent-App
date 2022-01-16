describe('Filter by location', () => {
  it('Displays talent from specific location', () => {
    cy.visit('http://localhost:3000/')

    cy.get('[data-testid="search"]')
      .type('Springfield')

    cy.contains('Homer Simpson')
  })
})
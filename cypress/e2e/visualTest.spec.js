describe('visual testing suite', () => {
  it('visual test of Basic form with cypress-plugin-snapshots', () => {
    cy.visit('/')
    cy.contains('Forms').click()
    cy.contains('Form Layouts').click()

    cy.contains('nb-card', 'Basic form').then(basicForm => {
      cy.wrap(basicForm).toMatchImageSnapshot()
      cy.document().toMatchImageSnapshot()
    })
  })

  it.only('visual test of Basic form with Percy', () => {
    cy.visit('/')
    cy.contains('Forms').click()
    cy.contains('Form Layouts').click()

    cy.contains('nb-card', 'Basic form').then(basicForm => {
      cy.wait(1000)
      cy.wrap(basicForm)
      cy.percySnapshot('form-layouts');
    })

  });
})

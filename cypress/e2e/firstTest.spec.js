/// <reference types="cypress" />

describe('My first suite', () => {

  it('Understand the differences of ', () => {
    cy.visit('/');
    cy.contains('Forms').click();
    cy.contains('Form Layouts').click();

    // Cypress works asynchronous and if you want to save something like variable you should use to.then
    // When we call .then the jQuery obj is returned in callback function as a parameter
    cy.contains('nb-card', 'Basic form').then(basicForm => {

      const emailText = basicForm.find('[for="exampleInputEmail1"]').text();
      expect(emailText).to.equal('Email address');

      const passwordText = basicForm.find('[for="exampleInputPassword1"]').text();
      expect(passwordText).to.equal('Pass');
    })

    // And to test something inside .then we should use assertions from Mocha like expect() or should()
    // And if you want to use Cypress context inside .then you should .wrap returned jQuery obj
    // And if you want you can use many .then as you wish inside the first .tnen
    // All variables or constants declared in the first .then will be available in all inside siblings .then
    cy.contains('nb-card', 'Using the Grid').then(gridForm => {

      let emailText = gridForm.find('[for="inputEmail1"]').text();
      expect(emailText).to.equal('Email');

      cy.wrap(gridForm).find('[for="inputPassword2"]').should('have.text', 'Password');
    })
  })
});

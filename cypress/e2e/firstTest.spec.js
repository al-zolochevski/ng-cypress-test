/// <reference types="cypress" />

describe('My first suite', () => {

  it('Understand the concept of .then cy.wrap', () => {
    cy.visit('/');
    cy.contains('Forms').click();
    cy.contains('Form Layouts').click();

    // Cypress works asynchronous and if you want to save something like variable or const you should use .then
    // When we call .then the jQuery obj is returned in callback function as a parameter
    cy.contains('nb-card', 'Basic form').then(basicForm => {

      const emailText = basicForm.find('[for="exampleInputEmail1"]').text();
      expect(emailText).to.equal('Email address');

      const passwordText = basicForm.find('[for="exampleInputPassword1"]').text();
      expect(passwordText).to.equal('Pass');
    })

    // And to test something inside .then we should use assertions from Mocha like expect() or should()
    // And if you want to use Cypress context inside .then you should .wrap returned jQuery obj
    // And if you want you can use many .then as you wish inside the first .then
    // All variables or constants declared in the first .then will be available in all inside siblings .then
    cy.contains('nb-card', 'Using the Grid').then(gridForm => {

      let emailText = gridForm.find('[for="inputEmail1"]').text();
      expect(emailText).to.equal('Email');

      cy.wrap(gridForm).find('[for="inputPassword2"]').should('have.text', 'Password');
    })
  })

  it.only('Understand the concept of .invoke', function () {
    cy.visit('/');
    cy.contains('Forms').click();
    cy.contains('Form Layouts').click();

    // 1. Assertion with Cypress style for Basic Form - email label text
    cy.get('[for="exampleInputEmail1"]').should('have.text', 'Email address');

    // 2. Assertion with .then style for Basic Form - email label text
    // And we get element and saved it as an jQuery object in label
    // And save the label text value in const using jQuery text() method
    // And write assertion using expect() from Mocha
    cy.get('[for="exampleInputEmail1"]').then(label => {
      const emailLabelText = label.text();
      expect(emailLabelText).equal('Email address');
    })

    // 3. Assertion with .invoke + .then command for Basic Form - email label text
    // 2 & 3 examples pretty similar but here we get label text using .invoke before .then
    //

    cy.get('[for="exampleInputEmail1"]').invoke('text').then(labelText => {
      expect(labelText).equal('Email address');
    })
  });
});

export class FormLayoutsPage {

  submitInlineFormWithNameAndEmail(name, email) {
    cy.contains('nb-card', 'Inline form').then(inlineForm => {
      cy.wrap(inlineForm).find('form [placeholder="Jane Doe"]').type(name)
      cy.wrap(inlineForm).find('form [placeholder="Email"]').type(email)
      cy.wrap(inlineForm).contains('label', 'Remember me').click()
      cy.wrap(inlineForm).contains('button', 'Submit').click()
    })
  };

  submitBasicFormWithNameAndEmail(email, password) {
    cy.contains('nb-card', 'Basic form').then(basicForm => {
      cy.wrap(basicForm).find('form [placeholder="Email"]').type(email)
      cy.wrap(basicForm).find('form [placeholder="Password"]').type(password)
      cy.wrap(basicForm).contains('label', 'Check me out').click()
      cy.wrap(basicForm).contains('button', 'Submit').click()
    })
  };
}

export const onFormLayouts = new FormLayoutsPage()

import dialogs from "../../fixtures/dialogs.json";

export class DialogPage {

  //Dialog: Open Dialog
  checkTheShowingDialog(dialogGroupTitle, dialogTypeBtnText) {
    cy.contains(dialogGroupTitle).parent().contains(dialogTypeBtnText).click()
    cy.get('nb-dialog-container').should('exist')
  }

  checkTheDialogContent(dialogHeaderText, dialogBodyText) {
    cy.get('nb-card-header').contains(dialogHeaderText).parent()
      .should('contain.text', dialogBodyText)
  }

  checkTheDialogFormContent(dialogHeaderText) {
    cy.get('nb-card-header').contains(dialogHeaderText)
    cy.get('input').invoke('attr', 'placeholder').should('contain', 'Name')
  }

  checkClosingWithBackdropClick(dialogGroupTitle, dialogTypeBtnText) {
    cy.contains(dialogGroupTitle).parent().contains(dialogTypeBtnText).click()
    cy.get('body').click(2, 2)
    cy.get('nb-dialog-container').should('not.exist')
  }

  checkClosingWithDisabledBackdropClick(dialogGroupTitle, dialogTypeBtnText) {
    cy.contains(dialogGroupTitle).parent().contains(dialogTypeBtnText).click()
    cy.get('body').click(2, 2)
    cy.get('nb-dialog-container').should('exist')
  }

  checkClosingWithEscKeypress(dialogGroupTitle, dialogTypeBtnText) {
    cy.contains(dialogGroupTitle).parent().contains(dialogTypeBtnText).click()
    cy.get('body').type('{esc}')
    cy.get('nb-dialog-container').should('not.exist')
  }

  checkClosingWithDisabledEscKeypress(dialogGroupTitle, dialogTypeBtnText) {
    cy.contains(dialogGroupTitle).parent().contains(dialogTypeBtnText).click()
    cy.get('body').type('{esc}')
    cy.get('nb-dialog-container').should('exist')
  }

  fillDialogForm(name) {
    cy.contains('Return Result From Dialog').parent().contains('Enter Name').click({force: true})
    cy.get('input[placeholder="Name"]').type(name)
    cy.get('button').contains('Submit').click()
    cy.contains('Return Result From Dialog').parent().contains(name)
  }

  checkOverlayDialog(dialogGroupTitle, dialogTypeBtnText) {
    cy.contains(dialogGroupTitle).parent().contains(dialogTypeBtnText).click()
    cy.get('div').should('contain.class', 'overlay-backdrop')
  }

  checkDialogOverlayIsPresent() {
    cy.get('div').should('contain.class', 'overlay-backdrop')
  }

  checkDialogOverlayIsNotPresent() {
    cy.get('div').should('not.contain.class', 'overlay-backdrop')
  }

  closeDialog(closeBtnText) {
    cy.contains(closeBtnText).click()
  }
}

export const onDialogPage = new DialogPage()

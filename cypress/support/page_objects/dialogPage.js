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
    cy.get('input').should('contain.html','placeholder="Name"')
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

  //Open Without Esc Close
}

export const onDialogPage = new DialogPage()

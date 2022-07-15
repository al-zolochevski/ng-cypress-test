export class DialogPage {

  //Dialog: Open Dialog
  checkTheShowingDialog(dialogTypeBtn, dialogHeaderText, dialogBodyText) {
    cy.contains('Open Dialog').parent().contains(dialogTypeBtn).click()
    cy.get('div').should('contain.class', 'overlay-backdrop')
    cy.get('nb-card-header').contains(dialogHeaderText).parent()
      .should('contain.text', dialogBodyText)
  }

  checkDismissingOutsideDialog() {
    cy.get('body').click(0, 0);
  }

  checkClosingOutsideDialog() {
    cy.get('body').click(0, 0);
  }

  dismissTheDialog() {
    cy.contains('Dismiss Dialog').click()
  }

  closeTheDialog() {
    cy.contains('Close Dialog').click()
  }

  //Open Without Esc Close

  //Open Without Backdrop Click

  //Return Result From Dialog
}

export const onDialogPage = new DialogPage()

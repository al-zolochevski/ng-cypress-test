import "../support/page_objects/navigationPage"
import {navigateTo} from "../support/page_objects/navigationPage";
import {onDialogPage} from "../support/page_objects/dialogPage";
import dialogs from "../fixtures/dialogs.json"

describe('Testing of dialog types', () => {
  before('Open Dialog page', () => {
    cy.openHomePage()
    navigateTo.dialogPage()
  })

  it('Test of Open Dialog with Component', () => {
    onDialogPage.checkTheShowingDialog('Open Dialog with component',
      dialogs.dialogComponentHead, dialogs.dialogComponentBody)
    onDialogPage.dismissTheDialog()
  });

  it.only('Test of Open Dialog with Template', () => {
    onDialogPage.checkTheShowingDialog('Open Dialog with template',
      dialogs.dialogTemplateHead, dialogs.dialogTemplateBody)
    onDialogPage.checkClosingOutsideDialog()
  });
})

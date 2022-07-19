import "../support/page_objects/navigationPage"
import {navigateTo} from "../support/page_objects/navigationPage";
import {onDialogPage} from "../support/page_objects/dialogPage";
import dialogs from "../fixtures/dialogs.json"

describe('Testing of dialog types', () => {
  before('Open Dialog page', () => {
    cy.openHomePage()
    navigateTo.dialogPage()
  })

  it('Test of Open Dialog with Component Dialog', () => {
    onDialogPage.checkTheShowingDialog('Open Dialog', 'Open Dialog with component')
    onDialogPage.checkTheDialogContent(dialogs.dialogComponentHead, dialogs.dialogComponentBody)
    onDialogPage.closeDialog('Dismiss Dialog')
    onDialogPage.checkClosingWithBackdropClick('Open Dialog', 'Open Dialog with component')
  })

  it('Test of Dialog with Template', () => {
    onDialogPage.checkTheShowingDialog('Open Dialog', 'Open Dialog with template')
    onDialogPage.checkTheDialogContent(dialogs.dialogTemplateHead, dialogs.dialogTemplateBody)
    onDialogPage.closeDialog('Close Dialog')
    onDialogPage.checkClosingWithBackdropClick('Open Dialog', 'Open Dialog with template')
  })

  it('Test of Without Backdrop Dialog', () => {
    onDialogPage.checkTheShowingDialog('Open Without Backdrop', 'Open Dialog without backdrop')
    onDialogPage.checkTheDialogContent(dialogs.dialogTemplateHead, dialogs.dialogTemplateBody)
    onDialogPage.closeDialog('Close Dialog')
    onDialogPage.checkClosingWithDisabledBackdropClick('Open Without Backdrop', 'Open Dialog without backdrop')
    onDialogPage.closeDialog('Close Dialog')
  })

  it('Test of Dialog with Esc Close', () => {
    onDialogPage.checkTheShowingDialog('Open Without Esc Close', 'Open Dialog with esc close')
    onDialogPage.checkTheDialogContent(dialogs.dialogComponentHead, dialogs.dialogComponentBody)
    onDialogPage.closeDialog('Dismiss Dialog')
    onDialogPage.checkClosingWithEscKeypress('Open Without Esc Close', 'Open Dialog with esc close')
  });

  it('Test of Dialog with disabled Esc Close', () => {
    onDialogPage.checkTheShowingDialog('Open Without Esc Close', 'Open Dialog without esc close')
    onDialogPage.checkTheDialogContent(dialogs.dialogTemplateHead, dialogs.dialogTemplateBody)
    onDialogPage.closeDialog('Close Dialog')
    onDialogPage.checkClosingWithDisabledEscKeypress('Open Without Esc Close', 'Open Dialog without esc close')
    onDialogPage.closeDialog('Close Dialog')
  })

  it('Test of Dialog with Form Dialog', () => {
    onDialogPage.checkTheShowingDialog('Return Result From Dialog', 'Enter Name')
    onDialogPage.checkTheDialogFormContent(dialogs.dialogFormHeader)
    onDialogPage.closeDialog('Cancel')
    onDialogPage.fillDialogForm('Alex')
    onDialogPage.fillDialogForm('Sara')
    onDialogPage.fillDialogForm('Mark')
  })

})

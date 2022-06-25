import {navigateTo} from "../support/page_objects/navigationPage"
import {onFormLayouts} from "../support/page_objects/formLayoutsPage"
import {onDatepickerPage} from "../support/page_objects/datepickerPage"

describe('Test with Page Objects', () => {

  beforeEach('open the app', () => {
    cy.visit('/')
  });

  it('Verify navigations across the layout page', () => {
    navigateTo.stepperPage()
    navigateTo.formLayoutPage()
    navigateTo.datepickerPage()
  });

  it.only('should submit inline and basic form and select tomorrow date in the calendar', () => {
    // navigateTo.formLayoutPage()
    // onFormLayouts.submitInlineFormWithNameAndEmail('Alex', 'test@email.com')
    // onFormLayouts.submitBasicFormWithNameAndEmail('alex@test.com', 'qwerty1!')
    navigateTo.datepickerPage()
    onDatepickerPage.selectCommonDatepickerDateFromToday(1)
  });
})

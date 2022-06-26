import {navigateTo} from "../support/page_objects/navigationPage"
import {onFormLayouts} from "../support/page_objects/formLayoutsPage"
import {onDatepickerPage} from "../support/page_objects/datepickerPage"
import {onSmartTable} from "../support/page_objects/smartTable"

describe('Test with Page Objects', () => {

  beforeEach('open the app', () => {
    cy.openHomePage()
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
    // navigateTo.datepickerPage()
    // onDatepickerPage.selectCommonDatepickerDateFromToday(1)
    // onDatepickerPage.selectDatepickerWithRangeFromToday(1, 12)

    navigateTo.smartTablePage()
    onSmartTable.addNewRecordWithFirstAndLastName('Aleksei', 'Zolochevski')
    onSmartTable.updateAgeByFirstName('Aleksei', '120')
    onSmartTable.deleteRowByIndex(0)
  });
})

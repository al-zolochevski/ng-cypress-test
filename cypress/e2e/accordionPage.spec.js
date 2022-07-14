import "../support/page_objects/navigationPage";
import {navigateTo} from "../support/page_objects/navigationPage";
import {onAccordionPage} from "../support/page_objects/accordionPage";
import accordion from '../fixtures/according.json';
describe("Accordion tests", () => {

  beforeEach('Visit accordion page', () => {
    cy.openHomePage()
    navigateTo.accordionPage()
  })

  it.only('Check that According is toggled by button', () => {
    onAccordionPage.checkThatFirstAccordionItemIsToggleByButton(accordion.productDetailText)

  });

  it('Check that According is toggled with click on each accordion item header', () => {

  });
})

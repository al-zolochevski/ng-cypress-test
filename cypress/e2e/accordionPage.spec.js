import "../support/page_objects/navigationPage";
import {navigateTo} from "../support/page_objects/navigationPage";
import {onAccordionPage} from "../support/page_objects/accordionPage";
import accordion from '../fixtures/according.json';

describe("Accordion tests", () => {

  beforeEach('Visit accordion page', () => {
    cy.openHomePage()
    navigateTo.accordionPage()
  })

  it('Check that Accordion first item is toggled by button', () => {
    onAccordionPage.checkThatAllItemsIsCollapsedByDefault()
    onAccordionPage.checkThatFirstAccordionItemIsToggleByButton(accordion.productDetailText)
  });

  it('Check that According is toggled with click on each accordion item header', () => {
    onAccordionPage.checkAccordionItemText("Reviews", accordion.reviewsText)
    onAccordionPage.checkAccordionItemText("Product Details", accordion.productDetailText)
    onAccordionPage.checkAccordionItemText("Edit", accordion.editText)
  });
})

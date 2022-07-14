//The methods in this file were written using XPath intentionally for practical purposes.

export class AccordionPage {
  checkThatFirstAccordionItemIsToggleByButton(itemText) {
    cy.xpath('//*[normalize-space(text()) = \'Toggle First Item\']').click()
    cy.xpath('//nb-accordion/nb-accordion-item[@class="expanded"]').should('contain.text', itemText)
  }

  toggleOnAccordionItem(ItemHeader, ItemText) {

  }

  toggleOffAccordionItem(ItemHeader, ItemText) {

  }

  checkThatAllItemsIsCollapsedByDefault() {

  }
}

export const onAccordionPage = new AccordionPage()

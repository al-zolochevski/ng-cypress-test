//The methods in this file were written using XPath intentionally for practical purposes.

export class AccordionPage {
  checkThatFirstAccordionItemIsToggleByButton(itemText) {
    cy.xpath('//*[normalize-space(text())="Toggle First Item"]').click()
    cy.xpath('//nb-accordion[@data-cy="accordion"]/nb-accordion-item[@class="expanded"]').should('contain.text', itemText)
    cy.xpath('//*[normalize-space(text())="Toggle First Item"]').click()
    cy.xpath('//nb-accordion[@data-cy="accordion"]/nb-accordion-item[@class="collapsed"]').first().should('not.have.text', itemText)
  }

  checkAccordionItemText(ItemHeader, ItemText) {
    cy.xpath('//nb-accordion[@data-cy="accordion"]/nb-accordion-item/nb-accordion-item-header' + '[contains(text(), \'' + ItemHeader + '\')]').click()
    cy.xpath('//nb-accordion[@data-cy="accordion"]/nb-accordion-item[@class="expanded"]').should('contain.text', ItemText)
  }

  checkThatAllItemsIsCollapsedByDefault() {
    cy.xpath('//nb-accordion[@data-cy="accordion"]/nb-accordion-item').each((elem) => {
      expect(elem).has.class('collapsed')
    })
  }
}

export const onAccordionPage = new AccordionPage()

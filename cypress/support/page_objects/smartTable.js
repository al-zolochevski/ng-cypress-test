export class SmartTable {

  updateAgeByFirstName(name, age) {
    cy.get('tbody').contains('tr', name).then(tableRow => {
      cy.wrap(tableRow).find('i.nb-edit').click()
      cy.wrap(tableRow).find('[placeholder="Age"]').clear().type(age)
      cy.wrap(tableRow).find('.nb-checkmark').click()
      cy.wrap(tableRow).find('td').eq(6).should('contain', age)
    })
  }

  addNewRecordWithFirstAndLastName(firstName, lastName) {
    cy.get('tr').find('a .nb-plus').click()
    cy.get('thead').find('tr').eq(2).then(theadRow => {
      cy.wrap(theadRow).find('input-editor').eq(1).type(firstName)
      cy.wrap(theadRow).find('input-editor').eq(2).type(lastName)
      cy.wrap(theadRow).find('.nb-checkmark').click()
    })

    cy.get('tbody').find('tr').eq(0).then(firstRow => {
      cy.wrap(firstRow).find('td').eq(2).should('have.text', firstName)
      cy.wrap(firstRow).find('td').eq(3).should('have.text', lastName)
    })
  }

  deleteRowByIndex(index) {
    const stub = cy.stub()
    cy.on('window:confirm', stub)
    cy.get('tbody tr').eq(index).find('.nb-trash').click().then(() => {
      expect(stub.getCall(0)).to.be.calledWith('Are you sure you want to delete?')
    })
  }

}

export const onSmartTable = new SmartTable();

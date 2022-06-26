function selectDayFromCurrent(numberOfDays) {
  //date returned current date e.g. Thu Jun 23 2022 13:20:04 GMT+0300 (Eastern European Summer Time)
  let date = new Date()
  date.setDate(date.getDate() + numberOfDays)
  let futureDay = date.getDate()
  let futureMonth = date.toLocaleString('default', {month: 'short'})
  let dateAssert = futureMonth + ' ' + futureDay + ', ' + date.getFullYear()
  cy.get('nb-calendar-navigation').invoke('attr', 'ng-reflect-date').then(dateAttributeValue => {
    if (!dateAttributeValue.includes(futureMonth)) {
      cy.get('[data-name="chevron-right"]').click()
      selectDayFromCurrent(numberOfDays)
    } else {
      cy.get('.day-cell').not('.bounding-month').contains(futureDay).click()
    }
  })
  return dateAssert
}

export class DatepickerPage {

  selectCommonDatepickerDateFromToday(dayFromToday) {
    cy.contains('nb-card', 'Common Datepicker').find('[placeholder="Form Picker"]').then(input => {
      cy.wrap(input).click()
      let dateAssert = selectDayFromCurrent(dayFromToday)
      cy.wrap(input).invoke('prop', 'value').should('contain', dateAssert)
    })
  }

  selectDatepickerWithRangeFromToday(firstDay, secondDay) {
    cy.contains('nb-card', 'Datepicker With Range').find('[placeholder="Range Picker"]').then(input => {
      cy.wrap(input).click()
      let dateAssertFirst = selectDayFromCurrent(firstDay)
      let dateAssertSecond = selectDayFromCurrent(secondDay)
      const finalDate = dateAssertFirst+' - '+dateAssertSecond
      cy.wrap(input).invoke('prop', 'value').should('contain', finalDate)
    })
  }

}

export const onDatepickerPage = new DatepickerPage()

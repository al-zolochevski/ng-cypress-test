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
      selectDayFromCurrent()
    } else {
      cy.get('nb-calendar-day-picker [class="day-cell ng-star-inserted"]').contains(futureDay).click()
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
}

export const onDatepickerPage = new DatepickerPage()

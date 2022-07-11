export class StepperPage {

  //Big Horizontal Stepper
  checkStepLabelTextForStepper(stepperAttr, stepText) {
    cy.get(`${stepperAttr} .step`).contains(stepText)
  }

  checkStepNumberValueForStepper(stepperAttr, stepNumber) {
    cy.get(`${stepperAttr} .step`).contains(stepNumber)
  }

  goToTheNextStepForStepper(stepperAttr) {
    cy.get(`${stepperAttr}`).contains('next').click()
  }

  goToThePreviousStepForStepper(stepperAttr) {
    cy.get(`${stepperAttr}`).contains('prev').click()
  }

  checkThePrevButtonIsDisabledForStepper(stepperAttr) {
    cy.get(`${stepperAttr}`)
      .contains('prev').should('have.attr', 'aria-disabled', 'true')
  }

  checkThePrevButtonIsEnabledForStepper(stepperAttr) {
    cy.get(`${stepperAttr}`)
      .contains('prev').should('have.attr', 'aria-disabled', 'false')
  }

  checkTheNextButtonIsDisabledForStepper(stepperAttr) {
    cy.get(`${stepperAttr}`)
      .contains('next').should('have.attr', 'aria-disabled', 'true')
  }

  checkTheNextButtonIsEnabledForStepper(stepperAttr) {
    cy.get(`${stepperAttr}`)
      .contains('next').should('have.attr', 'aria-disabled', 'false')
  }

  checkStepCompletedStateForStepper(stepperAttr, stepIndex) {
    cy.get(`${stepperAttr} .step`).each((step, ArrIndex) => {
      if (ArrIndex === stepIndex) {
        expect(step).to.have.class('completed')
      }
    })
  }

  //Medium Horizontal Stepper
  checkStepLabelTextForMediumHorizontalStepper(stepText) {
    cy.get('[cy="medium-horizontal-stepper"]').contains(stepText)
  }

  checkTheNextButtonIsDisabledForMediumHorizontalStepper() {
    cy.get('[cy="medium-horizontal-stepper"]')
      .contains('next').should('have.attr', 'aria-disabled', 'true')
  }

  checkTheNextButtonIsEnabledForMediumHorizontalStepper() {
    cy.get('[cy="medium-horizontal-stepper"]')
      .contains('next').should('have.attr', 'aria-disabled', 'false')
  }

  checkThePrevButtonIsNotDisplayedForMediumHorizontalStepper() {
    cy.get('[cy="medium-horizontal-stepper"] button').contains('prev').should('not.exist');
  }

  goToTheNextStepForMediumHorizontalStepper() {
    cy.get('[cy="medium-horizontal-stepper"]').contains('next').click()
  }

  confirmAllTypedDataForMediumHorizontalStepper() {
    cy.get('[cy="medium-horizontal-stepper"]').contains('Confirm').click()
  }

  checkStepNumberValueForMediumHorizontalStepper(stepNumber) {
    cy.get('[cy="medium-horizontal-stepper"]').contains(stepNumber)
  }

  typeFirstNameForMediumHorizontalStepper(firstName) {
    cy.get('[cy="medium-horizontal-stepper"] [placeholder="Enter your name"]').type(firstName)
      .invoke('prop', 'value').then(value => {
      expect(value).to.contain(firstName)
    })
  }

  typeFavouriteMovieForMediumHorizontalStepper(favouriteMovie) {
    cy.get('[cy="medium-horizontal-stepper"] [placeholder="Enter favorite movie"]').type(favouriteMovie)
      .invoke('prop', 'value').then(value => {
      expect(value).to.contain(favouriteMovie)
    })
  }

  typeTextForMediumHorizontalStepper(someText) {
    cy.get('[cy="medium-horizontal-stepper"] [placeholder="Enter something"]').type(someText)
      .invoke('prop', 'value').then(value => {
      expect(value).to.contain(someText)
    })
  }

  checkStepCompletedStateForMediumHorizontalStepper(stepIndex) {
    cy.get('[cy="medium-horizontal-stepper"] .step').each((step, ArrIndex) => {
      if (ArrIndex === stepIndex) {
        expect(step).to.have.class('completed')
      }
    })
  }

  checkThatUserCanPassAgainForMediumHorizontalSteppe(completedText, tryAgain) {
    cy.get('[cy="medium-horizontal-stepper"] .step-content').contains(completedText)
    cy.get('[cy="medium-horizontal-stepper"] .step-content').contains(tryAgain).click()

  }
}

export const onStepperPage = new StepperPage()

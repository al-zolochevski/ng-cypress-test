export class StepperPage {

  //Big Horizontal Stepper
  checkStepLabelTextForBigStepper(stepText) {
    cy.get('nb-card [orientation="horizontal"] .step').contains(stepText)
  }

  checkStepNumberValueForBigStepper(stepNumber) {
    cy.get('nb-card [orientation="horizontal"] .step').contains(stepNumber)
  }

  goToTheNextStepForBigStepper() {
    cy.get('nb-card').find('[orientation="horizontal"]').contains('next').click()
  }

  goToThePreviousStepForBigStepper() {
    cy.get('nb-card').find('[orientation="horizontal"]').contains('prev').click()
  }

  checkTheNextButtonIsDisabledForBigStepper() {
    cy.get('nb-card').find('[orientation="horizontal"]')
      .contains('next').should('have.attr', 'aria-disabled', 'true')
  }

  checkThePrevButtonIsDisabledForBigStepper() {
    cy.get('nb-card').find('[orientation="horizontal"]')
      .contains('prev').should('have.attr', 'aria-disabled', 'true')
  }

  checkTheNextButtonIsEnabledForBigStepper() {
    cy.get('nb-card').find('[orientation="horizontal"]')
      .contains('next').should('have.attr', 'aria-disabled', 'false')
  }

  checkThePrevButtonIsEnabledForBigStepper() {
    cy.get('nb-card').find('[orientation="horizontal"]')
      .contains('prev').should('have.attr', 'aria-disabled', 'false')
  }

  checkStepCompletedStateForBigStepper(stepIndex) {
    cy.get('nb-card [orientation="horizontal"] .step').each((step, ArrIndex) => {
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

  //Medium Vertical Stepper
  checkStepLabelTextForMediumVerticalStepper(stepText) {
    cy.get('[cy="medium-vertical-stepper"] .step').contains(stepText)
  }

  checkStepNumberValueForMediumVerticalStepper(stepNumber) {
    cy.get('[cy="medium-vertical-stepper"] .step').contains(stepNumber)
  }

  goToTheNextStepForMediumVerticalStepper() {
    cy.get('[cy="medium-vertical-stepper"]').contains('next').click()
  }

  goToThePreviousStepForMediumVerticalStepper() {
    cy.get('[cy="medium-vertical-stepper"]').contains('prev').click()
  }

  checkTheNextButtonIsDisabledForMediumVerticalStepper() {
    cy.get('[cy="medium-vertical-stepper"]')
      .contains('next').should('have.attr', 'aria-disabled', 'true')
  }

  checkThePrevButtonIsDisabledForMediumVerticalStepper() {
    cy.get('[cy="medium-vertical-stepper"]')
      .contains('prev').should('have.attr', 'aria-disabled', 'true')
  }

  checkTheNextButtonIsEnabledForMediumVerticalStepper() {
    cy.get('[cy="medium-vertical-stepper"]')
      .contains('next').should('have.attr', 'aria-disabled', 'false')
  }

  checkThePrevButtonIsEnabledForMediumVerticalStepper() {
    cy.get('[cy="medium-vertical-stepper"]')
      .contains('prev').should('have.attr', 'aria-disabled', 'false')
  }

  checkStepCompletedStateForMediumVerticalStepper(stepIndex) {
    cy.get('[cy="medium-vertical-stepper"] .step').each((step, ArrIndex) => {
      if (ArrIndex === stepIndex) {
        expect(step).to.have.class('completed')
      }
    })
  }
}

export const onStepperPage = new StepperPage()

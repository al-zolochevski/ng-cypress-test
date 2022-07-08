export class StepperPage {
  //Big Horizontal Stepper
  checkStepLabelTextForForBigStepper(stepText) {
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

  checkStepCompletedState(stepIndex) {
    cy.get('nb-card [orientation="horizontal"] .step').each((step, ArrIndex) => {
      if (ArrIndex === stepIndex) {
        console.log(step)
        expect(step).to.have.class('completed')
      }
    })
  }
}

export const onStepperPage = new StepperPage()

import {navigateTo} from "../support/page_objects/navigationPage"
import {onStepperPage} from "../support/page_objects/stepperPage"

describe('Stepper page tests', () => {

  beforeEach('open the App', () => {
    cy.openHomePage()
    navigateTo.stepperPage()
  })

  it('Check that User can go through Big stepper', () => {
    onStepperPage.checkThePrevButtonIsDisabledForBigStepper()
    onStepperPage.checkStepLabelTextForForBigStepper('First step')
    onStepperPage.checkStepNumberValueForBigStepper('1')
    onStepperPage.goToTheNextStepForBigStepper()
    onStepperPage.checkStepCompletedState(0)

    onStepperPage.checkStepLabelTextForForBigStepper('Second step')
    onStepperPage.checkStepNumberValueForBigStepper('2')
    onStepperPage.goToTheNextStepForBigStepper()
    onStepperPage.checkStepCompletedState(1)

    onStepperPage.checkStepLabelTextForForBigStepper('Third step')
    onStepperPage.checkStepNumberValueForBigStepper('3')
    onStepperPage.goToTheNextStepForBigStepper()
    onStepperPage.checkStepCompletedState(2)

    onStepperPage.checkStepLabelTextForForBigStepper('Fourth step')
    onStepperPage.checkStepNumberValueForBigStepper('4')
    onStepperPage.checkTheNextButtonIsDisabledForBigStepper()

    onStepperPage.goToThePreviousStepForBigStepper()
    onStepperPage.checkTheNextButtonIsEnabledForBigStepper()
    onStepperPage.checkStepCompletedState(3)
    onStepperPage.checkStepNumberValueForBigStepper('3')

    onStepperPage.goToThePreviousStepForBigStepper()
    onStepperPage.checkStepCompletedState(2)
    onStepperPage.checkStepNumberValueForBigStepper('2')

    onStepperPage.goToThePreviousStepForBigStepper()
    onStepperPage.checkStepCompletedState(1)
    onStepperPage.checkStepNumberValueForBigStepper('1')
    onStepperPage.checkThePrevButtonIsDisabledForBigStepper()
  });
})

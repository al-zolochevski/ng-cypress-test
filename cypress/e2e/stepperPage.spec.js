import {navigateTo} from "../support/page_objects/navigationPage"
import {onStepperPage} from "../support/page_objects/stepperPage"

describe('Stepper page tests', () => {

  beforeEach('open the App', () => {
    cy.openHomePage()
    navigateTo.stepperPage()
  })

  it('Check that User can go through Big horizontal stepper', () => {
    onStepperPage.checkThePrevButtonIsDisabledForStepper('[cy="big-horizontal-stepper"]')
    onStepperPage.checkStepLabelTextForStepper('[cy="big-horizontal-stepper"]', 'First step')
    onStepperPage.checkStepNumberValueForStepper('[cy="big-horizontal-stepper"]', '1')
    onStepperPage.goToTheNextStepForStepper('[cy="big-horizontal-stepper"]')
    onStepperPage.checkStepCompletedStateForStepper('[cy="big-horizontal-stepper"]', 0)
    onStepperPage.checkThePrevButtonIsEnabledForStepper('[cy="big-horizontal-stepper"]')

    onStepperPage.checkStepLabelTextForStepper('[cy="big-horizontal-stepper"]', 'Second step')
    onStepperPage.checkStepNumberValueForStepper('[cy="big-horizontal-stepper"]', '2')
    onStepperPage.goToTheNextStepForStepper('[cy="big-horizontal-stepper"]')
    onStepperPage.checkStepCompletedStateForStepper('[cy="big-horizontal-stepper"]', 1)

    onStepperPage.checkStepLabelTextForStepper('[cy="big-horizontal-stepper"]', 'Third step')
    onStepperPage.checkStepNumberValueForStepper('[cy="big-horizontal-stepper"]', '3')
    onStepperPage.goToTheNextStepForStepper('[cy="big-horizontal-stepper"]')
    onStepperPage.checkStepCompletedStateForStepper('[cy="big-horizontal-stepper"]', 2)

    onStepperPage.checkStepLabelTextForStepper('[cy="big-horizontal-stepper"]', 'Fourth step')
    onStepperPage.checkStepNumberValueForStepper('[cy="big-horizontal-stepper"]', '4')
    onStepperPage.checkTheNextButtonIsDisabledForStepper('[cy="big-horizontal-stepper"]')

    onStepperPage.goToThePreviousStepForStepper('[cy="big-horizontal-stepper"]')
    onStepperPage.checkTheNextButtonIsEnabledForStepper('[cy="big-horizontal-stepper"]')
    onStepperPage.checkStepCompletedStateForStepper('[cy="big-horizontal-stepper"]', 3)
    onStepperPage.checkStepNumberValueForStepper('[cy="big-horizontal-stepper"]', '3')

    onStepperPage.goToThePreviousStepForStepper('[cy="big-horizontal-stepper"]')
    onStepperPage.checkStepCompletedStateForStepper('[cy="big-horizontal-stepper"]', 2)
    onStepperPage.checkStepNumberValueForStepper('[cy="big-horizontal-stepper"]', '2')

    onStepperPage.goToThePreviousStepForStepper('[cy="big-horizontal-stepper"]')
    onStepperPage.checkStepCompletedStateForStepper('[cy="big-horizontal-stepper"]', 1)
    onStepperPage.checkStepNumberValueForStepper('[cy="big-horizontal-stepper"]', '1')
    onStepperPage.checkThePrevButtonIsDisabledForStepper('[cy="big-horizontal-stepper"]')
  });

  it('Check that User can go through Medium vertical stepper', () => {
    onStepperPage.checkThePrevButtonIsDisabledForStepper('[cy="medium-vertical-stepper"]')
    onStepperPage.checkStepLabelTextForStepper('[cy="medium-vertical-stepper"]', 'First step')
    onStepperPage.checkStepNumberValueForStepper('[cy="medium-vertical-stepper"]', '1')
    onStepperPage.goToTheNextStepForStepper('[cy="medium-vertical-stepper"]')
    onStepperPage.checkStepCompletedStateForStepper('[cy="medium-vertical-stepper"]', 0)

    onStepperPage.checkStepLabelTextForStepper('[cy="medium-vertical-stepper"]', 'Second step')
    onStepperPage.checkStepNumberValueForStepper('[cy="medium-vertical-stepper"]', '2')
    onStepperPage.goToTheNextStepForStepper('[cy="medium-vertical-stepper"]')
    onStepperPage.checkStepCompletedStateForStepper('[cy="medium-vertical-stepper"]', 1)

    onStepperPage.checkStepLabelTextForStepper('[cy="medium-vertical-stepper"]', 'Third step')
    onStepperPage.checkStepNumberValueForStepper('[cy="medium-vertical-stepper"]', '3')
    onStepperPage.goToTheNextStepForStepper('[cy="medium-vertical-stepper"]')
    onStepperPage.checkStepCompletedStateForStepper('[cy="medium-vertical-stepper"]', 2)

    onStepperPage.checkStepLabelTextForStepper('[cy="medium-vertical-stepper"]', 'Fourth step')
    onStepperPage.checkStepNumberValueForStepper('[cy="medium-vertical-stepper"]', '4')
    onStepperPage.checkTheNextButtonIsDisabledForStepper('[cy="medium-vertical-stepper"]')

    onStepperPage.goToThePreviousStepForStepper('[cy="medium-vertical-stepper"]')
    onStepperPage.checkTheNextButtonIsEnabledForStepper('[cy="medium-vertical-stepper"]')
    onStepperPage.checkStepCompletedStateForStepper('[cy="medium-vertical-stepper"]', 3)
    onStepperPage.checkStepNumberValueForStepper('[cy="medium-vertical-stepper"]', '3')

    onStepperPage.goToThePreviousStepForStepper('[cy="medium-vertical-stepper"]')
    onStepperPage.checkStepCompletedStateForStepper('[cy="medium-vertical-stepper"]', 2)
    onStepperPage.checkStepNumberValueForStepper('[cy="medium-vertical-stepper"]', '2')

    onStepperPage.goToThePreviousStepForStepper('[cy="medium-vertical-stepper"]')
    onStepperPage.checkStepCompletedStateForStepper('[cy="medium-vertical-stepper"]', 1)
    onStepperPage.checkStepNumberValueForStepper('[cy="medium-vertical-stepper"]', '1')
    onStepperPage.checkThePrevButtonIsDisabledForStepper('[cy="medium-vertical-stepper"]')
  });

  it('Check that User can go through Medium horizontal stepper', () => {
    onStepperPage.checkTheNextButtonIsEnabledForMediumHorizontalStepper()
    onStepperPage.checkThePrevButtonIsNotDisplayedForMediumHorizontalStepper()
    onStepperPage.checkStepLabelTextForMediumHorizontalStepper('First step')
    onStepperPage.checkStepNumberValueForMediumHorizontalStepper('1')
    onStepperPage.typeFirstNameForMediumHorizontalStepper('Alex')
    onStepperPage.goToTheNextStepForMediumHorizontalStepper()
    onStepperPage.checkStepCompletedStateForMediumHorizontalStepper(0)

    onStepperPage.typeFavouriteMovieForMediumHorizontalStepper('Movie 43')
    onStepperPage.goToTheNextStepForMediumHorizontalStepper()
    onStepperPage.checkStepCompletedStateForMediumHorizontalStepper(1)
    onStepperPage.typeTextForMediumHorizontalStepper('bla bla bla')
    onStepperPage.confirmAllTypedDataForMediumHorizontalStepper()
    onStepperPage.checkStepCompletedStateForMediumHorizontalStepper(2)
    onStepperPage.checkThatUserCanPassAgainForMediumHorizontalSteppe('Wizard completed!', 'Try again')

    onStepperPage.checkStepNumberValueForMediumHorizontalStepper('1')
    onStepperPage.checkStepNumberValueForMediumHorizontalStepper('2')
    onStepperPage.checkStepNumberValueForMediumHorizontalStepper('3')
    onStepperPage.checkThePrevButtonIsNotDisplayedForMediumHorizontalStepper()
    onStepperPage.checkTheNextButtonIsEnabledForMediumHorizontalStepper()
  });


})

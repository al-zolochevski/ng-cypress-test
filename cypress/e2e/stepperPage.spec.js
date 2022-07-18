import {navigateTo} from "../support/page_objects/navigationPage"
import {onStepperPage} from "../support/page_objects/stepperPage"

describe('Stepper page tests', () => {

  beforeEach('open the App', () => {
    cy.openHomePage()
    navigateTo.stepperPage()
  })

  it('Check that User can go through Big horizontal stepper', () => {
    onStepperPage.checkThePrevButtonIsDisabledForStepper('[data-cy="big-horizontal-stepper"]')
    onStepperPage.checkStepLabelTextForStepper('[data-cy="big-horizontal-stepper"]', 'First step')
    onStepperPage.checkStepNumberValueForStepper('[data-cy="big-horizontal-stepper"]', '1')
    onStepperPage.goToTheNextStepForStepper('[data-cy="big-horizontal-stepper"]')
    onStepperPage.checkStepCompletedStateForStepper('[data-cy="big-horizontal-stepper"]', 0)
    onStepperPage.checkThePrevButtonIsEnabledForStepper('[data-cy="big-horizontal-stepper"]')

    onStepperPage.checkStepLabelTextForStepper('[data-cy="big-horizontal-stepper"]', 'Second step')
    onStepperPage.checkStepNumberValueForStepper('[data-cy="big-horizontal-stepper"]', '2')
    onStepperPage.goToTheNextStepForStepper('[data-cy="big-horizontal-stepper"]')
    onStepperPage.checkStepCompletedStateForStepper('[data-cy="big-horizontal-stepper"]', 1)

    onStepperPage.checkStepLabelTextForStepper('[data-cy="big-horizontal-stepper"]', 'Third step')
    onStepperPage.checkStepNumberValueForStepper('[data-cy="big-horizontal-stepper"]', '3')
    onStepperPage.goToTheNextStepForStepper('[data-cy="big-horizontal-stepper"]')
    onStepperPage.checkStepCompletedStateForStepper('[data-cy="big-horizontal-stepper"]', 2)

    onStepperPage.checkStepLabelTextForStepper('[data-cy="big-horizontal-stepper"]', 'Fourth step')
    onStepperPage.checkStepNumberValueForStepper('[data-cy="big-horizontal-stepper"]', '4')
    onStepperPage.checkTheNextButtonIsDisabledForStepper('[data-cy="big-horizontal-stepper"]')

    onStepperPage.goToThePreviousStepForStepper('[data-cy="big-horizontal-stepper"]')
    onStepperPage.checkTheNextButtonIsEnabledForStepper('[data-cy="big-horizontal-stepper"]')
    onStepperPage.checkStepCompletedStateForStepper('[data-cy="big-horizontal-stepper"]', 3)
    onStepperPage.checkStepNumberValueForStepper('[data-cy="big-horizontal-stepper"]', '3')

    onStepperPage.goToThePreviousStepForStepper('[data-cy="big-horizontal-stepper"]')
    onStepperPage.checkStepCompletedStateForStepper('[data-cy="big-horizontal-stepper"]', 2)
    onStepperPage.checkStepNumberValueForStepper('[data-cy="big-horizontal-stepper"]', '2')

    onStepperPage.goToThePreviousStepForStepper('[data-cy="big-horizontal-stepper"]')
    onStepperPage.checkStepCompletedStateForStepper('[data-cy="big-horizontal-stepper"]', 1)
    onStepperPage.checkStepNumberValueForStepper('[data-cy="big-horizontal-stepper"]', '1')
    onStepperPage.checkThePrevButtonIsDisabledForStepper('[data-cy="big-horizontal-stepper"]')
  });

  it('Check that User can go through Medium vertical stepper', () => {
    onStepperPage.checkThePrevButtonIsDisabledForStepper('[data-cy="medium-vertical-stepper"]')
    onStepperPage.checkStepLabelTextForStepper('[data-cy="medium-vertical-stepper"]', 'First step')
    onStepperPage.checkStepNumberValueForStepper('[data-cy="medium-vertical-stepper"]', '1')
    onStepperPage.goToTheNextStepForStepper('[data-cy="medium-vertical-stepper"]')
    onStepperPage.checkStepCompletedStateForStepper('[data-cy="medium-vertical-stepper"]', 0)

    onStepperPage.checkStepLabelTextForStepper('[data-cy="medium-vertical-stepper"]', 'Second step')
    onStepperPage.checkStepNumberValueForStepper('[data-cy="medium-vertical-stepper"]', '2')
    onStepperPage.goToTheNextStepForStepper('[data-cy="medium-vertical-stepper"]')
    onStepperPage.checkStepCompletedStateForStepper('[data-cy="medium-vertical-stepper"]', 1)

    onStepperPage.checkStepLabelTextForStepper('[data-cy="medium-vertical-stepper"]', 'Third step')
    onStepperPage.checkStepNumberValueForStepper('[data-cy="medium-vertical-stepper"]', '3')
    onStepperPage.goToTheNextStepForStepper('[data-cy="medium-vertical-stepper"]')
    onStepperPage.checkStepCompletedStateForStepper('[data-cy="medium-vertical-stepper"]', 2)

    onStepperPage.checkStepLabelTextForStepper('[data-cy="medium-vertical-stepper"]', 'Fourth step')
    onStepperPage.checkStepNumberValueForStepper('[data-cy="medium-vertical-stepper"]', '4')
    onStepperPage.checkTheNextButtonIsDisabledForStepper('[data-cy="medium-vertical-stepper"]')

    onStepperPage.goToThePreviousStepForStepper('[data-cy="medium-vertical-stepper"]')
    onStepperPage.checkTheNextButtonIsEnabledForStepper('[data-cy="medium-vertical-stepper"]')
    onStepperPage.checkStepCompletedStateForStepper('[data-cy="medium-vertical-stepper"]', 3)
    onStepperPage.checkStepNumberValueForStepper('[data-cy="medium-vertical-stepper"]', '3')

    onStepperPage.goToThePreviousStepForStepper('[data-cy="medium-vertical-stepper"]')
    onStepperPage.checkStepCompletedStateForStepper('[data-cy="medium-vertical-stepper"]', 2)
    onStepperPage.checkStepNumberValueForStepper('[data-cy="medium-vertical-stepper"]', '2')

    onStepperPage.goToThePreviousStepForStepper('[data-cy="medium-vertical-stepper"]')
    onStepperPage.checkStepCompletedStateForStepper('[data-cy="medium-vertical-stepper"]', 1)
    onStepperPage.checkStepNumberValueForStepper('[data-cy="medium-vertical-stepper"]', '1')
    onStepperPage.checkThePrevButtonIsDisabledForStepper('[data-cy="medium-vertical-stepper"]')
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

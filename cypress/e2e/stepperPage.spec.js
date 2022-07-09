import {navigateTo} from "../support/page_objects/navigationPage"
import {onStepperPage} from "../support/page_objects/stepperPage"

describe('Stepper page tests', () => {

  beforeEach('open the App', () => {
    cy.openHomePage()
    navigateTo.stepperPage()
  })

  it('Check that User can go through Big horizontal stepper', () => {
    onStepperPage.checkThePrevButtonIsDisabledForBigStepper()
    onStepperPage.checkStepLabelTextForBigStepper('First step')
    onStepperPage.checkStepNumberValueForBigStepper('1')
    onStepperPage.goToTheNextStepForBigStepper()
    onStepperPage.checkStepCompletedStateForBigStepper(0)

    onStepperPage.checkStepLabelTextForBigStepper('Second step')
    onStepperPage.checkStepNumberValueForBigStepper('2')
    onStepperPage.goToTheNextStepForBigStepper()
    onStepperPage.checkStepCompletedStateForBigStepper(1)

    onStepperPage.checkStepLabelTextForBigStepper('Third step')
    onStepperPage.checkStepNumberValueForBigStepper('3')
    onStepperPage.goToTheNextStepForBigStepper()
    onStepperPage.checkStepCompletedStateForBigStepper(2)

    onStepperPage.checkStepLabelTextForBigStepper('Fourth step')
    onStepperPage.checkStepNumberValueForBigStepper('4')
    onStepperPage.checkTheNextButtonIsDisabledForBigStepper()

    onStepperPage.goToThePreviousStepForBigStepper()
    onStepperPage.checkTheNextButtonIsEnabledForBigStepper()
    onStepperPage.checkStepCompletedStateForBigStepper(3)
    onStepperPage.checkStepNumberValueForBigStepper('3')

    onStepperPage.goToThePreviousStepForBigStepper()
    onStepperPage.checkStepCompletedStateForBigStepper(2)
    onStepperPage.checkStepNumberValueForBigStepper('2')

    onStepperPage.goToThePreviousStepForBigStepper()
    onStepperPage.checkStepCompletedStateForBigStepper(1)
    onStepperPage.checkStepNumberValueForBigStepper('1')
    onStepperPage.checkThePrevButtonIsDisabledForBigStepper()
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

  it('Check that User can go through Medium vertical stepper', () => {
    onStepperPage.checkThePrevButtonIsDisabledForMediumVerticalStepper()
    onStepperPage.checkStepLabelTextForMediumVerticalStepper('First step')
    onStepperPage.checkStepNumberValueForMediumVerticalStepper('1')
    onStepperPage.goToTheNextStepForMediumVerticalStepper()
    onStepperPage.checkStepCompletedStateForMediumVerticalStepper(0)

    onStepperPage.checkStepLabelTextForMediumVerticalStepper('Second step')
    onStepperPage.checkStepNumberValueForMediumVerticalStepper('2')
    onStepperPage.goToTheNextStepForMediumVerticalStepper()
    onStepperPage.checkStepCompletedStateForMediumVerticalStepper(1)

    onStepperPage.checkStepLabelTextForMediumVerticalStepper('Third step')
    onStepperPage.checkStepNumberValueForMediumVerticalStepper('3')
    onStepperPage.goToTheNextStepForMediumVerticalStepper()
    onStepperPage.checkStepCompletedStateForMediumVerticalStepper(2)

    onStepperPage.checkStepLabelTextForMediumVerticalStepper('Fourth step')
    onStepperPage.checkStepNumberValueForMediumVerticalStepper('4')
    onStepperPage.checkTheNextButtonIsDisabledForMediumVerticalStepper()

    onStepperPage.goToThePreviousStepForMediumVerticalStepper()
    onStepperPage.checkTheNextButtonIsEnabledForMediumVerticalStepper()
    onStepperPage.checkStepCompletedStateForMediumVerticalStepper(3)
    onStepperPage.checkStepNumberValueForMediumVerticalStepper('3')

    onStepperPage.goToThePreviousStepForMediumVerticalStepper()
    onStepperPage.checkStepCompletedStateForMediumVerticalStepper(2)
    onStepperPage.checkStepNumberValueForMediumVerticalStepper('2')

    onStepperPage.goToThePreviousStepForMediumVerticalStepper()
    onStepperPage.checkStepCompletedStateForMediumVerticalStepper(1)
    onStepperPage.checkStepNumberValueForMediumVerticalStepper('1')
    onStepperPage.checkThePrevButtonIsDisabledForMediumVerticalStepper()
  });
})

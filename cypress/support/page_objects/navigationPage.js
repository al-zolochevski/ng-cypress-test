function openGroupOfItems(navGroupTitleText) {
  cy.contains('a', navGroupTitleText).then(menu => {
    cy.wrap(menu).find('.expand-state g g').invoke('attr', 'data-name').then(attr => {
      if (attr.includes('left')) {
        cy.wrap(menu).click()
      }
    })
  })
}

export class NavigationPage {

  stepperPage() {
    openGroupOfItems('Layout')
    cy.contains('Stepper').click()
  }

  accordionPage() {
    openGroupOfItems('Layout')
    cy.contains('Accordion').click()
  }

  formLayoutPage() {
    openGroupOfItems('Forms')
    cy.contains('Form Layouts').click()
  }

  datepickerPage() {
    openGroupOfItems('Forms')
    cy.contains('Datepicker').click()
  }

  dialogPage() {
    openGroupOfItems('Modal & Overlays')
    cy.contains('Dialog').click()
  }

  windowPage() {
    openGroupOfItems('Modal & Overlays')
    cy.contains('Window').click()
  }

  popoverPage() {
    openGroupOfItems('Modal & Overlays')
    cy.contains('Popover').click()
  }

  toasterPage() {
    openGroupOfItems('Modal & Overlays')
    cy.contains('Toastr').click()
  }

  tooltipPage() {
    openGroupOfItems('Modal & Overlays')
    cy.contains('Tooltip').click()
  }

  calendarPage() {
    openGroupOfItems('Extra Components')
    cy.contains('Calendar').click()
  }

  smartTablePage() {
    openGroupOfItems('Tables & Data')
    cy.contains('Smart Table').click()
  }

  treeGridPage() {
    openGroupOfItems('Tables & Data')
    cy.contains('Tree Grid').click()
  }

  loginPage() {
    openGroupOfItems('Auth')
    cy.contains('Login').click()
  }

  registerPage() {
    openGroupOfItems('Auth')
    cy.contains('Register').click()
  }

  requestPasswordPage() {
    openGroupOfItems('Auth')
    cy.contains('Request Password').click()
  }

  resetPasswordPage() {
    openGroupOfItems('Auth')
    cy.contains('Reset Password').click()
  }
}

export const navigateTo = new NavigationPage()

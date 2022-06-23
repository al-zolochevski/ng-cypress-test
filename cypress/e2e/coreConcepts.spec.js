/// <reference types="cypress" />

describe('My first suite', () => {

  it('Understand the concept of .then cy.wrap', () => {
    cy.visit('/');
    cy.contains('Forms').click();
    cy.contains('Form Layouts').click();

    // Cypress works asynchronous and if you want to save something like variable or const you should use .then
    // When we call .then the jQuery obj is returned in callback function as a parameter
    cy.contains('nb-card', 'Basic form').then(basicForm => {

      const emailText = basicForm.find('[for="exampleInputEmail1"]').text();
      expect(emailText).to.equal('Email address');

      const passwordText = basicForm.find('[for="exampleInputPassword1"]').text();
      expect(passwordText).to.equal('Password');
    })

    // And to test something inside .then we should use assertions from Mocha like expect() or should()
    // And if you want to use Cypress context inside .then you should .wrap returned jQuery obj
    // And if you want you can use many .then as you wish inside the first .then
    // All variables or constants declared in the first .then will be available in all inside siblings .then
    cy.contains('nb-card', 'Using the Grid').then(gridForm => {

      let emailText = gridForm.find('[for="inputEmail1"]').text();
      expect(emailText).to.equal('Email');

      cy.wrap(gridForm).find('[for="inputPassword2"]').should('have.text', 'Password');
    })
  })

  it('Understand the concept of .invoke', () => {
    cy.visit('/');
    cy.contains('Forms').click();
    cy.contains('Form Layouts').click();

    // 1. Assertion with Cypress style for Basic Form - email label text
    cy.get('[for="exampleInputEmail1"]').should('have.text', 'Email address');

    // 2. Assertion with .then style for Basic Form - email label text
    // And we get element and saved it as an jQuery object in label
    // And save the label text value in const using jQuery text() method
    // And write assertion using expect() from Mocha
    cy.get('[for="exampleInputEmail1"]').then(label => {
      const emailLabelText = label.text();
      expect(emailLabelText).equal('Email address');
    })

    // 3. Assertion with .invoke + .then command for Basic Form - email label text
    // 2 & 3 examples pretty similar but here we get label text using .invoke before .then
    // And save as parameter the raw text in labelText
    // And write assertion using expect() from Mocha
    cy.get('[for="exampleInputEmail1"]').invoke('text').then(labelText => {
      expect(labelText).equal('Email address');

      // Check that "Check me out" checkbox is checked using invoke
      // And when we use two parameters for invoke method
      cy.contains('nb-card', 'Basic form').find('.custom-checkbox').click()
        .invoke('attr', 'class').should('contain', 'checked');
    })
  });

  it('Check that "Check me out" checkbox is checked using invoke + .then ', () => {
    cy.visit('/');
    cy.contains('Forms').click();
    cy.contains('Form Layouts').click();

    cy.contains('nb-card', 'Basic form').find('.custom-checkbox').click()
      .invoke('attr', 'class').then(classValue => {
      expect(classValue).to.contain('checked');
    })
  });

  it('Check that date selected from datepicker is displayed in date input', () => {
    cy.visit('/');
    cy.contains('Forms').click();
    cy.contains('Datepicker').click();

    // And use invoke and call prop function for selected date
    // And the test is hardcoded
    cy.contains('nb-card', 'Common Datepicker').find('[placeholder="Form Picker"]').then(input => {
      cy.wrap(input).click();
      cy.get('nb-calendar-day-cell').contains('21').click();
      cy.wrap(input).invoke('prop', 'value').should('contain', 'Jun 21, 2022')
    })
  });

  it('Check radio buttons: checked, unchecked, disabled', () => {
    cy.visit('/');
    cy.contains('Forms').click();
    cy.contains('Form Layouts').click();

    //And Use the special command check() not click()
    //And it's a prover way to check radio-buttons abd checkboxes
    cy.contains('nb-card', 'Using the Grid').find('[type="radio"]').then(radioButtons => {
      cy.wrap(radioButtons).first().check({force: true}).should('be.checked');
      cy.wrap(radioButtons).eq(1).check({force: true}).should('be.checked');
      cy.wrap(radioButtons).first().should('not.be.checked');
    })
  });

  it('Checkboxes', () => {
    cy.visit('/');
    cy.contains('Modal & Overlays').click();
    cy.contains('Toastr').click();

    //And check() method is work only for "check" event not for "uncheck"
    // Zero index checkbox is checked by default
    // And to "uncheck" the element we should use click() method
    cy.get('[type="checkbox"]').eq(0).click({force: true}).should('not.be.checked');
    cy.get('[type="checkbox"]').eq(1).check({force: true}).should('be.checked');
  });

  it('Dropdown and Lists', () => {
    cy.visit('/');

    //1. The First example works only for "Dark" theme mode
    // cy.get('nav nb-select').click();
    // cy.get('.options-list').contains('Dark').click();
    // cy.get('nb-layout-header nav').should('have.css', 'background-color', 'rgb(34, 43, 69)');

    //2. The Second example works for all fourth theme modes
    // And Cypress has special method select() to work with dropdowns list, but we have another tag name in project (nb-select)
    // And we get the "nav nb-select" and save as parameter using .then
    // And here we created a loop using each() method

    cy.get('nav nb-select').then(dropdown => {

      cy.wrap(dropdown).click();

      cy.get('.options-list nb-option').each((listElement, index) => {
        const itemText = listElement.text().trim()

        const colors = {
          "Light": "rgb(255, 255, 255)",
          "Dark": "rgb(34, 43, 69)",
          "Cosmic": "rgb(50, 50, 89)",
          "Corporate": "rgb(255, 255, 255)"
        }

        cy.wrap(listElement).click();
        cy.wrap(dropdown).should('contain', itemText)
        cy.get('nb-layout-header nav').should('have.css', 'background-color', colors[itemText])
        if (index < 3) {
          cy.wrap(dropdown).click();
        }
      })
    })
  });

  it('Web Tables', () => {
    cy.visit('/');
    cy.contains('Tables & Data').click();
    cy.contains('Smart Table').click();

    //Change the Larry's age to 25
    // And use the Table DOM
    cy.get('tbody').contains('tr', 'Larry').then(tableRow => {
      cy.wrap(tableRow).find('i.nb-edit').click();
      cy.wrap(tableRow).find('[placeholder="Age"]').clear().type('25');
      cy.wrap(tableRow).find('.nb-checkmark').click();
      cy.wrap(tableRow).find('td').eq(6).should('contain', '25');
    })

    cy.get('tr').find('a .nb-plus').click();
    //
    cy.get('thead').find('tr').eq(2).then(theadRow => {
      cy.wrap(theadRow).find('input-editor').eq(1).type('Aleksei');
      cy.wrap(theadRow).find('input-editor').eq(2).type('Zolochevskyi');
      cy.wrap(theadRow).find('.nb-checkmark').click();
    });

    cy.get('tbody').find('tr').eq(0).then(firstRow => {
      cy.wrap(firstRow).find('td').eq(2).should('have.text', 'Aleksei')
      cy.wrap(firstRow).find('td').eq(3).should('have.text', 'Zolochevskyi')
    })
    const age = [20, 30, 40, 200]
    cy.wrap(age).each(age => {
      cy.get('thead').find('[placeholder="Age"]').clear().type(age);
      cy.wait(500)
      cy.get('tbody tr').each(tableRow => {
        if (age === 200) {
          cy.wrap(tableRow).find('td').should('contain', 'No data found')
        } else {
          cy.wrap(tableRow).find('td').eq(6).should('contain', age)
        }
      })
    })
  })
});

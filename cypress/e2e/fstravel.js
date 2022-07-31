import "cypress-localstorage-commands"

describe('Clients way', () => {
  it('visit fs', () => {
    cy.visit('https://fstravel.com')
    cy.viewport(1920, 1080, 90)
    cy.location('protocol').should('eq', 'https:')
    cy.wait(2000)
    cy.get('.theme-submit').click()
  })
  it('default booking search', () => {
    cy.get('.calendar__field').click()
    cy.wait(1000)
    cy.get('.calendar-popup__arrow-right').click()
    cy.wait(500)
    cy.get('.calendar-popup__arrow-right').click()
    cy.wait(500)
    cy.get('.calendar-popup__arrow-right').click()
    cy.wait(500)
    cy.get('.calendar-popup__month-body > :nth-child(2) > :nth-child(34)').click()
    cy.wait(1000)
    cy.get('.calendar-popup__month-body > :nth-child(2) > :nth-child(34)').click()
    cy.wait(1000)
    cy.get('.v-btn-yellow').click()
    cy.wait(6000)
  })
  // // it('fucking pop-up close', () => {
  // //   cy.get('#fl-578212')
  // // })
  it('use filter', () => {
    cy.get(':nth-child(2) > .v-input > .v-input__wrap > input').type('Rixos')
    cy.wait(2000)
    cy.get(':nth-child(2) > .v-input > .v-input__wrap > input').clear('Rixos')
    cy.wait(2000)
    cy.get(':nth-child(1) > :nth-child(1) > .v-filter__region-inner > .v-checkbox > .v-text-2 > .v-checkbox__arrow').click()
    cy.wait(2000)
    cy.get(':nth-child(4) > :nth-child(1) > .v-filter__region-inner > .v-checkbox > .v-text-2 > .v-checkbox__arrow').click()
    cy.wait(4000)
    cy.setLocalStorage('dq_user_type', 'client');
    cy.get(':nth-child(1) > .v-hotel-block-wrap > .v-hotel-block > .v-ml-4 > .v-price-block > .v-price-block-right > .v-btn-yellow').click()
    cy.wait(6000)
  })
  // далее нужно прокрутить страницу к перелетам


})
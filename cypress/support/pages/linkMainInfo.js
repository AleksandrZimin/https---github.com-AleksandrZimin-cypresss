export class linkMainInfo {

        visitLogoHeader() {
            cy.get('.v-logo-block > a.v-logo > .v-logo').click()
            cy.wait(1000)
            cy.location().its('href').should('include', 'https://fstravel.com')
    }
        pickUpTour(){
            cy.get('.v-header-nav > .trslt')
              .contains('Подобрать тур')
              .click()
            cy.get('.v-modal-title > :nth-child(1)')
              .contains('Мы поможем подобрать тур')
            cy.get('#app > div > header > div > div.v-header-block > div.v-modal-shadow.popup-selection-new > div > div > div.v-modal-content > form > div:nth-child(1) > label')
              .contains('Откуда')
            cy.get('#app > div > header > div > div.v-header-block > div.v-modal-shadow.popup-selection-new > div > div > div.v-modal-content > form > div:nth-child(2) > label')
              .contains('Куда')
            cy.get('#app > div > header > div > div.v-header-block > div.v-modal-shadow.popup-selection-new > div > div > div.v-modal-content > form > div.input-date.trslt.input-date-base > div > div > div > label')
              .contains('Дата начала')
            cy.get('#app > div > header > div > div.v-header-block > div.v-modal-shadow.popup-selection-new > div > div > div.v-modal-content > form > div:nth-child(4) > label')
              .contains('Имя')
            cy.get('#app > div > header > div > div.v-header-block > div.v-modal-shadow.popup-selection-new > div > div > div.v-modal-content > form > div:nth-child(5) > label')
              .contains('E-mail')
            cy.get('#app > div > header > div > div.v-header-block > div.v-modal-shadow.popup-selection-new > div > div > div.v-modal-content > form > div:nth-child(6) > div > input')
              .click()
              .type('9858098957')
            cy.get('#app > div > header > div > div.v-header-block > div.v-modal-shadow.popup-selection-new > div > div > div.v-modal-content > form > div:nth-child(7) > span')
              .contains('Желаемый способ связи') 
            cy.get('#app > div > header > div > div.v-header-block > div.v-modal-shadow.popup-selection-new > div > div > div.v-modal-content > form > div:nth-child(7) > div > div:nth-child(1) > label')
              .contains('Телефон')
            cy.get('#app > div > header > div > div.v-header-block > div.v-modal-shadow.popup-selection-new > div > div > div.v-modal-content > form > div:nth-child(7) > div > div:nth-child(2) > label')
              .contains('WhatsApp')
            cy.get('#app > div > header > div > div.v-header-block > div.v-modal-shadow.popup-selection-new > div > div > div.v-modal-footer > div > a')
              .contains('Нажимая «Отправить заявку», я даю согласие на обработку персональных данных') 
        }
}
export class CheckStatusInfo {
    visitSite(URL){
        cy.visit(URL)
    }

    changeView(a,b){
        cy.viewport(a,b) 
    }

    closePopup(){
        cy.get('.theme-submit > [data-v-81bfe444=""]')                       
        .click()
    }

    timeWait(int){
        cy.wait(int)
    }

    checkStatusFromFooter(){
        cy.get(':nth-child(2) > .block > :nth-child(6) > .v-text-16')   
        .scrollIntoView()
        .should('be.visible')
        .click()
    }

    inputBadOrderNumber(orderNumber){
        cy.get(':nth-child(1) > .v-input__wrap > input')                     
        .type(orderNumber)
        .should('have.value', orderNumber)
        .blur()
    }

    inputBadPassportNumber(passportNumber){
        cy.get(':nth-child(3) > .v-input__wrap > input')                     
        .type(passportNumber)
        .should('have.value', passportNumber)
        .blur()
    }

    checkOrderStatusButton(){
        cy.get('.v-text')                                                   
        .click()
    }

    checkBadErrorCode(orderNumber){
        cy.get('.red')                                                       
        .contains('Не найден заказ с номером ' + orderNumber)
    }

    clearOrderNumber(orderNumber){
        cy.get(':nth-child(1) > .v-input__wrap > input') 
        .clear(orderNumber)
    }

    inputValidationOrderNumber(orderNumber){
        cy.get(':nth-child(1) > .v-input__wrap > input') 
        .type(orderNumber)
        .should('have.value', orderNumber)
        .blur()
    }

    checkValidationErrorCodeNumber(){
        cy.get('.v-input__message')                                
        .contains('Поле должно содержать от 3 до 10 символов')
    }

    inputInvalidOrderNumber(orderNumber){
        cy.get(':nth-child(1) > .v-input__wrap > input')                     
        .type(orderNumber)
        .should('have.value', orderNumber)
        .blur()
    }

    clearPassportNumber(passportNumber){
        cy.get(':nth-child(3) > .v-input__wrap > input')
        .clear(passportNumber)
    }

    inputInvalidPassportNumber(passportNumber){
        cy.get(':nth-child(3) > .v-input__wrap > input') 
        .type(passportNumber)
        .should('have.value', passportNumber)
        .blur()
    }

    checkValidationErrorCodePassport(){
        cy.get(':nth-child(3) > .v-input__message')                                
        .contains('Поле должно содержать от 5 до 10 символов')
    }

    checkInvalidPassportErrorCode(){
        cy.get('.red')                                                       
        .contains('Не корректный номер паспорта')
    }

    inputCancelledPassportNumber(passportNumber){
        cy.get(':nth-child(3) > .v-input__wrap > input') 
        .type(passportNumber)
        .should('have.value', passportNumber)
        .blur()
    }

    checkCanselledErrors(){
        cy.get('.v-error-paid')                                              
        .contains('Заказ аннулирован Пожалуйста, свяжитесь с менеджером online@fstravel.com +7 (495) 780-99-29 доб.5103')
    }

    showDocuments(){
        cy.get('.v-text')                                                  
        .click()
    }

    checkTouristContract(){
        cy.get('.col-md-3')                                                 
        .contains('Договор с туристом')
    }

    checkStatusFromHeader(){
        cy.get('.v-header-nav > :nth-child(3) > span')                       
        .click()

        cy.get('[data-v-45d70fe4]')                                        
        .contains('Проверить статус путёвки')
        .click()
    }

    checkPageName(){
        cy.get('.col-md-4')                                                 
        .should('contain.text', 'ПРОВЕРКА СТАТУСА ЗАКАЗА')
    }

    inputValidOrdertNumber(orderNumber){
        cy.get(':nth-child(1) > .v-input__wrap > input') 
        .type(orderNumber)
        .should('have.value', orderNumber)
        .blur()
    }

    inputValidPassportNumber(passportNumber){
        cy.get(':nth-child(3) > .v-input__wrap > input') 
        .type(passportNumber)
        .should('have.value', passportNumber)
        .blur()
    }

    checkPageContent(){
        cy.get('h2.v-text-4')                                              
        .contains('6337109')
    }

    documentsCheck(){
        cy.get(':nth-child(2) > .col-md-3')                                  
        .contains('Памятка туристу')

        cy.get('.col-md-3 > span')
        .contains('Подтверждение для туриста')
    }

    touristsPageButton(){
        cy.get(':nth-child(1) > .v-basket-options > :nth-child(2)')          
        .click()
    }

    touristsPageChecks(){
        cy.get('.v-traveller-header > .v-text-4')
        .should('contain.text', 'Данные по туристам')

        cy.get('.v-mb-1 > .v-select > .v-select__wrap > .v-select__title > .v-input > .v-input__wrap')
        .should('be.visible')

        cy.get('.v-mt-2 > :nth-child(2) > .v-select > .v-select__wrap > .v-select__title')  
        .should('be.visible')

        cy.get('.v-traveller-card > .v-mt-5 > :nth-child(3) > :nth-child(1) > .v-input > .v-input__wrap > input')  
        .should('be.visible')

        cy.get('.v-traveller-card > .v-mt-5 > :nth-child(3) > :nth-child(1) > .v-input > .v-input__wrap > input')
        .should('be.visible')

        cy.get(':nth-child(3) > :nth-child(3) > .input-date > .mx-datepicker > .mx-input-wrapper > .v-input > .v-input__wrap')
        .should('be.visible')

        cy.get('.v-traveller-card > .v-mt-5 > .v-mt-3 > :nth-child(1) > .v-input > .v-input__wrap')
        .should('be.visible')

       cy.get('.v-traveller-card > .v-mt-5 > .v-mt-3 > :nth-child(3) > .input-date > .mx-datepicker > .mx-input-wrapper > .v-input > .v-input__wrap')
        .should('be.visible')

        cy.get('.v-traveller-card > :nth-child(8) > :nth-child(1) > .v-input > .v-input__wrap')
        .should('be.visible')

        cy.get('.v-traveller-card > :nth-child(8) > :nth-child(2) > .v-select-phone > .v-select-phone__wrap > .box > .v-input > .v-input__wrap > input')
        .should('be.visible')

        cy.get('.popup-tourist > :nth-child(1) > :nth-child(1) > :nth-child(1)')  
        .click()
    }

    tarifPageButton(){
        cy.get(':nth-child(1) > .v-basket-options > :nth-child(3)')  
        .click()
    }

    tarifPageCheck(){
        cy.get('#v-basket-body > div:nth-child(3) > div > div:nth-child(2) > div.v-modal-shadow.popup-alternative > div > div > div.v-modal-content > button')
        .contains('Выбрать тариф')
        .click()
    }

    


   




}

export const checkStatusInfo = new CheckStatusInfo()
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
        cy.get(':nth-child(2) > .block > :nth-child(5) > .v-text-16')
        .scrollIntoView()
        .should('be.visible')
        .click()
    }

    inputOrderNumber(orderNumber){
        cy.get(':nth-child(1) > .v-input__wrap > input')                     
        .type(orderNumber)
        .should('have.value', orderNumber)
        .blur()
    }

    inputPassportNumber(passportNumber){
        cy.get(':nth-child(3) > .v-input__wrap > input')                     
        .type(passportNumber)
        .should('have.value', passportNumber)
        .blur()
    }

    clickOrderStatusButton(){
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

    clearPassportNumber(passportNumber){
        cy.get(':nth-child(3) > .v-input__wrap > input')
        .clear(passportNumber)
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

    checkValidationErrorCodePassport(){
        cy.get(':nth-child(3) > .v-input__message')                                
        .contains('Поле должно содержать от 5 до 10 символов')
    }

    checkInvalidPassportErrorCode(){
        cy.get('.red')                                                       
        .contains('Не корректный номер паспорта')
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

        cy.get('#app > div > header > div:nth-child(1) > div.v-header-block > div.v-header-container > div > div:nth-child(4) > div > div:nth-child(3) > a')                                        
        .contains('Проверить статус путёвки')
        .click()
    }

    checkPageName(){
        cy.get('.col-md-4')                                                 
        .should('contain.text', 'ПРОВЕРКА СТАТУСА ЗАКАЗА')
    }

    checkPageContent(orderNumber){
        cy.get('h2.v-text-4')                                              
        .contains(orderNumber)
    }

    documentsCheck(){
        cy.get(':nth-child(2) > .col-md-3')                                  
        .contains('Памятка туристу')

        cy.get('#app > div > div.container.v-mt-4 > div.v-mb-5 > div > div:nth-child(3) > div.col-md-3.v-text-3.v-dark')                                  
        .contains('Справка о стоимости авиабилета')

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

    agentLogin() {
        cy.get('.v-account-block > .v-icon-user-14')
        .click()

        cy.get('.form__status > :nth-child(2)')
        .click()

        cy.get('#email')
        .click()

        cy.get('#email')
        .type('testfs111@yandex.ru')

        cy.get('#password')
        .type('Zimin1993!')

        cy.get('.form > :nth-child(5)')
        .click()

        .wait(1000)
        
        cy.get('.v-account-block > .v-icon-user-14')
        .click()

        cy.get('#app > div > header > div > div.v-header-block > div > div > div.v-header-right > div > div.account > div.account__auth > div > div > ul > li:nth-child(1) > a')
        .click()

        cy.get('#login')
        .click()
        .type('testfs111@yandex.ru')

        cy.get('#passwd')
        .click()
        .type('Zimin1993!')

        cy.get('#loginForm > div:nth-child(8) > button')
        .click()
    }

    agentCheckStatus() {
        cy.get('#header > nav > ul > li:nth-child(4) > ul > li:nth-child(2) > a')
        .click()
    }

    clickCheckButton() {
        cy.get('#check_confirm > div.container > button')
        .click()
    }

    validationAgentCheckStatus() {
        cy.get('#notify-container > div > div > span.notify-text')
        .contains('Не указан номер заявки')
    }

    inputAgentOrderNumber(orderNumber) {
        cy.get('#check_confirm > div.container > input')
        .type(orderNumber)
    }

    clearAgentOrderNumber(orderNumber) {
        cy.get('#check_confirm > div.container > input')
        .type(orderNumber)
    }

    validationAgentCheckNoValidStatus() {
        cy.get('#modalContainer > div.modalTitle')
        .contains('Информация о заявке Заявка не найдена')
    }

    closeAgentValidationPopup() {
        cy.get('#modalContainer > div.modalTitle > a')
        .click()
    }    

    validationAgentCheckNoValidStatus() {
        cy.get('#modalContainer > div.modalTitle')
        .contains('Информация о заявке')
    }

    checkAgentNumberStatusPopup(orderNumber) {
        cy.get('#basicModalContent > div > table > thead > tr > th > b')
        .contains(orderNumber)
    }

    checkAgentOrderStatusPopup() {
        cy.get('#basicModalContent > div > table > tbody > tr:nth-child(1) > td:nth-child(2) > span')
        .contains('Подтверждена')
    }

    checkAgentPayStatusPopup() {
        cy.get('#basicModalContent > div > table > tbody > tr.odd > td:nth-child(2)')
        .contains('Оплачена')
    }
    
    checkAgentDocumentStatusPopup() {
        cy.get('#basicModalContent > div > table > tbody > tr:nth-child(3) > td:nth-child(2) > b')
        .contains('	НЕ ГОТОВЫ К ВЫДАЧЕ')
    }
}

export const checkStatusInfo = new CheckStatusInfo()
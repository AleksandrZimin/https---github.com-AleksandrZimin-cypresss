/// <reference types="Cypress" />
import { checkStatusInfo } from "../support/pages/checkStatusInfo"

 
describe('check status', () => {
    it('Вход на сайт', () => {
      checkStatusInfo.visitSite('https://prerelease.fstravel.com/statuscheck')
    }),

    it('Изменение размера окна', () => {
      checkStatusInfo.changeView(1980,1250)
    }),

    it('Закрытие поп-апа', () => {
      checkStatusInfo.closePopup()
    }),

    it('Хардкодный таймаут', () => {
      checkStatusInfo.timeWait(1000)
    }),

    it('Ввод несуществующих данных в поле "Номер заказа"', () => {
      checkStatusInfo.closePopup()
      checkStatusInfo.inputOrderNumber(111111)
    }),

    it('Ввод несуществующих данных в поле "Номер паспорта"', () => {
      checkStatusInfo.inputPassportNumber(111111)
    }),

    it('Нажать на кнопку "Проверить статус заказа"', () => {
      checkStatusInfo.clickOrderStatusButton()
    }),

    it('Проверка текста ошибки Формы"', () => {
      checkStatusInfo.closePopup()
      checkStatusInfo.checkBadErrorCode(111111)
    }),

    it('Очистка поля "Номер заказа"', () => {
      checkStatusInfo.clearOrderNumber(111111)
    }),

    it('Ввод невалидных данных в поле "Номер заказа"', () => {
      checkStatusInfo.inputOrderNumber(1)
    }),

    it('Проверка ошибка валидации поля"', () => {
      checkStatusInfo.checkValidationErrorCodeNumber()
    }),

    it('Очистка поля "Номер заказа"', () => {
      checkStatusInfo.clearOrderNumber(1)
    }),

    it('Очистка поля "Номер паспорта"', () => {
      checkStatusInfo.clearPassportNumber(111111)
    }),

    it('Ввод данных аннулированного заказа в поле "Номер заказа"', () => {
      checkStatusInfo.inputOrderNumber(6333566)
    }),

    it('Ввод несуществующих данных в поле "Номер паспорта"', () => {
      checkStatusInfo.inputPassportNumber(2)
    }),
    
    it('Проверка ошибка валидации поля"', () => {
      checkStatusInfo.checkValidationErrorCodePassport()
    }),

    it('Очистка поля "Номер паспорта"', () => {
      checkStatusInfo.clearPassportNumber(2)
    }),
      
    it('Ввод некорректных данных в поле "Номер паспорта"', () => {
      checkStatusInfo.inputPassportNumber(1234567)
    }),
      
    it('Нажать на кнопку "Проверить статус заказа"', () => {
      checkStatusInfo.clickOrderStatusButton()
    }),
    
    it('Проверка текста ошибки Формы"', () => {
      checkStatusInfo.closePopup()
      checkStatusInfo.checkInvalidPassportErrorCode()
    }),

    it('Очистка поля "Номер паспорта"', () => {
      checkStatusInfo.clearPassportNumber(1234567)
    }),
      
    it('Ввод аннулированных данных в поле "Номер паспорта"', () => {
      checkStatusInfo.inputPassportNumber(123456)
    }),

    it('Нажать на кнопку "Проверить статус заказа"', () => {
      checkStatusInfo.clickOrderStatusButton()
    }),
      
    it('Хардкодный таймаут', () => {
      checkStatusInfo.timeWait(1000)
    }),
    
    it('Нажать кнопку "Показать документы', () => {
      checkStatusInfo.closePopup()
      checkStatusInfo.showDocuments()
    }),

    it('Проверить плашку со статусом заказа', () => {
      checkStatusInfo.checkCanselledErrors()
    }),

    it('Проверка наличия документов', () => {
      checkStatusInfo.checkTouristContract()
    }),

    it('Вход на сайт', () => {
      checkStatusInfo.visitSite('https://prerelease.fstravel.com/statuscheck')
    }),

    it('Проверка названия страницы', () => {
      checkStatusInfo.closePopup()
      checkStatusInfo.checkPageName()
    }),

    it('Ввод данных оплаченного заказа в поле "Номер заказа"', () => {
      checkStatusInfo.inputOrderNumber(6337109)
    }),

    it('Ввод данных оплаченного заказа в поле "Номер паспорта"', () => {
      checkStatusInfo.inputPassportNumber(432909)
    }),

    it('Нажать на кнопку "Проверить статус заказа"', () => {
      checkStatusInfo.clickOrderStatusButton()
    }),

    it('Нажать кнопку "Показать документы', () => {
      checkStatusInfo.showDocuments()
    }),

    it('Проверка контента', () => {
      checkStatusInfo.checkPageContent(6337109)
    }),

    it('Проверка прикрепленных документов', () => {
      checkStatusInfo.documentsCheck()
    }),

    it('Открыть поп-ап туристы', () => {
      checkStatusInfo.touristsPageButton()
    }),

    it('Проверка полей поп-апа PS ПОКА НЕ НУЖНО', () => {
      checkStatusInfo.touristsPageChecks()
    }),

    it('Открыть поп-ап Выберите тариф', () => {
      checkStatusInfo.tarifPageButton()
    }),

    it('Открыть поп-ап Выберите тариф', () => {
      checkStatusInfo.tarifPageCheck()
    }),

    it('Переход на страницу проверки статуса заказа через подвал сайта', () => {
      checkStatusInfo.checkStatusFromFooter()
    }),

    it('Авторизоваться Агентом', () => {
      checkStatusInfo.closePopup()
      checkStatusInfo.agentLogin()
      checkStatusInfo.timeWait(1000)
    })

    it('Переход на страницу проверки статуса заказа Агента', () => {
      checkStatusInfo.agentCheckStatus()
    })

    it('Нажать кнопку "Проверить"', () => {
    checkStatusInfo.clickCheckButton()
    })

    it('Проверка валидации формы', () => {
      checkStatusInfo.validationAgentCheckStatus()
    })

    it('Внести не валидное значение', () => {
      checkStatusInfo.inputAgentOrderNumber(1)
    })

    it('Нажать кнопку "Проверить"', () => {
      checkStatusInfo.clickCheckButton()
    })

    it('Проверка валидации формы', () => {
      checkStatusInfo.validationAgentCheckNoValidStatus()
    })

    it('Закрытие поп апа с ошибкой', () => {
      checkStatusInfo.closeAgentValidationPopup()
    })

    it('Проверка оплаченного заказа', () => {
      checkStatusInfo.inputAgentOrderNumber(6337109)
    })

    it('Нажать кнопку "Проверить"', () => {
      checkStatusInfo.clickCheckButton()
    })

    it('Проверка названия поп апа', () => {
      checkStatusInfo.validationAgentCheckNoValidStatus()
    })

    it('Проверка номера заявки в поп апе', () => {
      checkStatusInfo.checkAgentNumberStatusPopup(6337109)
    })

    it('Проверка статуса заявки в поп апе', () => {
      checkStatusInfo.checkAgentOrderStatusPopup()
    })

    it('Проверка оплаты заявки в поп апе', () => {
      checkStatusInfo.checkAgentPayStatusPopup()
    })

    it('Проверка документы заявки в поп апе', () => {
      checkStatusInfo.checkAgentDocumentStatusPopup()
    })

    it('Закрытие поп апа с ошибкой', () => {
      checkStatusInfo.closeAgentValidationPopup()
    })







    



})


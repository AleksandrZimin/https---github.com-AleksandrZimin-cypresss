 /// <reference types="Cypress" />
 import { checkStatusInfo } from "../support/pages/checkStatusInfo"
 import { linkMainInfo } from "../support/pages/linkMainInfo"

 
describe('clico on links', () => {
    it('checkMainLinks', () => {

      checkStatusInfo.visitSite('https://fstravel.com')
      checkStatusInfo.changeView(1980,1250)
      checkStatusInfo.closePopup()
      checkStatusInfo.timeWait(1000)
      linkMainInfo.visitLogoHeader()
      linkMainInfo.pickUpTour()
    })
})

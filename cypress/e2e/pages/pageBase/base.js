require('cypress-xpath');
require('cypress-real-events');

// DSL

export default class PageBase {
    clickElement(element) {
        element().click()
        if (Cypress.env('saveScreenshot')) { cy.screenshot('click in: ' + element) }
    }

    sendKeys(element, text) {
        element().type(text)
        if (Cypress.env('saveScreenshot')) { cy.screenshot('send key: ' + element) }
    }

    mouseOver(element) {        
        cy.contains("a", element).realHover('mouse')
        if (Cypress.env('saveScreenshot')) { cy.screenshot('mouse houver: ' + element) }
    }

    //visibleContains podemos usar para todas as outras classes
    visibleContains(element) { 
        if (Cypress.env('saveScreenshot')) { cy.screenshot('visible element: ' + element) }
        cy.contains(element).should('be.visible')
    }


}
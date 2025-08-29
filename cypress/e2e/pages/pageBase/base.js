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

     visibleContainsAlert(element, text) { 
        element().should('contain.text', text, { timeout: 15000 })
        if (Cypress.env('saveScreenshot')) { cy.screenshot('visible element: ' + element) }
    } 
    

    select_countries_dropdown_menu_OP(element, text) {
        element().select(text)
        if (Cypress.env('saveScreenshot')) { cy.screenshot('country selected: ' + element) }
    }


    // Adicionar este método na PageBase
sendKeysOrClear(element, text) {
  element().clear();               // Sempre limpa primeiro
  if (text) element().type(text); // Só digita se tem texto
}

}
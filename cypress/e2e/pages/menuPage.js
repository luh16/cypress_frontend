require('cypress-xpath');
import PageBase from './pageBase/base';

export default class MenuPage extends PageBase {
    elements = {
      menuForms:    () => cy.get('#forms'),
      menuRegister:    () => cy.get('#register'),
      menuLogin:      () => cy.get('#login'),

     

    }
  






    

    clicarMenuForms() {

      this.elements.menuForms().click()
    }


    clickMenuRegister() {
      this.elements.menuRegister().click()
    }

    
    clickMenuLogin() {
       this.elements.menuLogin().click()
    }


    
  }
  
  //
  
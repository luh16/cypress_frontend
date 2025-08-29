require('cypress-xpath');
import PageBase from './pageBase/base';

export default class MenuPage extends PageBase {
    elements = {
      menuForms:    () => cy.get('#forms'),
      menuRegister:    () => cy.get('#register'),
      

    }
  

    clicarMenuForms() {

      this.elements.menuForms().click()
    }


      clickMenuRegister() {
      this.elements.menuRegister().click()
    }



    
    
  }
  
  //
  
require('cypress-xpath');
import PageBase from './pageBase/base';

export default class MenuPage extends PageBase {
    elements = {
      menuForms:    () => cy.get('#forms'),
      

    }
  

    clicarMenuForms() {

      this.elements.menuForms().click()
    }




    
    
  }
  
  //
  
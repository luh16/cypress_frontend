require('cypress-xpath');
import PageBase from './pageBase/base';

export default class LoginPage extends PageBase {
    elements = {
      popUpKabum:    () => cy.get('button[id="onetrust-accept-btn-handler"]'),
      inputLogin:    () => cy.get('input[name="login"]'),
      inputPassword: () => cy.get('input[name="password"]'),
      buttomLogin:   () => cy.get('button[data-testid="login-submit-button"]')

    }
  

    clickPopUp() {
      this.elements.popUpKabum().click()
    }

  
    fillEmail(email) {
      this.elements.inputLogin().type(email)
    }

    fillEmailBase(email) {
      this.sendKeys(this.elements.inputLogin, email)
    }
  
    fillPassword(password) {
      this.elements.inputPassword().type(password);
    }
  
    clickLoginButton() {
      this.elements.buttomLogin().click();
    }
  
    dadosInvalidosVisivelLogin(element) {    
    this.visibleContains(element)
    
  }
    
  }
  
  //
  
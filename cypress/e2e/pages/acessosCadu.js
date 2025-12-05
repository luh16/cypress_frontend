require('cypress-xpath');
import PageBase from './pageBase/base';

export default class AcessosCaduPage extends PageBase {
    elements = {
      
      inputMember:       () => cy.get('#identifier'),
      inputPassword:     () => cy.xpath('//input[@type="password"]'),
      btnContinuar:      () => cy.xpath('//button[@text="Continuar"]'),
      btnCookies:        () => cy.get('#onetrust-accept-btn-handler'),
    }
  
   
    preencherMember(text) {
      
      this.elements.inputMember().type(text)
    }

    limparMemberCamp(){
      this.elements.inputMember().clear()
    }
     preencherPassword(text) {
      
      this.elements.inputPassword().type(text)
    }

    limparPassCamp(){
      this.elements.inputPassword().clear()
    }

    clicarBtnContinuar() {
      cy.wait(1000);
      this.elements.btnContinuar().click()
    }
    
    aceitarCookies() {
      cy.wait(1000);
      this.elements.btnCookies().click()
    }




 
    validarAlertCadastroFeitoComSucesso(){
        this.elements.alertCadastroFeitoComSucesso().should('have.text', "The account has been successfully created!")
    }


    
    
  }
  
  //
  
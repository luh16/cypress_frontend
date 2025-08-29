require('cypress-xpath');
import PageBase from './pageBase/base';

export default class CadastroPage extends PageBase {
    elements = {
      
      firstName:    () => cy.get('#firstName'),
      lastName:     () => cy.get('#lastName'),
      phone:        () => cy.get('#phone'),
      countries_dropdown_menu:     () => cy.get('#countries_dropdown_menu'),
      //countries_op: () => cy.get('option[value="Brazil"]'),
      //countries_dropdown: () => cy.get('#countries_dropdown_menu').select('Brazil'),
      email: () => cy.get('#emailAddress'),
      password: () => cy.get('#password'),
      aceitarTermos: () => cy.get('#exampleCheck1'),
      registerButton: () => cy.get('#register-button'),
      inputCheckBox: () => cy.get('#registerBtn'),
      alertCadastroFeitoComSucesso: () => cy.get('#message')

    }
  
   

    preencherPrimeiroNome(text) {
      this.elements.firstName().type(text)
    }

     preencherUltimoNome(text) {
      this.elements.lastName().type(text)
    }

    selecionarRegiaoRegister(regiao) {
       this.select_countries_dropdown_menu_OP(this.elements.countries_dropdown_menu, regiao)
    }
    
   
    preencherNumeroTelefone(text) {
      this.elements.phone().type(text)
    }

    preencherEmail(text) {
      this.elements.email().type(text)
    }


    preencherSenha(text) {
      this.elements.password().type(text)
    }

    clickAceitarTermos() {
      this.elements.aceitarTermos().click()
    }

    clicarEmRegistrar() {
      this.elements.inputCheckBox().click()
    }



    cadastroCriadoComSucesso(text) {
      this.visibleContainsAlert(this.elements.alertCadastroFeitoComSucesso,text)
    }

    //exemplo de validação na page, faz a mesma coisa que o cadastroCriadoComSucesso
    validarAlertCadastroFeitoComSucesso(){
        this.elements.alertCadastroFeitoComSucesso().should('have.text', "The account has been successfully created!")
    }


    
    
  }
  
  //
  
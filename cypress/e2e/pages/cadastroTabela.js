require('cypress-xpath');
import PageBase from './pageBase/base';
export default class cadastroTabelaPage extends PageBase {

    elements = {
        formRegister: () => cy.contains('Register Form'),
        firstName: () => cy.get('#firstName'),
        lastName: () => cy.get('#lastName'),
        phone: () => cy.get('#phone'),
        email: () => cy.get('#emailAddress'),
        password: () => cy.get('#password'),
        aceitarTermos: () => cy.get('#exampleCheck1'),
        inputCheckBox: () => cy.get('#registerBtn'),
        textCreated: () => cy.contains('The account has been successfully created!'),

        invalidEmail: () => cy.get('#emailAddress:valid'),
        invalidPassword: () => cy.get('#password:invalid'),
        //:valid e :invalid são propiedades do CSS que mudam de acordo com uma com uma condição é igual o :houver
    }



    cadastroDeUsuario(name, lastName, phoneNumber, emailAddress, pass) {
        this.elements.formRegister().should('have.text', 'Register Form')
        this.elements.firstName().type(name)
        this.elements.lastName().type(lastName)
        this.elements.phone().type(phoneNumber)

        //
        this.sendKeysOrClear(this.elements.email, emailAddress);
        //this.elements.email().type(emailAddress)
        //this.elements.password().type(pass)
        this.sendKeysOrClear(this.elements.password, pass);
        //
        this.elements.aceitarTermos().click()
    }

    
    clicarCadastrar() {
        this.elements.inputCheckBox().click()
    }
    textSucesso() {
        this.elements.textCreated().should('have.text', 'The account has been successfully created!')
    }
//cy.get('seletor').should('exist') para verificar sua presença, ou cy.get('seletor').should('be.visible') 
//para verificar que ele existe e está visível. O Cypress 
//tem um tempo limite padrão para comandos DOM, o que significa 
//que ele tenta novamente automaticamente, então esperas adicionais não são necessárias. 
    alertErroCamposObrigatorios() {
            //this.elements.textCreated().should('have.text', 'The account has been successfully created!')
            this.elements.invalidEmail().should('be.visible') 
            this.elements.invalidPassword().should('be.visible')
    }
}
import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import LoginPage from '../pages/loginPage';
import LoginPageQaPratice from '../pages/loginQaPratice';
import MenuPage from '../pages/menuPage';

const loginPage = new LoginPage
const loginPageQaPratice = new LoginPageQaPratice
const menuPage = new MenuPage




Given("que acesso o site QA Pratice", () => {
    
  cy.visit('/'); // A URL de login do Kabum!
  menuPage.clicarMenuForms()
  loginPageQaPratice.clickMenuLogin()


});

When('eu preencho os dados para cadastro', () => {
  loginPageQaPratice.preencherPrimeiroNome('Fulano')
  loginPageQaPratice.preencherUltimoNome('Silva')
  loginPageQaPratice.selecionarRegiaoRegister('Brazil')
  loginPageQaPratice.preencherNumeroTelefone('11999999999')
  loginPageQaPratice.preencherEmail('fulano.silva@example.com')
  loginPageQaPratice.preencherSenha('Abc@1234')
  loginPageQaPratice.clickAceitarTermos()

});


When('eu clico no botão registrar', () => {
  loginPageQaPratice.clicarEmRegistrar()
});

Then('deve ser possivel cadastrar usuario com sucesso', () => {
  loginPageQaPratice.cadastroCriadoComSucesso('The account has been successfully created!')


});






When('eu preencho o campo de email com {string} e o campo de senha com {string}', (email, password) => {
  loginPage.clickPopUp()
  //loginPage.fillEmail(email)
  //Utilizando base pra poder simular DSL, é que ela foca em facilitar tarefas específicas dentro de um domínio ornando o código mais expressivo e mais fácil de escrever e entender
  loginPage.fillEmailBase(email)
  loginPage.fillPassword(password)
  
});

When('eu clico no botão de login', () => {
  loginPage.clickLoginButton()
});

//Then('eu devo ser redirecionado para a página inicial do Kabum!', () => {
//  cy.url().should('include', 'https://www.kabum.com.br/'); // Verifica o redirecionamento para a página inicial
//
//});

Then('deve ser apresentada a mensagem de erro {string}', (text) => {
  //cy.contains('E-mail, CPF/CNPJ ou senha incorretos.').should('be.visible'); contains pra quando não tiver xpath
  //cy.allure().step(`Verificando mensagem de erro: ${text}`);
  loginPage.dadosInvalidosVisivelLogin(text)
  //cy.allure().attachment('screenshot-error-message', cy.screenshot('error-message', { capture: 'viewport' }), 'image/png'
  //);
  //cy.get('.user-info').should('be.visible');  // Verifica se a conta do usuário está visível após o login (ajuste conforme o elemento real do site)
});


// dica para utilizar as fixtures igual fazemos em backend
//----------------------------------------------------------------------------
//When("insiro os dados do usuario", () => {
//    cy.fixture('credentials').as('userData')
//    cy.get('@userData').then((userJson) => {
//        cy.get(elements.inputEmail).type(userJson.email).should('have.value', user.email)
//        cy.log('Email inserido')
//        cy.get(elements.inputPassword).type(user.password).should('have.value', user.password)
//        cy.log('Senha inserida')
//    })
//});
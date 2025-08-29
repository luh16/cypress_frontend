import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import CadastroTabelaPage from '../pages/cadastroTabela';

const cadastroTabelaPage = new CadastroTabelaPage

Given("que estou na página de cadastro", () => {
    cy.visit('/register'); 
});
When("preencho todos os campos obrigatórios {string} {string} {string} {string} {string}", (name, lastName, phoneNumber, emailAddress, pass) => {
    cadastroTabelaPage.cadastroDeUsuario(name, lastName, phoneNumber, emailAddress, pass)
});
When("clico no botão cadastrar", () => {
    cadastroTabelaPage.clicarCadastrar()
});
Then("devo ver a mensagem de sucesso", () => {
    cadastroTabelaPage.textSucesso()
});
Then("devo ver o alert de erro referente aos campos obrigatorios", () => {
    cadastroTabelaPage.alertErroCamposObrigatorios()
});
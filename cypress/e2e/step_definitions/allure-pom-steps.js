//import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
//import LoginPage from '../pages/loginPage';
//
//const loginPage = new LoginPage();
//
//Given('que estou na página de login do Kabum', () => {
//  cy.allure().step('Acessando a página de login do Kabum');
//  cy.visit('/');
//  cy.allure().attachment(
//    'screenshot-login-page',
//    cy.screenshot('login-page-kabum', { capture: 'viewport' }),
//    'image/png'
//  );
//});
//
//When('eu preencho o campo de email com {string} e o campo de senha com {string}', (email, password) => {
//  cy.allure().parameter('Email', email);
//  cy.allure().parameter('Senha', '*****'); // Não exibir a senha real no relatório
//  
//  cy.allure().step(`Preenchendo email: ${email}`);
//  loginPage.clickPopUp();
//  loginPage.fillEmailBase(email);
//  
//  cy.allure().step('Preenchendo senha');
//  loginPage.fillPassword(password);
//});
//
//When('eu clico no botão de login', () => {
//  cy.allure().step('Clicando no botão de login');
//  loginPage.clickLoginButton();
//});
//
//Then('deve ser apresentada a mensagem de erro {string}', (text) => {
//  cy.allure().step(`Verificando mensagem de erro: ${text}`);
//  loginPage.dadosInvalidosVisivelLogin(text);
//  cy.allure().attachment(
//    'screenshot-error-message',
//    cy.screenshot('error-message', { capture: 'viewport' }),
//    'image/png'
//  );
//});
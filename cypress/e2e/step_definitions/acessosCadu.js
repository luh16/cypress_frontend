import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import AcessosCaduPage from '../pages/acessosCadu';

import MenuPage from '../pages/menuPage';

//instanciando as classes
const acessosCaduPage = new AcessosCaduPage()

const menuPage = new MenuPage()


Given("que acesso o portal Smiles", () => {
  cy.visit('/');
  acessosCaduPage.aceitarCookies()
});

When('que realizo login', () => {
  acessosCaduPage.preencherMember('17461680218')
  //acessosCaduPage.limparMemberCamp()
  //acessosCaduPage.preencherMember('17461680218')
  //acessosCaduPage.limparMemberCamp()
  //acessosCaduPage.preencherMember('17461680218')
  //acessosCaduPage.limparMemberCamp()
  //acessosCaduPage.preencherMember('17461680218')
  //acessosCaduPage.limparMemberCamp()
  //acessosCaduPage.preencherMember('17461680218')
  //acessosCaduPage.limparMemberCamp()
  //acessosCaduPage.preencherMember('17461680218')
  
  acessosCaduPage.clicarBtnContinuar()
  acessosCaduPage.preencherPassword('1010')
  //acessosCaduPage.limparPassCamp()
  //acessosCaduPage.preencherPassword('1010')
  //acessosCaduPage.limparPassCamp()
  //acessosCaduPage.preencherPassword('1010')
  //acessosCaduPage.limparPassCamp()
  //acessosCaduPage.preencherPassword('1010')
  //acessosCaduPage.limparPassCamp()
  //acessosCaduPage.preencherPassword('1010')
  //acessosCaduPage.limparPassCamp()
  //acessosCaduPage.preencherPassword('1010')
  //acessosCaduPage.limparPassCamp()
  //acessosCaduPage.preencherPassword('1010')
  acessosCaduPage.clicarBtnContinuar()
});


Then('validar elementos modal Nao foi Possivel Acessar a Conta', () => {
  //cadastroPage.cadastroCriadoComSucesso('The account has been successfully created!')


});





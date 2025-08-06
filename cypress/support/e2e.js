// Import commands.js using ES2015 syntax:
import './commands'
import '@shelex/cypress-allure-plugin';

// Tratamento de exceções não capturadas
Cypress.on('uncaught:exception', (err, runnable) => {
  // retornando false impede que o Cypress falhe o teste
  console.log('Erro não capturado:', err.message)
  return false
})

afterEach(function () {
  const tituloTeste = this.currentTest.title.replace(/[:\/]/g, '-'); // Nome do teste formatado
  const screenshotFolder = `after-each/${tituloTeste}`;

  // Screenshot sempre, falha ou sucesso
  cy.screenshot(screenshotFolder, { capture: 'viewport' });

  // Anexa no Allure se falhou
  if (this.currentTest.state === 'failed') {
    const specName = Cypress.spec.name;
    const screenshotPath = `screenshots/${specName}/${screenshotFolder}.png`;
    cy.allure().attachment('Screenshot on failure', screenshotPath, 'image/png');
  }
});

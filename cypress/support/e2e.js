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

  // ALTERAÇÃO 1: NÃO chamar cy.* dentro do onAfterScreenshot
  // Apenas guardar o caminho do arquivo gerado pelo Cypress
  let lastScreenshotPath;
  cy.screenshot(screenshotFolder, {
    capture: 'runner',
    onAfterScreenshot: (_el, props) => {
      lastScreenshotPath = props.path; // caminho completo do screenshot
    },
  });

  // ALTERAÇÃO 2: Anexar ao Allure DENTRO da fila do Cypress
  cy.then(() => {
    const label = this.currentTest.state === 'failed'
      ? 'Screenshot on failure'
      : 'Screenshot on pass';

    if (lastScreenshotPath) {
      cy.allure().fileAttachment(label, lastScreenshotPath, 'image/png');
    }
  });

  // ALTERAÇÃO: removido o anexo manual anterior por caminho "montado" (evita anexos sem imagem)
  // if (this.currentTest.state === 'failed') {
  //   const specName = Cypress.spec.name.replace(/\\/g, '/');
  //   const screenshotPath = `cypress/screenshots/${specName}/${screenshotFolder}.png`;
  //   cy.allure().fileAttachment('Screenshot on failure', screenshotPath, 'image/png');
  // }
});

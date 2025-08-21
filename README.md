
## 🏗️ Arquitetura do Projeto

### 1. **BDD com Cucumber**


### 2. **Step Definitions**

**Implementação dos Passos** (`cypress/e2e/step_definitions/login.js`):

### 3. **Page Object Model (POM)**

**Vantagens do POM:**
- 🔄 Reutilização de código
- 🛠️ Manutenção facilitada
- 📖 Código mais legível
- 🎯 Separação de responsabilidades

**Estrutura da Page Object** (`cypress/e2e/pages/loginPage.js`):
```javascript
import PageBase from './pageBase/base';

class LoginPage extends PageBase {
  constructor() {
    super();
  }

  // Seletores
  elements = {
    popUp: '.sc-jSMfEi.dPyBJI',
    loginField: '#login',
    passwordField: '#password',
    loginButton: '.sc-eDvSVe.gxdyHx'
  };

  // Métodos de interação
  clickPopUp() {
    this.clickElement(this.elements.popUp);
  }

  fillEmailBase(email) {
    this.sendKeys(this.elements.loginField, email);
  }

  fillPassword(password) {
    this.sendKeys(this.elements.passwordField, password);
  }

  clickLoginButton() {
    this.clickElement(this.elements.loginButton);
  }

  dadosInvalidosVisivelLogin(text) {
    this.visibleContains(text);
  }
}

export default LoginPage;
```

### 4. **Page Base (Classe Pai)**

**Métodos Utilitários** (`cypress/e2e/pages/pageBase/base.js`):
```javascript
class PageBase {
  clickElement(selector) {
    cy.get(selector).should('be.visible').click();
    cy.screenshot('click-element', { capture: 'viewport' });
  }

  sendKeys(selector, text) {
    cy.get(selector).should('be.visible').clear().type(text);
    cy.screenshot('send-keys', { capture: 'viewport' });
  }

  visibleContains(text) {
    cy.contains(text).should('be.visible');
    cy.screenshot('visible-contains', { capture: 'viewport' });
  }

  mouseOver(selector) {
    cy.get(selector).realHover();
  }
}

export default PageBase;
```

## 📊 Integração com Allure Report

### Configuração Automática

O projeto está configurado para:
- ✅ Capturar screenshots automaticamente
- 📋 Gerar relatórios detalhados
- 🔗 Anexar evidências em caso de falha

### Usando Anotações Allure

```javascript
// Adicionar passo no relatório
cy.allure().step('Descrição do passo');

// Adicionar parâmetro
cy.allure().parameter('Email', 'usuario@teste.com');

// Adicionar anexo
cy.allure().attachment('Screenshot', screenshotPath, 'image/png');

// Exemplo prático nos steps
When('eu preencho o campo de email com {string}', (email) => {
  cy.allure().step(`Preenchendo email: ${email}`);
  cy.allure().parameter('Email utilizado', email);
  loginPage.fillEmailBase(email);
});

// Adicionar severidade
cy.allure().severity('critical');

// Adicionar feature e story
cy.allure().feature('Autenticação');
cy.allure().story('Login de usuário');

// Adicionar descrição
cy.allure().description('Este teste valida o processo de login com credenciais inválidas');
```

## ⚙️ Configurações Importantes

### cypress.config.js
```javascript
const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const { addCucumberPreprocessorPlugin } = require("@badeball/cypress-cucumber-preprocessor");
const { createEsbuildPlugin } = require("@badeball/cypress-cucumber-preprocessor/esbuild");
const allureWriter = require('@shelex/cypress-allure-plugin/writer');

module.exports = defineConfig({
  defaultCommandTimeout: 30000,
  e2e: {
    async setupNodeEvents(on, config) {
      // Configuração do preprocessor
      const bundler = createBundler({
        plugins: [createEsbuildPlugin(config)],
      });
      on("file:preprocessor", bundler);

      // Ativa cucumber
      await addCucumberPreprocessorPlugin(on, config);

      // Ativa allure
      allureWriter(on, config);

      return config;
    },

    env: {
      allure: true,
      allureReuseAfterSpec: true,
    },
    
    specPattern: "cypress/e2e/**/*.feature",
    supportFile: "cypress/support/e2e.js",
    baseUrl: "https://www.kabum.com.br/login",
    chromeWebSecurity: false,
  },
});
```

### package.json - Scripts e Dependências
```json
{
  "scripts": {
    "cy:run": "cypress run",
    "allure:generate": "allure generate allure-results --clean -o allure-report",
    "allure:serve": "allure serve allure-results",
    "test": "npm run cy:run && npm run allure:generate && npm run allure:serve"
  },
  "devDependencies": {
    "@bahmutov/cypress-esbuild-preprocessor": "^2.2.4",
    "@shelex/cypress-allure-plugin": "^2.41.2",
    "cypress": "^14.1.0",
    "cypress-xpath": "^2.0.1"
  },
  "dependencies": {
    "@badeball/cypress-cucumber-preprocessor": "^22.0.1",
    "allure-commandline": "^2.34.1",
    "cypress-real-events": "^1.14.0"
  }
}
```

### Configuração do Cucumber
```json
"cypress-cucumber-preprocessor": {
  "json": {
    "enabled": false
  },
  "stepDefinitions": [
    "cypress/e2e/step_definitions/[filepath]*.{js,ts}",
    "cypress/e2e/step_definitions/*.{js,ts}"
  ]
}
```

## 🎓 Boas Práticas para Aulas

### 1. **Organização de Testes**
- 📝 Use nomes descritivos nos cenários
- 🏷️ Agrupe cenários relacionados na mesma feature
- 📊 Utilize dados de teste em fixtures
- 🔄 Reutilize steps entre diferentes features

### 2. **Page Objects**
- 🎯 Uma classe por página
- 🔍 Seletores centralizados no objeto `elements`
- 🛠️ Métodos específicos para cada ação
- 🏗️ Herança da classe `PageBase` para métodos comuns

### 3. **Step Definitions**
- 🔄 Reutilize steps entre cenários
- 📋 Mantenha steps simples e focados
- 🏷️ Use parâmetros para flexibilidade
- 📊 Adicione anotações Allure para melhor rastreabilidade

### 4. **Relatórios Allure**
- 📸 Screenshots automáticos configurados
- 📊 Anotações para melhor rastreabilidade
- 🔗 Anexos para evidências
- 🏷️ Categorização por feature e story

## 🐛 Tratamento de Erros

O projeto inclui tratamento automático de exceções:

```javascript
// cypress/support/e2e.js
import './commands'
import '@shelex/cypress-allure-plugin';

// Tratamento de exceções não capturadas
Cypress.on('uncaught:exception', (err, runnable) => {
  console.log('Erro não capturado:', err.message);
  return false; // Impede falha automática do teste
});

afterEach(function () {
  const tituloTeste = this.currentTest.title.replace(/[:\/]/g, '-');
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
```

## 📸 Screenshots Automáticos

Configurado para capturar screenshots:
- ✅ Após cada teste (sucesso ou falha)
- 📁 Organizados por nome do teste
- 🔗 Anexados automaticamente no Allure
- 🎯 Capturados em ações específicas via PageBase

## 📊 Fixtures - Dados de Teste

**Arquivo de Credenciais** (`cypress/fixtures/credentials.json`):
```json
{
  "email": "seu-email@dominio.com",
  "password": "sua-senha"
}
```

**Uso nas Step Definitions:**
```javascript
// Carregando fixture
cy.fixture('credentials').then((data) => {
  loginPage.fillEmailBase(data.email);
  loginPage.fillPassword(data.password);
});
```

## 🔧 Comandos Customizados

**Exemplo de Comando Personalizado** (`cypress/support/commands.js`):
```javascript
// Comando para login completo
Cypress.Commands.add('loginWith', (email, password) => {
  cy.get('#login').type(email);
  cy.get('#password').type(password);
  cy.get('.login-button').click();
});

// Uso no teste
cy.loginWith('usuario@teste.com', 'senha123');
```

## 🎯 Exemplos Práticos

### Cenário Completo com Allure
```javascript
import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import LoginPage from '../pages/loginPage';

const loginPage = new LoginPage();

Given("que eu estou na página de login do Kabum", () => {
  cy.allure().feature('Autenticação');
  cy.allure().story('Login de usuário');
  cy.allure().severity('critical');
  cy.allure().step('Navegando para a página de login');
  cy.visit('/');
});

When('eu preencho o campo de email com {string} e o campo de senha com {string}', (email, password) => {
  cy.allure().step('Fechando pop-up inicial');
  loginPage.clickPopUp();
  
  cy.allure().step(`Preenchendo email: ${email}`);
  cy.allure().parameter('Email', email);
  loginPage.fillEmailBase(email);
  
  cy.allure().step('Preenchendo senha');
  cy.allure().parameter('Password', '***');
  loginPage.fillPassword(password);
});

When('eu clico no botão de login', () => {
  cy.allure().step('Clicando no botão de login');
  loginPage.clickLoginButton();
});

Then('deve ser apresentada a mensagem de erro {string}', (text) => {
  cy.allure().step(`Verificando mensagem de erro: ${text}`);
  cy.allure().parameter('Mensagem esperada', text);
  loginPage.dadosInvalidosVisivelLogin(text);
});
```

## 🚀 Próximos Passos

1. **Expandir Cenários**: 
   - Login com credenciais válidas
   - Recuperação de senha
   - Validação de campos obrigatórios

2. **Melhorar Fixtures**: 
   - Múltiplos usuários
   - Dados dinâmicos
   - Ambientes diferentes

3. **Comandos Customizados**: 
   - Login automático
   - Limpeza de dados
   - Helpers específicos

4. **CI/CD**: 
   - Integração com GitHub Actions
   - Execução em múltiplos navegadores
   - Relatórios automáticos

5. **Testes Avançados**:
   - API Testing
   - Visual Testing
   - Performance Testing

## 📚 Recursos Adicionais

- [Documentação Cypress](https://docs.cypress.io/)
- [Cucumber.js](https://cucumber.io/docs/cucumber/)
- [Allure Report](https://docs.qameta.io/allure/)
- [Page Object Model](https://martinfowler.com/bliki/PageObject.html)
- [BDD com Gherkin](https://cucumber.io/docs/gherkin/)

## 🎓 Exercícios para Alunos

### Exercício 1: Novo Cenário
Crie um novo cenário para testar o cadastro de usuário:
```gherkin
Scenario: Cadastrar novo usuário
  Given que eu estou na página de cadastro
  When eu preencho todos os campos obrigatórios
  And eu clico no botão cadastrar
  Then devo ver a mensagem de sucesso
```

### Exercício 2: Page Object
Crie uma nova Page Object para a página de cadastro seguindo o padrão do projeto.

### Exercício 3: Fixtures
Crie fixtures para diferentes tipos de usuários (válido, inválido, incompleto).

---

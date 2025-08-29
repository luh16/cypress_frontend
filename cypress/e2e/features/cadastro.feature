Feature: Validar Cadastro com sucesso no QA pratice


  Scenario: Realizar cadastro com sucesso
    Given que acesso o site QA Pratice forms
    When eu preencho os dados para cadastro
    And eu clico no botão registrar
    Then deve ser possivel cadastrar usuario com sucesso


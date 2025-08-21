

Feature: Validar login com sucesso no QA pratice


  Scenario: Realizar login com sucesso
    Given que acesso o site QA Pratice
    When eu preencho os dados para cadastro
    And eu clico no botão registrar
    Then deve ser possivel cadastrar usuario com sucesso

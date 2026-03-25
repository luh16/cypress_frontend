Feature: Validar Cadastro com sucesso no QA pratice

@teste
  Scenario: Realizar cadastro com sucesso
    Given que acesso o menu Login

    
    When eu preencho os dados para cadastro
    And eu clico no botão registrar
    Then deve ser possivel cadastrar usuario com sucesso


  





Feature: Login no Kabum


  Scenario: Realizar login com sucesso
    Given que eu estou na página de login do Kabum
    When eu preencho o campo de email com "seu-email@dominio.com" e o campo de senha com "sua-senha"
    And eu clico no botão de login
    Then deve ser apresentada a mensagem de erro "E-mail, CPF/CNPJ ou senha incorretos."

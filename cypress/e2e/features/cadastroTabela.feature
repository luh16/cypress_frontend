

Feature: Validar login com sucesso no QA pratice

#Usamos Scenario Outline nesse caso porque queremos executar o mesmo cenário com diferentes conjuntos de dados.
  Scenario Outline: Cadastrar novo usuário utilizando tabela
    Given que estou na página de cadastro
    When preencho todos os campos obrigatórios '<name>' '<lastName>' '<phoneNumber>' '<emailAddress>' '<pass>'
    And clico no botão cadastrar
    Then devo ver a mensagem de sucesso

    Examples:
      | name  | lastName | phoneNumber | emailAddress    | pass   |
      | Tiago | Duarte   | 99999999999 | teste@teste.com | 123456 |


  Scenario Outline: Validar campos obrigatorios Email
    Given que estou na página de cadastro
    When preencho todos os campos obrigatórios '<name>' '<lastName>' '<phoneNumber>' '<emailAddress>' '<pass>'
    And clico no botão cadastrar
    Then devo ver o alert de erro referente aos campos obrigatorios

    Examples:
      | name  | lastName | phoneNumber | emailAddress       | pass       |
      | Tiago | Duarte   | 99999999999 |                    |    pass    |
      | Tiago | Duarte   | 99999999999 |         invalid    |    pass    |
      

@teste
  Scenario Outline: Validar campos obrigatorios PassWord
    Given que estou na página de cadastro
    When preencho todos os campos obrigatórios '<name>' '<lastName>' '<phoneNumber>' '<emailAddress>' '<pass>'
    And clico no botão cadastrar
    Then devo ver o alert de erro referente aos campos obrigatorios

    Examples:
      | name  | lastName | phoneNumber | emailAddress           | pass       |
      | Tiago | Duarte   | 99999999999 |     email@hotmail.com  |            |
      
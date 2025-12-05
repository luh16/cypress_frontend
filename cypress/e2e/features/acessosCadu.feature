Feature: Validar Login


@teste
Scenario: Realizar Login sem recaptcha
    Given que acesso o portal Smiles
    When que realizo login
    Then validar elementos modal Nao foi Possivel Acessar a Conta


describe('Casos de Teste de Login - Demoblaze', () => {
  const usuarioPadrao = 'alisson';
  const senhaPadrao = '123456!';
  const senhaIncorreta = 'SenhaErrada!';

  before(() => {
    cy.visit('https://www.demoblaze.com/');
    cy.cadastrarUsuario(usuarioPadrao, senhaPadrao);
    cy.once('window:alert', (str) => {
      expect(str).to.match(/Sign up successful/i);
    });
    cy.wait(5000); // Tempo maior para garantir cadastro
  });

  beforeEach(() => {
    cy.visit('https://www.demoblaze.com/');
    cy.get('#login2').click();
    cy.get('#logInModal').should('be.visible');
  });

  it('Login com sucesso: deve exibir o nome do usuário na página inicial', () => {
  cy.get('#loginusername').type(usuarioPadrao);
  cy.get('#loginpassword').type(senhaPadrao);
  cy.get('button[onclick="logIn()"]').click();

  cy.get('#nameofuser', { timeout: 20000 }).should('be.visible');
  cy.get('#nameofuser').should('contain', `Welcome ${usuarioPadrao}`);
  });

  it('Login com falha (senha incorreta): deve exibir alerta de erro', () => {
  cy.get('#loginusername').type(usuarioPadrao);
  cy.get('#loginpassword').type(senhaIncorreta);
    cy.on('window:alert', (str) => {
      expect(str).to.match(/Wrong password/i);
    });
    cy.get('button[onclick="logIn()"]').click();
  });

  it('Login com falha (campos vazios): deve exibir alerta de erro', () => {
    cy.on('window:alert', (str) => {
      expect(str).to.match(/Please fill out Username and Password/i);
    });
    cy.get('button[onclick="logIn()"]').click();
  });
});
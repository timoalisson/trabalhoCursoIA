// cypress/e2e/login.cy.js

describe('Casos de Teste de Login - Demoblaze', () => {
  const usuarioPadrao = 'AlissonTimo';
  const senhaPadrao = '123456789@';
  const senhaIncorreta = 'SenhaErrada!';
  const usuarioInexistente = 'usuarioFake123';

  // =====================================================
  // 🔧 Comandos Reutilizáveis
  // =====================================================
  Cypress.Commands.add('fazerLogin', (usuario, senha) => {
    cy.get('#login2').should('be.visible').click();
    cy.get('#logInModal').should('be.visible');

    if (usuario) cy.get('#loginusername').clear().type(usuario);
    if (senha) cy.get('#loginpassword').clear().type(senha);

    cy.contains('button', 'Log in').click();
  });

  Cypress.Commands.add('logout', () => {
    cy.contains('Log out').click({ force: true });
    cy.get('#login2').should('be.visible');
  });

  // =====================================================
  // 🔄 Recarregar página antes de cada cenário
  // =====================================================
  beforeEach(() => {
    cy.visit('https://www.demoblaze.com/');
  });

  // =====================================================
  // 🧪 CENÁRIOS DE TESTE
  // =====================================================

  // ✅ CT01 - Login com sucesso
  it('CT01 - Login com sucesso: deve exibir o nome do usuário na página inicial', () => {
    cy.fazerLogin(usuarioPadrao, senhaPadrao);

    cy.contains(`Welcome ${usuarioPadrao}`, { timeout: 10000 })
      .should('be.visible');

    cy.contains('Log out').should('be.visible');

    cy.screenshot('login-sucesso');
    cy.logout(); // opcional
  });

  // ❌ CT02 - Login com falha (senha incorreta)
  it('CT02 - Login com falha (senha incorreta): deve exibir alerta de erro', () => {
    cy.on('window:alert', (msg) => {
      expect(msg).to.match(/Wrong password/i);
    });

    cy.fazerLogin(usuarioPadrao, senhaIncorreta);
  });

  // ❌ CT03 - Login com falha (campos vazios)
  it('CT03 - Login com falha (campos vazios): deve exibir alerta de erro', () => {
    cy.on('window:alert', (msg) => {
      expect(msg).to.match(/Please fill out Username and Password/i);
    });

    cy.fazerLogin('', '');
  });

  // ❌ CT04 - Login com falha (usuário inexistente)
  it('CT04 - Login com falha (usuário inexistente): deve exibir alerta de erro', () => {
    cy.on('window:alert', (msg) => {
      expect(msg).to.match(/User does not exist/i);
    });

    cy.fazerLogin(usuarioInexistente, senhaPadrao);
  });
});

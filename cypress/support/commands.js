Cypress.Commands.add('adicionarProdutoAoCarrinho', (produto) => {
  cy.contains(produto).click();

  // Escuta o alert "Product added"
  cy.on('window:alert', (msg) => {
    expect(msg).to.match(/Product added/i);
  });

  cy.contains('Add to cart').click();

  // Espera o alert sumir antes de prosseguir
  cy.wait(1000);

  // Volta pra página inicial
  cy.get('.navbar-brand').click();
});

Cypress.Commands.add('removerProdutoDoCarrinho', (produto) => {
  cy.contains('tr', produto).within(() => {
    cy.contains('Delete').click();
  });
});

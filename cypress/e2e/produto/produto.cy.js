describe('Fluxo de Produto - Demoblaze', () => {
  beforeEach(() => {
    cy.visit('https://www.demoblaze.com/');
  });

  it('Deve adicionar um produto ao carrinho', () => {
    cy.adicionarProdutoAoCarrinho('Samsung galaxy s6');
    cy.get('#cartur').click();
    cy.contains('Samsung galaxy s6').should('exist');
  });

  it('Deve remover um produto do carrinho', () => {
    cy.adicionarProdutoAoCarrinho('Samsung galaxy s6');
    cy.get('#cartur').click();
    cy.removerProdutoDoCarrinho('Samsung galaxy s6');
    cy.contains('Samsung galaxy s6').should('not.exist');
  });

  it('Deve realizar o fluxo completo de compra', () => {
    cy.adicionarProdutoAoCarrinho('Samsung galaxy s6');
    cy.get('#cartur').click();
    cy.get('button').contains('Place Order').click();
    cy.get('#name').type('QA Teste');
    cy.get('#country').type('Brasil');
    cy.get('#city').type('São Paulo');
    cy.get('#card').type('1234567890123456');
    cy.get('#month').type('12');
    cy.get('#year').type('2025');
    cy.get('button').contains('Purchase').click();
    cy.contains('Thank you for your purchase!').should('be.visible');
  });
});
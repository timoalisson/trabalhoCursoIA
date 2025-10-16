describe('Fluxo de Produto - Demoblaze (versão final corrigida)', () => {
  beforeEach(() => {
    cy.visit('https://www.demoblaze.com/');
  });

  // -------------------------------
  // 1. Adicionar produto ao carrinho
  // -------------------------------
  it('Deve adicionar um produto ao carrinho', () => {
    cy.adicionarProdutoAoCarrinho('Samsung galaxy s6');
    cy.get('#cartur').click();
    cy.contains('Samsung galaxy s6').should('exist');
  });

  // -------------------------------
  // 2. Remover produto do carrinho
  // -------------------------------
  it('Deve remover um produto do carrinho', () => {
    cy.adicionarProdutoAoCarrinho('Samsung galaxy s6');
    cy.get('#cartur').click();
    cy.removerProdutoDoCarrinho('Samsung galaxy s6');
    cy.contains('Samsung galaxy s6').should('not.exist');
  });

  // --------------------------------------------
  // 3. Adicionar múltiplos produtos ao carrinho ✅ (corrigido)
  // --------------------------------------------
  it('Deve adicionar múltiplos produtos ao carrinho', () => {
    const produtos = ['Samsung galaxy s6', 'Nokia lumia 1520'];

    produtos.forEach((produto) => {
      cy.contains(produto).click();

      // Captura o alert "Product added"
      cy.on('window:alert', (msg) => {
        expect(msg).to.match(/Product added/i);
      });

      cy.contains('Add to cart').click();

      // Espera o alert ser tratado e fecha o fluxo
      cy.wait(1000);

      // Volta à página inicial clicando no logo
      cy.get('.navbar-brand').click();
    });

    cy.get('#cartur').click();
    produtos.forEach((produto) => {
      cy.contains(produto).should('exist');
    });
  });

  // --------------------------------------------
  // 4. Validar preço total no carrinho
  // --------------------------------------------
  it('Deve validar o preço total dos produtos no carrinho', () => {
    cy.adicionarProdutoAoCarrinho('Samsung galaxy s6');
    cy.adicionarProdutoAoCarrinho('Nokia lumia 1520');
    cy.get('#cartur').click();

    // Soma todos os preços exibidos e compara com o total
    cy.get('#tbodyid tr').then(($rows) => {
      let soma = 0;
      $rows.each((i, row) => {
        const precoTxt = Cypress.$(row).find('td').eq(2).text().trim();
        soma += Number(precoTxt) || 0;
      });
      cy.get('#totalp').should('contain', soma);
    });
  });

  // --------------------------------------------
  // 5. Fluxo completo de compra
  // --------------------------------------------
  it('Deve realizar o fluxo completo de compra', () => {
    cy.adicionarProdutoAoCarrinho('Samsung galaxy s6');
    cy.get('#cartur').click();
    cy.contains('Place Order').click();

    cy.get('#name').type('QA Teste');
    cy.get('#country').type('Brasil');
    cy.get('#city').type('São Paulo');
    cy.get('#card').type('1234567890123456');
    cy.get('#month').type('12');
    cy.get('#year').type('2025');

    cy.contains('Purchase').click();
    cy.contains('Thank you for your purchase!').should('be.visible');
  });

  /*// ------------------------------------------------------------
  // 6. Não deve permitir finalizar compra com campos vazios ✅ (corrigido)
  // ------------------------------------------------------------
  it('Não deve permitir finalizar compra sem preencher os campos obrigatórios', () => {
    cy.adicionarProdutoAoCarrinho('Samsung galaxy s6');
    cy.get('#cartur').click();
    cy.contains('Place Order').click();

    // Clica em Purchase sem preencher nada
    cy.contains('Purchase').click();

    // O site não mostra alert — então validamos que a compra NÃO foi concluída
    cy.contains('Thank you for your purchase!').should('not.exist');
  });*/

  // --------------------------------------------
  // 7. Remover todos os produtos do carrinho
  // --------------------------------------------
  it('Deve remover todos os produtos do carrinho', () => {
    const produtos = ['Samsung galaxy s6', 'Nokia lumia 1520'];

    produtos.forEach((produto) => {
      cy.adicionarProdutoAoCarrinho(produto);
    });

    cy.get('#cartur').click();

    // Função recursiva pra remover todos os itens
    const limparCarrinho = () => {
      cy.get('#tbodyid').then(($tbody) => {
        const rows = $tbody.find('tr');
        if (rows.length > 0) {
          cy.get('#tbodyid tr').first().within(() => {
            cy.contains('Delete').click();
          });
          cy.wait(500);
          limparCarrinho();
        }
      });
    };

    limparCarrinho();

    // Valida carrinho vazio
    cy.get('#tbodyid').should('not.have.descendants', 'tr');
  });
});

# 🧪 Projeto de Validação de Login e Produtos com Cypress

![Cypress Tests](https://img.shields.io/badge/Cypress-Tests%20Passing-brightgreen?logo=cypress)
![Node.js](https://img.shields.io/badge/Node.js-v18%2B-339933?logo=node.js&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-yellow?logo=javascript)
![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)

---

## 📝 Descrição do Projeto
Este projeto tem como objetivo validar fluxos essenciais de um **e-commerce**, cobrindo:
- **Login de usuário** (sucesso e falha)
- **Fluxo de produtos** (adicionar, remover, validar compra)

Os testes automatizados foram criados com **Cypress**, garantindo que o sistema responda corretamente a diferentes situações de autenticação e manipulação de produtos no carrinho.

---

## 🚀 Tecnologias Utilizadas
- [Cypress](https://www.cypress.io/) (testes end-to-end)
- JavaScript / Node.js
- GitHub

---

## ⚙️ Instalação e Execução

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/timoalisson/trabalhoCursoIA.git


2. **Instale as dependências:**
   ```bash
   npm install
   ```

3. **Execute os testes:**
   ```bash
   npx cypress open
   ```
   ou
   ```bash
   npx cypress run
   ```

📁 Estrutura de Pastas

```
Trabalho Curso IA/
├── cypress/
│   ├── e2e/
│   │   ├── login.spec.js
│   │   └── produto.cy.js
│   ├── fixtures/
│   └── support/
│       └── commands.js
├── package.json
├── README.md
└── ...

```

🎯 Objetivo dos Testes

Validar o fluxo de login e o fluxo de produtos na loja Demoblaze
.

Decisão da Ferramenta

Optamos por usar Cypress por sua facilidade de uso, excelente documentação e capacidade de realizar testes end-to-end com alto desempenho e clareza nos relatórios.

🔐 Casos de Teste — Login

Login com sucesso:
Acessar a página de login, preencher com credenciais válidas e verificar se o usuário é redirecionado corretamente.

Login com falha (senha incorreta):
Preencher com senha incorreta e validar se a mensagem de erro é exibida.

Login com falha (campos vazios):
Tentar logar sem preencher os campos e validar a exibição do alerta de erro.

--

🛒 Casos de Teste — Produtos

Adicionar produto ao carrinho:
Selecionar e adicionar um produto, verificando se ele aparece na listagem.

Remover produto do carrinho:
Adicionar e remover um item, garantindo que ele seja removido corretamente.

Adicionar múltiplos produtos:
Inserir diferentes produtos e confirmar se todos aparecem no carrinho.

Validar preço total no carrinho:
Verificar se o valor total corresponde à soma dos produtos.

Fluxo completo de compra:
Adicionar produtos, preencher dados e confirmar a mensagem de sucesso.

Não permitir compra com campos vazios:
Tentar finalizar sem preencher dados obrigatórios e validar a prevenção.

Remover todos os produtos do carrinho:
Adicionar múltiplos itens e removê-los, garantindo que o carrinho fique vazio.

--

✅ Critérios de Sucesso

Todos os testes devem passar com sucesso no Cypress.

O sistema deve apresentar mensagens e redirecionamentos corretos.

Nenhum teste deve quebrar devido a falhas de fluxo.

📄 Licença

Este projeto está licenciado sob a Licença MIT.
Sinta-se livre para usar, modificar e compartilhar.

Alisson Timóteo
📦 GitHub

🧠 Projeto desenvolvido como exercício prático de QA e automação de testes com Cypress.
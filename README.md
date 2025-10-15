# Projeto de Validação de Login com Cypress

## Descrição do Projeto
Este projeto tem como objetivo validar o fluxo de login de um usuário, cobrindo cenários de sucesso e falha. Utiliza testes automatizados para garantir que o sistema responda corretamente a diferentes situações de autenticação.

## Tecnologias Utilizadas
- [Cypress](https://www.cypress.io/) (testes end-to-end)
- JavaScript/Node.js

## Passos de Instalação e Execução

1. **Clone o repositório:**
   ```bash
   git clone <https://github.com/timoalisson/trabalhoCursoIA.git>
   
   ```

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

## Estrutura de Pastas

```
Trabalho Curso Ia/
├── cypress/
│   ├── integration/
│   │   └── login.spec.js
│   ├── fixtures/
│   └── support/
├── package.json
├── README.md
└── ...
```

## Licença

Este projeto está licenciado sob a Licença MIT.

---

## Objetivo do Teste

Validar o fluxo de login de um usuário (sucesso e falha).

### Decisão da Ferramenta

Optamos por usar Cypress por sua facilidade de uso, excelente documentação e a capacidade de rodar testes de ponta a ponta de forma estável. Além disso, ele se integra bem com o ecossistema JavaScript, o que facilita o desenvolvimento e a manutenção.

### Casos de Teste (Cenários)

- **Login com sucesso:**  
  Acessar a página de login, preencher com credenciais válidas e verificar se o usuário é redirecionado para a página inicial com o nome de usuário exibido.

- **Login com falha (senha incorreta):**  
  Acessar a página de login, preencher com senha incorreta e verificar se a mensagem de erro é exibida.

- **Login com falha (campos vazios):**  
  Clicar em "login" sem preencher os campos e verificar se o alerta de erro é exibido.

### Critérios de Sucesso

Todos os cenários de teste devem passar.

# Vitrine — Catálogo de Produtos com React

Projeto de estudo feito com React + Vite.

## Como executar

1. Instale o Node.js.
2. Extraia esta pasta.
3. Abra a pasta no VS Code.
4. Abra o terminal dentro da pasta e execute:

```bash
npm install
npm run dev
```

5. Abra no navegador o endereço exibido pelo Vite (normalmente `http://localhost:5173`).

## O que foi implementado

- Componente `ProdutoCard` que recebe nome, preço, imagem e descrição por props.
- Lista de produtos armazenada em `useState` e renderizada com `.map()`.
- Carregamento simulado com `useEffect` e `setTimeout`.
- Formulário controlado com `useState`.
- Cadastro de produtos na lista sem recarregar a página.
- Layout responsivo com CSS.

## Observação

Os produtos adicionados ficam no estado do React. Ao atualizar a página, a lista volta aos produtos iniciais, pois este projeto ainda não usa banco de dados ou `localStorage`.

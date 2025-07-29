# 🧪 Projeto - Listagem de Pokémons

Este projeto foi desenvolvido como parte de um processo seletivo técnico com o objetivo de demonstrar habilidades em desenvolvimento frontend moderno, utilizando **Next.js**, **Tailwind CSS** e a **PokéAPI**.

## 🎯 Objetivo

Criar uma interface interativa e responsiva para listagem de Pokémons, com visualização de detalhes e ordenação por força.

---

## 🚀 Tecnologias Utilizadas

- ✅ [Next.js 14](https://nextjs.org/)
- ✅ [Tailwind CSS](https://tailwindcss.com/)
- ✅ [Shadcn UI](https://ui.shadcn.com/)
- ✅ [Radix UI](https://www.radix-ui.com/)
- ✅ [TypeScript](https://www.typescriptlang.org/)
- ✅ [PokéAPI](https://pokeapi.co/)

---

## 📸 Funcionalidades

- ✅ Listagem de Pokémons com imagem, nome e força
- ✅ Ordenação por força (ascendente e descendente)
- ✅ Modal com detalhes do Pokémon (nome, tipo, habilidades, imagem, força)
- ✅ Design responsivo e acessível
- ✅ Código modular com boas práticas de componentização

---

## 🛠️ Como rodar localmente

- npm install
- npm run dev

## Estrutura do projeto

├── app/
│   ├── page.tsx          # Página principal
│   └── layout.tsx        # Layout base
├── components/
│   ├── PokemonCard.tsx   # Card de listagem
│   ├── PokemonModal.tsx  # Modal com detalhes
│   └── ui/               # Componentes do Shadcn
├── lib/
│   ├── usePokemonList.ts # Hook de dados
│   └── utils.ts          # Função `cn`
├── public/
├── styles/
├── README.md
└── package.json

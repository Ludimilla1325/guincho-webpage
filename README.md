# Guincho Taquari – Landing Page

Landing page do serviço de guincho em Curitiba e região.

## Stack

- React 18 + TypeScript
- Vite
- Tailwind CSS

## Como rodar

```bash
npm install
npm run dev
```

Acesse `http://localhost:5173`.

## Build para produção

```bash
npm run build
```

A saída fica em `dist/`. Pode fazer deploy estático em Vercel, Netlify ou qualquer host de arquivos estáticos.

## Estrutura

- `src/sections/` – Hero, ContactStrip, Services, Payment, WhyChoose, Footer
- `src/components/` – StickyContact (mobile)
- `src/lib/` – constants
- `public/assets/` – imagens (guincho-frente.png, guincho-cartao.png)

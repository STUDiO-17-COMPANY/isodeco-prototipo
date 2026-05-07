# ISODECO CRM

Plataforma de gestão (CRM + ERP) para a ISODECO. Frontend em **Vite + React 18 + TypeScript** com Tailwind CSS.

## Arranque rápido

```bash
npm install
npm run dev      # http://localhost:5173
```

## Scripts

| Script | Descrição |
|---|---|
| `npm run dev` | Dev server com HMR |
| `npm run build` | Type-check + build de produção em `dist/` |
| `npm run preview` | Preview local do build |
| `npm run typecheck` | `tsc --noEmit` |
| `npm run lint` | ESLint sobre `src/` (max-warnings 0) |
| `npm run format` | Prettier sobre `src/` |

## Arquitetura

Híbrida **feature-based + layered primitives**.

```
src/
├── App.tsx                 # mount providers + router
├── main.tsx                # bootstrap + BrowserRouter
├── index.css               # Tailwind + body globals + scrollbar
│
├── routes/                 # paths.ts (URL constants) + index.tsx (Routes tree)
├── contexts/               # AppContext (split: context, reducer, provider)
├── hooks/                  # useAsync<T> partilhado
├── services/               # mock services trocáveis por API real
├── data/                   # menuItems + dados mock
├── types/                  # domain, status, menu
├── lib/                    # cn() + statusVariants
│
├── components/
│   ├── layout/             # AppShell, Sidebar, Header, Breadcrumb...
│   └── ui/                 # StatusBadge, TypeBadge, KpiCard, EmptyState
│
└── features/               # verticais auto-contidas
    ├── overview/           # Page + components/ + hooks/useOverview
    ├── kanban/             # Page + components/ + hooks/useKanban
    ├── products/           # Page + components/ + hooks/useProducts
    ├── ai/                 # Page + components/ + hooks/useAIRequests
    └── placeholder/        # PlaceholderPage (reusada por 13 rotas)
```

### Padrões em uso

- **Path alias `@/*`** — `import { cn } from '@/lib/cn'`. Configurado em `tsconfig.json` + `vite-tsconfig-paths`.
- **`useAsync<T>`** — hook minimal `{ data, loading, error, refetch }`. Trocável por TanStack Query no futuro sem alterar componentes.
- **`StatusBadge` + `TypeBadge`** — mapping de variants em `lib/statusVariants.ts` é exaustivo: TypeScript erra em compile se um novo `Status` for adicionado sem variant.
- **Routing nested + `<Outlet/>`** — `<AppShell>` é layout único, contém `<Sidebar>`, `<Header>` e `<Outlet/>`. Sidebar deriva o estado ativo do URL via `<NavLink>`.
- **Context API mínimo** — apenas `user`, `sidebarCollapsed`, `notifications`. Estado UI local fica nos componentes (e.g. `viewMode` em `ProductsPage`).

## Camada de dados (mock → API real)

Cada `services/*.service.ts` expõe funções tipo `getX(): Promise<X[]>` mockadas com `mockDelay()`. Para ligar a uma API real, basta substituir o corpo de cada função:

```ts
// antes
export const getProducts = (): Promise<Product[]> => mockDelay(productsMock)

// depois
export const getProducts = (): Promise<Product[]> =>
  fetch('/api/products').then((r) => r.json())
```

Hooks (`useProducts`, etc.) e componentes não mudam.

## Design system

Cor de marca `#D17A51` extraída para a paleta `brand-{50..950}` em `tailwind.config.ts`. Usar `bg-brand-500`, `hover:bg-brand-600`, `text-brand-500`, etc. — nunca cores hex literais nos componentes.

`cn()` em `@/lib/cn` resolve conflitos de classes Tailwind via `tailwind-merge` (e.g. `cn('p-4', condition && 'p-6')` produz a classe certa).

## Estado atual dos módulos

Implementados: **Overview, Kanban Board, Produtos, Simulações AI**.

Placeholder (sidebar + rota a 200 OK, mas vista detalhada por implementar): Sales Pipeline, Clientes B2C/B2B, Rede de Revenda, Encomendas, Orçamentos, Faturas, Pagamentos, Stock & Armazém, Equipa Interna, Tarefas Internas, Relatórios, Documentos, Definições.

## Origem

`_legacy_source.tsx.bak` é o mockup monolítico original (540 linhas), preservado apenas para referência. Não está incluído no build nem no lint.
# isodeco-prototipo

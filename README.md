# FinanceHub · Dashboard financeiro

Protótipo de interface financeira em português, com indicadores, comparação mensal de receitas e despesas, transações recentes e distribuição de gastos por categoria. Os valores são demonstrativos e estão definidos no código.

[Executar](#executar-localmente) · [Componentes](#organização) · [Limites atuais](#limites-atuais)

## Tecnologias

- React 18, TypeScript e Vite 8.
- Tailwind CSS, shadcn/ui e Radix UI.
- Recharts para o gráfico de receitas e despesas.
- Framer Motion e Lucide React para animações e ícones.
- Vitest e ESLint para a base de verificação.

## Executar localmente

Utilize Node.js 22.12 ou superior e npm. Na raiz do projeto:

```bash
npm ci
npm run dev
```

O Vite utiliza a porta `8080`, com o endereço exibido no terminal. Se houver outro processo nessa porta, ele poderá iniciar na próxima disponível.

Não são necessárias credenciais bancárias, banco de dados ou variáveis de ambiente. O arquivo [.env.example](.env.example) documenta essa configuração.

## Comandos

| Comando | Finalidade |
| --- | --- |
| `npm run dev` | Iniciar o ambiente de desenvolvimento |
| `npm run build` | Gerar o frontend de produção em `dist/` |
| `npm run preview` | Conferir o build localmente |
| `npm run lint` | Executar o ESLint |
| `npm test` | Executar os testes Vitest existentes |
| `npx tsc -b` | Conferir os projetos TypeScript |
| `npm audit` | Consultar avisos de segurança das dependências |

O teste existente é um exemplo de configuração e não valida cálculos financeiros ou interações do dashboard.

## Organização

| Arquivo ou diretório | Responsabilidade |
| --- | --- |
| `src/pages/Index.tsx` | Composição da página e indicadores de exemplo |
| `src/components/dashboard/RevenueChart.tsx` | Gráfico mensal com dados fixos |
| `src/components/dashboard/TransactionsList.tsx` | Lista de transações fictícias |
| `src/components/dashboard/ExpenseBreakdown.tsx` | Categorias e percentuais demonstrativos |
| `src/components/dashboard/StatCard.tsx` | Card reutilizável de indicador |
| `src/components/ui/` | Componentes de interface |
| `src/index.css` | Tema, cores e tipografia |

## Limites atuais

- Esta etapa demonstra o desenho da interface. Não oferece cadastro, edição ou persistência de transações.
- Os indicadores, percentuais, gráfico e lista usam exemplos independentes; não são calculados a partir de uma base financeira comum.
- A navegação lateral, a busca, as notificações, o botão de sair e a ação “Ver todas” ainda não possuem fluxos implementados.
- Não há login, API, integração bancária ou conexão com Supabase. O nome de usuário exibido é fictício.
- A sidebar tem largura fixa; o layout para telas pequenas ainda precisa de adaptação.
- As fontes são carregadas do Google Fonts e dependem de acesso à internet.

## Próximos passos

Centralizar os dados em modelos TypeScript, calcular os indicadores a partir das mesmas transações, implementar filtros e navegação, adaptar o menu para dispositivos móveis e criar testes para os cálculos e fluxos da interface.

Para hospedar o build, utilize um servidor estático com fallback de rotas para `index.html`. Credenciais e dados bancários reais não devem ser adicionados ao frontend; variáveis `VITE_*` ficam disponíveis no navegador.

## Verificação e integração contínua

A [CI](https://github.com/Diogocvlh/elegant-financial-dashboard/actions/workflows/ci.yml) executa instalação pelo lockfile, TypeScript, lint, build e auditoria de dependências em Node.js 22.

Na revisão de 27 de outubro de 2026, npm ci, TypeScript e build passaram. O ESLint terminou com zero erros e sete avisos de Fast Refresh; npm audit não apontou vulnerabilidades naquele momento. O teste de exemplo não foi usado como evidência de cobertura funcional.

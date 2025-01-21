## Sobre o Projeto

FinDash é um dashboard financeiro moderno e responsivo desenvolvido para acompanhamento de investimentos e mercado financeiro. Com uma interface intuitiva e amigável, permite aos usuários monitorar seus investimentos, acompanhar o mercado e gerenciar transações.

## Funcionalidades

- **Dashboard Principal**
  - Visualização rápida do IBOVESPA, Dólar e Bitcoin
  - Gráfico de desempenho da carteira
  - Lista de ativos em destaque

- **Mercado**
  - Acompanhamento de ações em alta e baixa
  - Indicadores de mercado
  - Variações percentuais

- **Carteira**
  - Valor total dos investimentos
  - Lista detalhada de ativos
  - Percentual de rentabilidade

- **Transações**
  - Histórico de operações
  - Filtro por tipo de operação
  - Registro de compras e vendas

- **Configurações**
  - Personalização do perfil
  - Preferências de notificações
  - Opção de tema escuro

## Tecnologias Utilizadas

- HTML5
- CSS3
- JavaScript
- Chart.js para gráficos
- Font Awesome para ícones

## Estrutura do Projeto 
```
findash/
├── index.html
├── mercado.html
├── carteira.html
├── transacoes.html
├── configuracoes.html
├── css/
│ └── styles.css
├── js/
│ └── charts.js
└── img/
└── usuario_dashboard.png
```
## Como Usar

1. Clone o repositório:
```bash
git clone https://github.com/maarinaf/findash.git
```
2. Abra o arquivo `index.html` em seu navegador ou utilize um servidor local.

3. Navegue entre as diferentes seções usando o menu lateral.

## Responsividade

O dashboard é totalmente responsivo e se adapta a diferentes tamanhos de tela:
- Desktop
- Tablet
- Smartphone
## Personalização

O projeto utiliza variáveis CSS para cores principais, permitindo fácil personalização:
- Cor principal: `#00ff88`
- Fundo: `#f0f2f5`
- Sidebar: `#1a1a1a`

## Gráficos

Os gráficos são implementados usando Chart.js. Para personalizar:

1. Edite o arquivo `js/charts.js`
2. Modifique os dados em `data`
3. Ajuste as configurações em `config`


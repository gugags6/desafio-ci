# Desafio de CI/CD com GitHub Actions e SonarCloud

Este é um projeto simples para consolidar os conhecimentos sobre Continuous Integration (CI) e Qualidade de Código.

O projeto consiste em uma calculadora básica construída em Node.js com testes unitários usando o framework Jest. Adicionalmente, possui integração contínua (CI) via GitHub Actions que executa automaticamente as verificações de testes unitários e de cobertura de código pelo SonarCloud a cada nova Pull Request para a branch `main`.

## Estrutura do Projeto

```
├── .github/
│   └── workflows/
│       └── ci.yaml               # Arquivo da pipeline
├── src/                          # Código da aplicação
│   └── calculator.js
├── tests/                        # Testes unitários
│   └── calculator.test.js
├── sonar-project.properties      # Configuração do SonarCloud
├── package.json                  # Dependências (Jest)
└── README.md                     # Este arquivo
```

## Setup Local

Para rodar o projeto localmente, tenha o [Node.js](https://nodejs.org/) instalado.

1. **Instale as dependências:**
   ```bash
   npm install
   ```

2. **Execute os testes:**
   ```bash
   npm test
   ```
   *Um diretório `/coverage` será gerado com o relatório dos testes.*

## Qualidade do Código (SonarCloud) e GitHub Actions

Para ativar completamente as validações do SonarCloud no seu repositório:

1. Acesse o [SonarCloud](https://sonarcloud.io/) e crie um novo projeto importando este repositório do GitHub.
2. Altere as variáveis `sonar.projectKey` e `sonar.organization` dentro do arquivo `sonar-project.properties` para corresponderem às chaves do seu projeto no SonarCloud.
3. No SonarCloud, gere um Token de acesso. Vá até o seu repositório no GitHub: `Settings > Secrets and variables > Actions > New repository secret`. Adicione o novo secret com o nome **`SONAR_TOKEN`** e o valor do token gerado.
4. Crie uma Quality Gate no seu SonarCloud de forma que ele reprove o código caso as condições não sejam atendidas (ex: Coverage menor que 80%).

Sempre que uma Pull Request for criada para a `main`, o GitHub action (configurado em `.github/workflows/ci.yaml`) executará e validará via check do Sonar se o código pode ou não ser integrado.

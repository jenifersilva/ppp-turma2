Executar testes:

`k6 run tests/k6/create-lesson-test.js`

Dashboard web interativo do k6:

`K6_WEB_DASHBOARD=true K6_WEB_DASHBOARD_PERIOD=1s k6 run tests/k6/create-lesson-test.js`

Dashboard web interativo do k6 gerando relatório HTML:

`K6_WEB_DASHBOARD=true K6_WEB_DASHBOARD_EXPORT="tests/k6/report.html" K6_WEB_DASHBOARD_PERIOD=1s k6 run tests/k6/create-lesson-test.js`

Executar os testes na nuvem:

1. Acessar https://grafana.com/orgs/jenifersilva
2. Clicar em Launch
3. Acessar Testing & synthetics > Performance > Projects > Default project
4. Copiar o Project ID
5. Acessar Testing & synthetics > Performance > Settings
6. Copiar o Personal API Token
7. Executar testes na nuvem:
   7.1. Opção 1:

   - Executar no terminal o comando a seguir para fazer login na cloud: `k6 cloud login --token <personal api token>`
   - Executar no terminal o comando a seguir para executar o teste: `k6 cloud run tests/k6/create-lesson-test.js`

     7.2. Opção 2:

   - Executar no terminal: `K6_CLOUD_TOKEN=<PERSONAL_API_TOKEN> k6 cloud run tests/k6/create-lesson-test.js`

8. Executar testes localmente e faz o upload para a nuvem:
   7.1. Opção 1:

   - Executar no terminal o comando a seguir para fazer login na cloud: `k6 cloud login --token <personal api token>`
   - Executar no terminal o comando a seguir para executar o teste: `k6 cloud run --local-execution tests/k6/create-lesson-test.js`

     7.2. Opção 2:

   - Executar no terminal: `K6_CLOUD_TOKEN=<PERSONAL_API_TOKEN> k6 cloud run --local-execution tests/k6/create-lesson-test.js`

jenifersilva
5668720
0365cf208524b65ecf0f83e4821c8798bddcb5399710678d6ebde8b11bdd9f6f

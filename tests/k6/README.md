Executar testes:

`k6 run tests/k6/create-lesson-test.js`

Dashboard web interativo do k6:

`K6_WEB_DASHBOARD=true K6_WEB_DASHBOARD_PERIOD=1s k6 run tests/k6/create-lesson-test.js`

Dashboard web interativo do k6 gerando relatório HTML:

`K6_WEB_DASHBOARD=true K6_WEB_DASHBOARD_EXPORT="tests/k6/report.html" K6_WEB_DASHBOARD_PERIOD=1s k6 run tests/k6/create-lesson-test.js`

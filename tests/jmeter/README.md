Iniciar JMeter:

`jmeter`

Gerar report JMeter e salvar na pasta (caminho do executável, arquivo jmx a ser executado, caminho da pasta de report:

`/opt/homebrew/bin//jmeter -n -t "workspace/ppp-turma2/tests/jmeter/Teste de Performance de Fluxo de Instrutores.jmx" -l "workspace/ppp-turma2/tests/jmeter/report-jmeter/log.csv"`

Executar testes na nuvem - BlazeMeter:

1. Acessar https://a.blazemeter.com/app/#/accounts/654091/workspaces/659335/dashboard
2. Clicar em Create test > Performance test > Upload script
3. Selecionar arquivos de massa de dados, se houver
4. Adicionar nome
5. Adicionar configurações de execução (usuários, ramp up, etc)
6. Launch test

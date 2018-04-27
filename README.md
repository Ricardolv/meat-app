# MeatApp - Angular

## 1. Passos para começar

### Clonando o Repositório

`git clone https://github.com/Ricardolv/meat-app.git`

### Instalando as Dependências

`npm install`

### Inicializando o Servidor

`ng serve` ou `npm start` 

## 2. Iniciando o Backend

### Instalando o json-server

`npm install -g json-server`

### Iniciando o serviço (raiz da aplicação)

`json-server db.json`

## Expressões regulares usadas na validação de formulários

### Email Regex

`/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i`

### Number Regex

`/^[0-9]*$/`

### Token JWT

### Build de produção comando 
`ng build --prod --extract-css=false`

--extract-css=false, devido a um problema de css, o --extract-css controla a onde o css vai ser colocado, por padrao o --extract-css ele é true vai gravar em um arquivo de acesso global, quando essa opcao é false ele vai garavar em um arquivo de javascript.

# nodejs-api-basic

## Iniciando uma API básica com NodeJS

    - NodeJS
    - Express
    - Nodemon
    - Mongodb
    - Mongoose
    - Mongoose Paginator
    - Cors
    - Require Dir

### Para baixar o NodeJS acesse o site oficial em:

- <https://nodejs.org/en/>

## Clonando o projeto

_Dentro da pasta em que deseja salvar o projeto, execute o seguinte comando:_

    # git clone https://github.com/Thiagosf-dev/nodejs-api-basic.git

## Instalando as dependências do projeto

_Dentro pasta do projeto clonado, execute o seguinte comando:_

    # npm install

_Crie um arquivo com o nome \".gitignore\" na raiz do projeto e dentro dele escreva as seguintes linhas:_

- .gitignore
- node_modules

## Executando o projeto

_Execute o seguinte comando:_

    # npm run dev

_Abra o navegador e digite o seguinte endereço:_

- http://localhost:3000/api - **para acessar a rota raiz do sistema**

## Rotas dispoíveis

- http://localhost:3000/api - **para acessar a rota raiz do sistema**
- http://localhost:3000/api/products - **GET para acessar todos os produtos cadastrados**
- http://localhost:3000/api/products/:id - **GET para acessar um registro específico passando o id de um  produto cadastrado**
- http://localhost:3000/api/products - **POST para criar um registro no sistema**
- http://localhost:3000/api/products/:id - **UPDATE para alterar um registro do sistema passando o id de um produtro cadastrado**
- http://localhost:3000/api/products/:id - **DELETE para excluir um registro do sistema passando um id de um produto cadastrado**
- http://localhost:3000/api/products?page={numero} - **GET para acessar todos os produtos cadastrados com paginação de 5 registros por página, onde o {numero} na url serve para informar qual página deseja visualizar**
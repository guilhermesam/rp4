# rp4

## rodando o projeto localmente

1. setar as variaveis de ambiente presente no arquivo `.env.example` num arquivo chamado `.env`

exemplo:

```bash
DATABASE_USER=leilao
DATABASE_PASSWORD=mysql123
DATABASE_NAME=leilao
DATABASE_HOST=localhost
DATABASE_PORT=3306
DATABASE_PROVIDER=mysql
BLOCKCHAIN_SERVICE_BASE_URL=http://localhost:4000
BLOCKCHAIN_SERVICE_TOKEN=token
```

2. instalar as dependencias

```bash
yarn install

# ou com npm
npm install
``` 

3. rodar o comando `yarn dev` ou `npm run dev`

o comando acima vai atomaticamente supir a aplicação em ambiente de desenvolvimento e setar as variaveis de ambiente
usando o dotenv-cli com base no arquivo .env criado

# Essia Arquivos Angular

## Visão geral

A Essia Arquivos Angular é a interface de usuário (UI) desenvolvida para interagir com a Essia Arquivos REST API, permitindo a manipulação de diretórios e arquivos consumindo dados diretamente da API. A aplicação foi construída utilizando Angular na versão 18.

## Como rodar o projeto 
  1. Clone o repositório do projeto para sua máquina local.
  2. Com o projeto clonado, ajuste o arquivo ```docker-compose.yml``` do projeto [Essia Arquivos API](https://github.com/joaoarthurolv/essia-arquivos-api), informando no campo ```context``` do serviço ```angular-app``` o caminho correto onde o projeto Angular está localizado. Exemplo:

  Exemplo de configuração: 
  ```
    angular-app:
      container_name: angular-app
      build:
        context: C:\essia-arquivos-angular  
        dockerfile: Dockerfile           
      ports:
        - '4200:80'                      
      depends_on:
        - app    
  ```
  3. Após essa configuração, siga as instruções no arquivo README do projeto [Essia Arquivos API](https://github.com/joaoarthurolv/essia-arquivos-api) para iniciar o sistema completo.

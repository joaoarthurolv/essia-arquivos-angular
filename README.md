# Essia Arquivos Angular

## Visão geral

A Essia Arquivos Angular é a interface de usuário (UI) desenvolvida para interagir com a Essia Arquivos REST API, permitindo a manipulação de diretórios e arquivos consumindo dados diretamente da API. A aplicação foi construída utilizando Angular na versão 18.

## Como rodar o projeto 
Para executar o projeto, você precisará ter o ```docker``` e o ```docker-compose``` instalados. Siga os passos abaixo:
  1. Clone o repositório do projeto para sua máquina local.
  2. No projeto clonado, ajuste o arquivo docker-compose.yml da Essia Arquivos API, informando o caminho correto onde o projeto Angular está localizado. No serviço angular-app, adicione o caminho ao valor context:.

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
  3. Após essa configuração, siga as instruções no arquivo README do projeto Essia Arquivos API para iniciar o sistema completo.

Com esses passos, você estará pronto para rodar a Essia Arquivos Angular e consumir a API.

# Bem vindo projeto base de anomalias

Esta aplicação faz parte do conjunto de aplicações para meu trabalho de conclusão de curso para o curso de Sistemas de informação no campus CERES/RN.

## Objetivo
Esta aplicação fornece alguns endpoints que serão utilizados por outra aplicação para gerar anomalias em um ambiente controlado.

Os endpoints implementados incluem:
| Metodo | Endpoint            | função                                                                  |
| ------ | ------------------- | ----------------------------------------------------------------------- |
| GET    | `/`                 | identifica se a aplicação está executando com sucesso                   |
| POST   | `/cpu-usage`        | executa um aumento no uso de cpu                                        |
| GET    | `/fibonacci/:nth`   | calcula o valor fibonacci de valor repassado via path param             |
| GET    | `/factorial/:nth`   | calcula o valor fatorial de valor repassado via path param              |
| GET    | `/lorem-ipsum/:nth` | gera um conjunto de texto aleatório de nth letras e 1000 caracteres     |
| POST   | `/receive-data`     | recebe qualquer valor repassado no body                                 |
| POST   | `/memory-usage`     | aumenta o valor de memória utilizada com base nos parametros fornecidos |


## Execução
A aplicação tem duas configurações disponiveis, com docker-compose e com o Dockerfile, que servem para desenvolvimento e produção respectivamente.
### Para desenvolvimento
Para testar a aplicação com hot reload é possível utilizar o docker-compose da aplicação, e ela será provida com base nas configurações do docker-compose.
Para subir a aplicação executando com o docker-compose é só executar:
```shell
  docker-compose up --b
```

### Para produção
Para executar a aplicação com as configurações de produção basta apenas executar o docker build no projeto. como exemplo, bas executar o comando a seguir no root do projeto:
```shell
  docker build . -t <qualquer-tag-para-imagem>
```

Para executar a aplicação basta executar a imagem com a tag atribuida anteriormente, como exemplo:

```shell
  docker run -p <porta-do-host>:80 --name <nome-container> <qualquer-tag-para-imagem>
```

A aplicação é executada na porta 80 dentro do container, dessa forma caso o usuário deseje utilizar a aplicação no host, devemos exportar a aplicação fazendo o bind da porta.

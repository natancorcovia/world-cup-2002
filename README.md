# World Cup 2002 - Seleção Brasileira API

API construída com **NestJS** e **Prisma**, conectada a um banco PostgreSQL no **Neon DB**, para armazenar e consultar informações dos 20 jogadores convocados da Seleção Brasileira da Copa de 2002.

---

## 📝 Funcionalidades

- Inserir jogadores no banco de dados.
- Consultar todos os jogadores.
- Consultar jogadores individuais.
- Consultar os 3 maiores artilheiros.
- Consultar os 3 jogadores com mais assistências.
- Armazenamento de informações como:
  - Nome
  - Número da camisa
  - Posição (GOL, DEF, MDE, ATA)
  - Gols
  - Assistências

---

## 💻 Tecnologias utilizadas

- [NestJS](https://nestjs.com/) - Framework Node.js para construir APIs escaláveis
- [Prisma](https://www.prisma.io/) - ORM para Node.js/TypeScript
- [PostgreSQL / Neon DB](https://neon.tech/) - Banco de dados em nuvem
- [TypeScript](https://www.typescriptlang.org/) - Superset de JavaScript com tipagem
- [ts-node / tsx](https://github.com/esbuild-kit/tsx) - Execução de scripts TypeScript

---

## 🚀 Endpoints

Base URL: `http://localhost:3000/players`

| Método | Endpoint               | Descrição                                    |
| ------ | ---------------------- | -------------------------------------------- |
| POST   | `/players`             | Criar um novo jogador                        |
| GET    | `/players`             | Listar todos os jogadores                    |
| GET    | `/players/:id`         | Buscar um jogador pelo ID                    |
| GET    | `/players/top-scorers` | Retorna os 3 maiores artilheiros             |
| GET    | `/players/top-assists` | Retorna os 3 jogadores com mais assistências |

---

## 📦 Exemplos de payload

### Buscar os 3 artilheiros do time

**GET** `/players/top-scorers`

### Resposta esperada:

```json
[
  { "name": "Ronaldo", "goals": 8 },
  { "name": "Rivaldo", "goals": 5 },
  { "name": "Ronaldinho", "goals": 2 }
]
```

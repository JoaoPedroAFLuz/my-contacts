# 📖 MyContacts v1.0.0

Aplicação web para gerenciamento de contatos. Com esta aplicação o usuário pode listar, filtrar, criar, editar e deletar seus contatos.

Neste projeto eu utilizei a menor quantidade possível de bibliotecas externas. O intuiito disso foi aprender como as principais bibliotecas funcionam e desenvolver
suas funcionalidades na mão.
No back-end, desenvolvido em Node.js, foi criada uma API utilizando Express e Postgres para armazenar informações sobre os contatos e as categorias, e por meio das 
rotas disponibilizá-las para o front-end, desenvolvido em React.

## 📈 Versão 2.0.0

Para a próxima versão pretendo adicionar telas para gerenciar as categorias e adicionar filtragem de contatos por elas.

## 🖥 Telas
<details>
<summary>Visualizar</summary>

![01-Home-page](https://user-images.githubusercontent.com/70025328/219879169-56d279d5-9059-4730-812c-93d6a2bcd189.png)
![02-Cadastro-contato](https://user-images.githubusercontent.com/70025328/219879171-dc3e4a44-6eaf-43ed-a142-a3f5dc38dd96.png)
![03-Home-page02](https://user-images.githubusercontent.com/70025328/219879174-93c070d3-ef12-45aa-a847-98e044c0770c.png)
![04-Editar-contato](https://user-images.githubusercontent.com/70025328/219879177-e0f37714-b446-400d-9a05-899e83afa02b.png)
![05-Modal-deletar-contato](https://user-images.githubusercontent.com/70025328/219879180-2ee66069-0244-4707-9f20-fe432e8a3958.png)
![06-Contato-filtrado-nao-encontrado](https://user-images.githubusercontent.com/70025328/219879182-0ef8cb01-bf20-49ab-a463-67632fd6c245.png)
![07-Nenhum-contato](https://user-images.githubusercontent.com/70025328/219879183-4deca921-d4c0-4622-8897-e8e6d759ade1.png)
![08-Erro-obter-contatos](https://user-images.githubusercontent.com/70025328/219879186-876eb34c-91db-4852-ad5d-aa5b5ea84a3f.png)

</details>

## 🛠 Instalação

- Necessita a instalação do [Node](https://nodejs.org/en/) e do [Postgres](https://www.postgresql.org/);
- Clone o projeto com o comando:
```bash 
git clone https://github.com/JoaoPedroLuz57/my-contacts.git 
``` 
- Acesse as pastas "api" e "web" e em cada uma execute o seguinte comando dentro do terminal: 
```bash
yarn
```

## 🚀 Como rodar

### Back-end
- Crie um usuário no postgres com user = "posgres" e password = "12345";
- Execute o script contido em [api/src/database/schemas.sql](https://github.com/JoaoPedroLuz57/my-contacts/blob/main/api/src/database/schema.sql) dentro do postgres;
- Para rodar em modo desenvolvimento utilize utilize o seguinte comando no terminal (na pasta api):
```bash
yarn dev
```
- Para gerenciar as categorias é necessário utilizar uma ferramenta como Insomnia para realizar chamadas http para as rotas de criação, edição e deleção.

### Front-end: 
- Para rodar em modo desenvolvimento utilize o seguinte comando no terminal (na pasta web):
```bash
yarn dev
```


# Desafio SOGO 2020

## Leanderson Coelho

## Projeto 

Projeto criado com o objetivo de mostrar as habilidades com a biblioteca javascript [React](https://pt-br.reactjs.org/) e demais tecnologias.

### Easy Course

Sistema fictício do domínio de cursos online, permitindo a integração de professores, participantes e mini cursos.

![](https://raw.githubusercontent.com/Leanderson-Coelho/sogo-2020/master/front_end/src/assets/Easy_Course_logo_com_cor.png?token=AIJDUIF53ZMRLIDMY27POFK622D4I)

## Start

#### App React

Use o comando abaixo para fazer o download de todas as dependências do projeto.
> npm install

Use o comando abaixo, após o download das dependências, para iniciar a aplicação em modo de desenvolvimento em `http://localhost:3000/`

> npm start

#### Fake API

###### Uma api fake que simula uma interação com um projeto de backend.

Use o comando abaixo para fazer o download de todas as dependências do projeto.
> npm install

Use o comando abaixo para iniciar a api "em modo público", sem autenticação e autorização nas rotas acessadas.
> npm start

**Indicado:** Para iniciar "em modo restrito", com autenticação JWT, use o comando abaixo.
> npm run start-auth

Após a inicialização a api será disponibilizada em `http://localhost:3002`

##### Importante!

Para cadastrar novos `professores` é preciso estar autenticado como um `professor`. Um usuário padrão já esta disponibilizado com as credenciais: `email`: `professor@gmail.com` e `password`: `professor`

Os usuários do tipo `participantes` podem ser cadastrados livremente, um usuário `participante` já está disponibilizado por padão com as credenciais `email`: `jose@gmail.com` e `password`: `josejose`


#### Dependências utilizadas
* [Material UI](https://material-ui.com/pt/): Componentes React dinâmicos. ex: `Button`, `TextField`

* [React Router](https://reacttraining.com/react-router/): Biblioteca com uma coleção de componentes React para navegação web.

* [Formik](https://jaredpalmer.com/formik/): Biblioteca para  construção de formulários reativos em React.

* [Yup](https://www.npmjs.com/package/yup): Biblioteca javascript para criação de validações de formulário.

* [Axios](): Http Client para navegadores em node.

###### Artes De Logo por Felipe *felipeirnyo30@gmail.com*
![](https://raw.githubusercontent.com/Leanderson-Coelho/sogo-2020/master/front_end/src/assets/EC_logo_branca_com_fundo.png?token=AIJDUIDSOFH3OYM5DVTKITC622GWM)

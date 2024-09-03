# Project Management App

Este é um aplicativo de gerenciamento de projetos que permite aos usuários se cadastrarem, fazerem login e gerenciarem projetos e tarefas. O front-end é construído com React e Styled Components, enquanto o back-end utiliza Django REST Framework.

## Tecnologias Utilizadas

- **Front-end**: React, Styled Components
- **Back-end**: Django REST Framework
- **Banco de Dados**: MySQL (para o back-end)
- **Autenticação**: JWT (JSON Web Tokens)

## Estrutura do Projeto

- `frontend/`: Contém o código-fonte do front-end.
- `backend/`: Contém o código-fonte do back-end.

## Pré-requisitos

Certifique-se de ter as seguintes ferramentas instaladas:

- [Node.js](https://nodejs.org/) (para o front-end)
- [Python](https://www.python.org/) (para o back-end)
- [MySQL](https://www.mysql.com/) (ou um serviço de banco de dados MySQL)

## Instalação

### Front-end

1. Navegue até o diretório do front-end:

   ```bash
   cd frontend
Instale as dependências do projeto:

bash
Copiar código
npm install
Inicie o servidor de desenvolvimento:

bash
Copiar código
npm start
O front-end estará disponível em http://localhost:3000.

Back-end
Navegue até o diretório do back-end:

bash
Copiar código
cd backend
Crie e ative um ambiente virtual (recomendado):

bash
Copiar código
python -m venv venv
source venv/bin/activate  # No Windows use `venv\Scripts\activate`
Instale as dependências do projeto:

bash
Copiar código
pip install -r requirements.txt
Configure o banco de dados. Edite o arquivo backend/settings.py para adicionar as configurações do seu banco de dados MySQL.

Execute as migrações do banco de dados:

bash
Copiar código
python manage.py migrate
Inicie o servidor de desenvolvimento:

bash
Copiar código
python manage.py runserver
O back-end estará disponível em http://localhost:8000.

Uso
Cadastro e Login:

Acesse o front-end em http://localhost:3000 e use o formulário de login para autenticar-se. Se não tiver uma conta, você pode se cadastrar diretamente na aplicação.
Gerenciamento de Projetos e Tarefas:

Após o login, você pode visualizar e gerenciar seus projetos e tarefas na interface principal.
Desenvolvimento
Se você deseja contribuir para o desenvolvimento deste projeto, por favor siga estas etapas:

Faça um fork deste repositório.

Crie uma branch para sua nova funcionalidade ou correção:

bash
Copiar código
git checkout -b minha-nova-funcionalidade
Faça suas alterações e commite-as:

bash
Copiar código
git commit -am 'Adiciona nova funcionalidade'
Envie sua branch para o repositório remoto:

bash
Copiar código
git push origin minha-nova-funcionalidade
Abra um Pull Request para revisão.

Licença
Este projeto está licenciado sob a MIT License.

Contato
Se você tiver alguma dúvida ou sugestão, por favor, entre em contato:

E-mail: mayconpachecooficial@gmail.com
LinkedIn: https://www.linkedin.com/in/mayconpachecooficial
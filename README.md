# Challenge Amigo Secreto

Este projeto consiste em uma aplicação web simples que permite ao usuário adicionar nomes de amigos a uma lista, visualizar a lista atualizada e sortear um amigo aleatoriamente.

Este desafio é parte obrigatória da Formação Iniciante em Programação e elemento classificatório para a próxima etapa do Programa ONE - Oracle Next Education.

## 🔨 Funcionalidades do projeto

As principais funcionalidades incluem:

Adicionar Amigo: O usuário pode inserir o nome de um amigo em um campo de texto. Se o campo estiver vazio, uma mensagem de alerta é exibida. Caso contrário, o nome é adicionado à lista de amigos e a lista é atualizada na interface.

Limpar Campo: Após adicionar um amigo, o campo de texto é limpo automaticamente para facilitar a inserção de novos nomes.

Atualizar Lista de Amigos: A lista de amigos é exibida dinamicamente na interface, mostrando todos os nomes adicionados.

Sortear Amigo: O usuário pode sortear um amigo aleatoriamente a partir da lista. Se a lista estiver vazia, uma mensagem de alerta é exibida. Após o sorteio, o nome do amigo sorteado é exibido e a lista é limpa.

## ✔️ Técnicas utilizadas

- `Manipulação do DOM (Document Object Model)`:
  - `document.getElementById`: Utilizado para acessar elementos HTML pelo seu ID.
  - `createElement e appendChild`: Utilizados para criar novos elementos HTML dinamicamente e adicioná-los à página.
  - `innerHTML`: Utilizado para atualizar o conteúdo de elementos HTML.

- `Estruturas de Controle`:
  - `Condicionais (if/else)`: Utilizadas para verificar se o campo de texto está vazio antes de adicionar um amigo e para verificar se a lista de amigos está vazia antes de realizar o sorteio.
  - `Laços de Repetição (for)`: Utilizados para iterar sobre a lista de amigos e atualizar a interface com os nomes adicionados.

- `Funções`:
  - `Funções de Manipulação`: Funções como adicionarAmigo, limparCampo, atualizarListaAmigos e sortearAmigo são utilizadas para organizar o código e realizar tarefas específicas.

  ## ✔️ Tecnologias utilizadas

  - `JavaScript`: Linguagem de programação utilizada para adicionar interatividade à página, manipulando o DOM e implementando a lógica do projeto.
  - `HTML`: Estrutura básica da página web, incluindo campos de entrada de texto, botões e áreas para exibição da lista de amigos e do resultado do sorteio.
  - `CSS`: Utilizado para estilizar a página, tornando-a mais atraente visualmente.

## 📁 Acesso ao projeto

Você pode [acessar o código fonte do projeto inicial](https://github.com/marcemaia/challenge-amigo-secreto) ou [baixá-lo](https://github.com/marcemaia/challenge-amigo-secreto/archive/refs/heads/main.zip).


## 📚 Mais informações do curso

Gostou do projeto e quer conhecer mais? Você pode [acessar a Formação](https://cursos.alura.com.br/formacao-logica-de-programacao-grupo8-one) que desenvolve o projeto desde o começo!

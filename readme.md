# MÓ FOME

> Um aplicativo em React Native com o intuito de fazer uma lista de compras
>
> **Projeto desenvolvido por Bruno Dias Del Claro**

# Página principal

Possui uma lista com conteudo principal e uma barra superior com dois botões


### Botão de Adicionar:

Ao clicar nesse botão o usuário será redirecionado a tela de adição de produto.

## Com itens na lista

![Lista com itens](/readmeImages/tela1.png)

Cada item possui as informações relevantes, essas incluem:

* Nome do produto
* Descrição
* Quantidade de itens

Ao clicar no botão alterar o usuário é redirecionado a tela de alterar produto.

### Botão de Apagar

Limpa todos os itens da lista.

### Segura em um produto

![Lista com itens selecinados](/readmeImages/tela2.png)

Marca o item com a cor verde para auxiliar nos itens que já foram coletados e saber o que falta.

# Página de adição de produto

![Formulário de adição de produtos](/readmeImages/tela3.png)

# Dados Armazenadas

São armazenados os seguintes dados em LocalStorage:

* Nome: Nome do produto em formato de string.
* Descrição: Descrição do produto em formato de string.
* Quantidade: Quantidade do produto em formato de números.
* Id: ID de cada produto para auxiliar nas buscas e no gerenciamento dos produtos (invisível ao usuário).

# Questionário

> ### A aplicação é original e não uma cópia da aplicação de um colega ou de uma aplicação já existente?
> #### Sim, apesar de ser baseada na aplicação Tô Ferrado ela possui elementos a mais com bastante diferenças.
***
> ### A aplicação tem pelo menos duas interfaces (telas ou páginas) independentes?
> #### Sim.
***
> ### A aplicação armazena e usa de forma relevante dados complexos (mais de um atributo)?
> #### Sim.
***
> ### A aplicação tem um componente com rolagem?
> #### Sim.
***
> ### A aplicação tem um campo de formulário que é devidamente tratado?
> #### Não. O campo existe mas ele não é devidamente tratado
***
> ### A aplicação foi desenvolvida com o React Native?
> #### Sim.
***
> ### O código da minha aplicação possui comentários explicando cada operação?
> #### Não. Infelizmente eu tive muito tempo para realizar o projeto da maneira que eu gostaria, então deixei sem os comentários para focar nos outros requisitos
***
> ### A aplicação está funcionando corretamente?
> #### Não. Apenas rodando em web, quando tento executar em uma ambiente android a pagina com os formulários não funciona direito, os inputs e os botões perdem a formatação.
***
> ### A aplicação está completa?
> #### Não. Comparada a primeira entrega essa faltou bastante estética e verificações de campos, além de funcionalidades como alterar uma compra.
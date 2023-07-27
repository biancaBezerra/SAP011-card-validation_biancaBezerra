<div style="text-align: center;">
  <img src="./src/assets/logo_bazar.png" alt="Logo do README" style="display: block; margin: 0 auto;" width = 100px>

# Cartão de Crédito Válido
</div>

## Índice

* [1. Features](#1-features)
* [2. Introdução](#2-Introdução)
* [3. Resumo do projeto](#3-resumo-do-projeto)
* [4. Definição de produto](#4-definição-de-produto)
* [5. Materiais de apoio e Tenologias](#5-materiais-de-apoio-e-tecnologias)
* [6. Objetivos alcançados no projeto](#6-objetivos-alcançados-no-projeto)


## 1. Features

* GIF
<h1 align = 'center'>
  <img alt = readme title = readme src ="./src/assets/readme.gif"/>
</h1>

## 2. Introdução

O [algoritmo de Luhn](https://en.wikipedia.org/wiki/Luhn_algorithm), também
chamado de módulo 10, é um método de soma de verificação, usado para validar
números de identificação, como o IMEI de telefones celulares, cartões de crédito
etc.

Esse algoritmo é simples. Obtemos o inverso do número a ser verificado (que
contém apenas dígitos [0-9]); todos os números que ocupam uma posição par devem
ser multiplicados por dois; se esse número for maior ou igual a 10, devemos
adicionar os dígitos do resultado; o número a verificar será válido se a soma de
seus dígitos finais for um múltiplo de 10.

![gráfico do algoritmo de Luhn](https://www.101computing.net/wp/wp-content/uploads/Luhn-Algorithm.png)

## 3. Resumo do projeto

Neste projeto, foi criado um aplicativo da Web que permite ao usuário validar o número de um cartão de crédito.  Além disso, foi implementada a funcionalidade para ocultar todos os dígitos de um cartão, exceto os quatro últimos.

## 4. Definição de produto

O produto que foi produzido é uma representação de uma página "Finalizar Compra" do e-commerce Bazar Trankera's. 

Podemos visualizar, primeiramente, o cabeçalho da página, onde há o logotipo da loja, nome da loja e barra de navegação.

Logo abaixo, onde fica os elementos de finalização de compra da página, o usuário têm plotado em sua tela à direita um formulário para inserir os dados do cartão de crédito, como o número do cartão de crédito, nome do titular, data de validade do cartão e o código de segurança. À esquerda o usuário poderá observa que há uma representação de um cartão de crédito interativo que, ao inserir as informações do cartão no formulário o usuário poderá visualizar os dados na representação do cartão de crédito simultaneamente.

Vale ressaltar que à primeira vista a representação do cartão se mostra comum, mas, o usuário perceberá que logo no momento em que tiver inserido todos os números de seu cartão de crédito, na parte superior direita desta representação do cartão será apresentada a bandeira correspondente ao que seria de seu uso.

O usuário poderá notar que o seu código de segurança não aparecerá nesta representação inicial do cartão e, para isso, é necessário passar com o mouse em cima da representação do cartão e ele irá rotacionar, assim, representando o que seria a parte traseira do cartão de crédito. 

No momento em que usuário estiver inserindo seus dados (número do cartão, nome do titular, data de validade e código de segurança) haverá validações inseridas em JavaScript que fará uma análise das informações que estão sendo inseridas no momento em que o usuário apertar o botão "Validar Cartão". Primeiramente, não será permitido o envio de dados com alguma informação faltante, é necessário inserir os dados em todas as caixas de texto. Se por ventura houver uma ou mais informações omitidas, será plotado um alert em tela, solicitando que o usuário preencha os dados corretamente.

Há também a validação do cartão, onde o JavaScript faz a validação dos números do cartão que foram inseridas pelo usuário através do algoritmo de Luhn e é apresentado um alerta em tela que indica se o cartão é válido ou não. Além da validação mencionada acima também temos a máscara do cartão que irá mascarar todos os digitos do cartão de crédito inserido no formulário a partir do momento em que o usuário envia os dados. Mas atenção, a máscara só irá funcionar no momento em que o cartão digitado no formulário for validado pelo algoritmo de Luhn. A máscara fará a ocultação de todos os digitos, exceto dos quatro ultimos digitos.

## 5. Materiais de apoio / Tecnologias

### HTML

https://developer.mozilla.org/en-US/docs/Glossary/Semantics#semantics_in_html
https://curriculum.laboratoria.la/pt/topics/html/html5/semantic-html

### CSS

https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Box_Model/Introduction_to_the_CSS_box_model
https://developer.mozilla.org/pt-BR/docs/Web/CSS/display
https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/The_box_model

### JavaScript

https://curriculum.laboratoria.la/pt/topics/javascript/basics/values-variables-and-types
https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String
https://curriculum.laboratoria.la/pt/topics/javascript/strings
https://pt.stackoverflow.com/questions/167845/como-adicionar-mascara-de-cart%C3%A3o
https://pt.stackoverflow.com/questions/97234/validar-n%c3%bamero-cart%c3%a3o-de-cr%c3%a9dito/97241#97241
https://developer.mozilla.org/pt-BR/docs/Web/API/Node/textContent

## 6. Objetivos alcançados no projeto

* [x] Possui uma interface que permite ao usuário permita ao usuário validar o número de um cartão de crédito e ocultar todos os dígitos de um cartão e ocultar o número até os 4 últimos dígitos.
* [x] O projeto será entregue incluindo testes unitários dos métodos`validator` (`isValid` e `maskify`).
* [x] O projeto será entregue livre de _erros_ de `eslint` (_warnings_ são ok).
* [x] O código do seu projeto será entregue no GitHub.
* [x] A interface será "implantada" usando o GitHub Pages.
* [x] O README contém uma definição de produto.


Made with 💛 by BIANCA BEZERRA 💻 [See my LinkedIn](https://www.linkedin.com/in/bianca-bezerra-63447b160/)

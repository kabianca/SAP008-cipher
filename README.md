# Cifra de César

## Índice

* [1. Prefácio](#1-prefácio)
* [2. Resumo do projeto](#2-resumo-do-projeto)
* [3. Objetivos de aprendizagem](#3-objetivos-de-aprendizagem)

***

## 1. Prefácio

Cifrar significa codificar. A [cifra de César](https://pt.wikipedia.org/wiki/Cifra_de_C%C3%A9sar)
é um dos primeiros tipos de criptografias conhecidas na história.
O imperador romano Júlio César utilizava essa cifra para enviar
ordens secretas aos seus generais no campo de batalha.

![caeser-cipher](https://user-images.githubusercontent.com/11894994/60990999-07ffdb00-a320-11e9-87d0-b7c291bc4cd1.png)

A cifra de César é uma das técnicas mais simples de cifrar uma mensagem. É um
tipo de cifra por substituição, em que cada letra do texto original é
substituida por outra que se encontra há um número fixo de posições
(deslocamento) mais a frente do mesmo alfabeto.

Por exemplo se usarmos o deslocamento (_offset_) de 3 posições:

* Alfabeto sem cifrar: A B C D E F G H I J K L M N O P Q R S T U V W X Y Z
* Alfabeto com cifra:  D E F G H I J K L M N O P Q R S T U V W X Y Z A B C
* A letra A será D
* A palavra CASA será FDVD

Atualmente todas as cifras de substituição alfabética simples, são decifradas
com facilidade e não oferecem muita segurança na comunicação por si mesma,
mas a cifra de César muitas vezes pode fazer parte de um sistema
mais complexo de criptografia, como
a cifra de Vigenère, e tem aplicação no sistema ROT13.

## 2. Apresentação do projeto

Um grupo de mulheres residente de um bairro periférico com altos números de feminicídio e denúncias de violência doméstica constatou, ao analisar os casos policiais dos últimos 2 anos, que 60% dos casos graves de violência doméstica contra mulheres no bairro poderia ter sido evitado, por meio de medidas de proteção à vítima, tais como: fornecimento de abrigo e orientações sobre meios de proteção legal. No entanto, precisavam, para além de sensibilizar as demais mulheres do bairro sobre a importância de denunciarem o agressor, reforçar a necessidade de que mulheres em situação de risco comunicassem a rede sobre a situação na qual estivessem envolvidas. A partir de então a rede agiria como um grupo de apoio, seja providenciando um abrigo seguro e/ou prestando consultoria sobre as medidas que deveriam ser tomadas segundo a legislação vigente.

O aplicativo de cifragem de mensagens entra neste contxto como a principal ferramenta de comunicação entre a rede e entre a rede e as vítimas, forncendo um mínimo de segurança na troca de endereços de abrigos, contatos que apoiarão nos processos de mudança de casa da vítima, de forma ágil e rápida. Deste modo, o aplicativo tanto permita cifrar um mensagem como decifrar uma mensagem cifrada anteriormente (desde que a chave de deslocamento seja conhecida).


A cor, laranja, segue em diálogo com a campanha da ONU Mulheres que visa sensibilizar contra a violência de gênero.

## 3. Objetivos de aprendizagem

Os objetivos almejados com a realização desse App foram:

### HTML

- [ ] **Uso de HTML semântico**

  <details><summary>Links</summary><p>

- [ ] **Empregar o modelo de caixa (box model): borda, margem, preenchimento**

  <details><summary>Links</summary><p>

  * [Modelo de Caixa e Display](https://curriculum.laboratoria.la/pt/topics/css/01-css/02-boxmodel-and-display)
  * [The box model - MDN](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/The_box_model)
  * [Introduction to the CSS box model - MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Box_Model/Introduction_to_the_CSS_box_model)
  * [CSS display - MDN](https://developer.mozilla.org/pt-BR/docs/Web/CSS/display)
  * [display - CSS Tricks](https://css-tricks.com/almanac/properties/d/display/)
</p></details>

### Web APIs

- [ ] **Uso de seletores de DOM**

- [ ] **Manipulação de eventos de DOM**

- [ ] **Manipulação dinâmica de DOM**

  <details><summary>Links</summary><p>

  * [Introdução ao DOM](https://developer.mozilla.org/pt-BR/docs/DOM/Referencia_do_DOM/Introdu%C3%A7%C3%A3o)
  * [Element.innerHTML - MDN](https://developer.mozilla.org/pt-BR/docs/Web/API/Element/innerHTML)
</p></details>

### JavaScript

- [ ] **Variáveis (declaração, atribuição, escopo)**

- [ ] **Uso de condicionais (if-else, switch, operador ternário)**

- [ ] **Uso de laços (for, for..of, while)**

- [ ] **Uso de funções (parâmetros, argumentos, valor de retorno)**

- [ ] **Testes unitários**

- [ ] **Módulos de ECMAScript (ES modules)**

- [ ] **Uso de linter (ESLINT)**

- [ ] **Uso de identificadores descritivos (Nomenclatura | Semântica)**

### user-centricity

- [ ] **Desenhar a aplicação pensando e entendendo a usuária**

### product-design

- [ ] **Criar protótipos para obter feedback e iterar**

- [ ] **Aplicar os princípios de desenho visual (contraste, alinhamento, hierarquia)**
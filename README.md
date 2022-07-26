# Cifra de César

## Índice

* [1. Prefácio](#1-prefácio)
* [2. Apresentação do projeto](#2-apresentação-do-projeto)
* [3. Interface](#3-interface)
* [4. Objetivos de aprendizagem](#4-objetivos-de-aprendizagem)

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
#### *OBS: Nomes e números fictícios.*

A Associação de Mulheres da Ladeira Argentina é um grupo de mulheres residentes da comunidade periférica Ladeira Argentina, no município de Maré Cheia. A comunidade possui altos números de feminicídio e denúncias de violência doméstica. Em uma tentativa de construir uma medida efetiva de proteção das mulheres da comunidades, a associação decidiu analisar os casos policiais dos últimos 2 anos e a medida que a pesquisa avança o grupo tem constatado que 60% dos casos graves de violência doméstica contra mulheres no bairro poderia ter sido evitado, por meio de medidas de proteção à vítima, tais como: fornecimento de abrigo e orientações sobre meios de proteção legal. 

No entanto, para além de sensibilizar as mulheres do bairro sobre a importância de denunciarem o agressor, o grupo decidiu construir uma ferramenta para codificar mensagens, onde mulheres em situação de risco pudessem se comunicar com a rede de forma segura. Ao codificar as mensagens trocadas entre elos da rede e entre a rede e as vítimas forneceria segurança na troca de endereços de abrigos e contatos que apoiarão nos processos de mudança de casa da vítima, de forma ágil e rápida. A partir dessa comunicação a rede assumiria o papel de grupo de apoio, ao providenciar abrigo seguro e/ou prestar consultoria sobre as medidas que deveriam ser tomadas segundo a legislação vigente. Além de fornecer um espaço contínuo de diálogo e formação sobre casos de violência doméstica na vizinhança.

## 3. Interface

O aplicativo foi desenvolvido com foco em mulheres em situação de vulnerabilidade social e econômica, residentes da comunidade Ladeira Argentina e idealizado de modo a atender as premissas básicas abaixo: 
- **a)** um campo para inserir a mensagem, a ser codificada ou decodificada; 
- **b)** um campo para inserir o deslocamento das letras; 
- **c)** um campo para exibir a mensagem codificada ou decodificada e; dois botões, 
- **d)** cifrar e, 
- **e)** decifrar.

![protótipo](https://raw.githubusercontent.com/kabianca/SAP008-cipher/main/prototipo.png)

A cor segue em diálogo com a cor adotada pelo 5º objetivo de Desenvolvimento Sustentável, Igualdade de Gênero, entre os 17 pautados pela ONU para que o Brasil concretize sua Agenda 2030. Desde então laranja tem sido adotado pela ONU Mulheres como meio de demarcar a presença da pauta nos espaços de governança e sensibilizar a população em geral sobre os impactos ocasionado pela violência de gênero.

![interface-final](https://raw.githubusercontent.com/kabianca/SAP008-cipher/main/interface.png)

## 4. Objetivos de aprendizagem

Os objetivos almejados com a realização desse App foram:

### **Aprofundar e consolidar** 👩🏾‍💻
---

**HTML**

- [x] Uso de HTML semântico

- [x] Empregar o modelo de caixa (box model): borda, margem, preenchimento

**Web APIs**

- [x] Uso de seletores de DOM

- [x] Manipulação de eventos de DOM

- [ ] Manipulação dinâmica de DOM

**JavaScript**

- [x] Variáveis (declaração, atribuição, escopo)

- [x] Uso de condicionais (if-else, switch, operador ternário)

- [x] Uso de laços (for, for..of, while)

### **Primeiro Contato** ✍🏾
---

**JavaScript**
- [x] Uso de funções (parâmetros, argumentos, valor de retorno)

- [x] Testes unitários

- [x] Módulos de ECMAScript (ES modules)

- [ ] Uso de linter (ESLINT)

- [X] Uso de identificadores descritivos (Nomenclatura | Semântica)

**user-centricity**

- [x] Desenhar a aplicação pensando e entendendo a usuária

**product-design**

- [x] Criar protótipos para obter feedback e iterar

- [x] Aplicar os princípios de desenho visual (contraste, alinhamento, hierarquia)

Créditos:

Imagem de Fundo adaptada de <a href="https://www.freepik.com/vectors/gender-violence">Gender violence vector created by freepik - www.freepik.com</a>
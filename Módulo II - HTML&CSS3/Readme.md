# Primeiros Passos Desenvolvimento Web

## História

* 1969\. EUA. Arpanet. Departamento de Defesa. Gerra Fria. Interligar laboratórios. Primeiro E-Mail.

* 1982\. Universidades. Holanda, Dinamarca e Suécia.

* 1987\. Liberado o uso comercial nos EUA.

* 1992\. CERN cria a World Wide Web. Dados acessíveis a qualquer pessoa com acesso à Internet.

## No Brasil

* 1988\. FAPESP, UFRJ, LNCC.

* 1993\. Uso comercial. EMBRATEL.

* Conexção Discada.

* 2000\. Banda Larga.

## TCP/IP

#### Protocolos de comunicação  entre computadores em rede:

* Transmission Control Protocol

* Internet Protocol

#### Modelo de Camadas

* Física (ex.: Placa de Rede)

* Rede (ex.: IP)

* Transport4e (ex.: TCP, UDP)

* Aplicação (ex.: FTP, SMTP, HTTP)

## TCP vs UDP

#### UDP

* Rápido

* Não Confiável

* Ex.: _Livestream_

#### TCP

* Voltado à Conexão.

* Integridade, ordem dos dados.

* Ex.: Aplicativos de mensagens de texto.

## Portas

Obs: do inglês: ports == Porto

* FTP: 20 

* SSH: 22

* SMTP: 25 | 587 == Gmail

* DNS: 53 

* HTTP: 80 

* HTTPS: 443

* POP3: | 995 == Gmail

## Modem

*Mo*dulator-*dem*odulator: Hardware que converte dados em formato que possa ser transmitido de um computador e lido por outro.

# Posicionando elementos com Flexbox em CSS

## Flex Container

Tag que envolve os itens, onde é aplicado a propriedade _display: flex_. Transforma todas as tags filhas em flex itens.

## Flex Item

Elementos filhos diretos do Flex Container. Também podem se tornar Flex Container.

## Flex-direction

Estabelece o eixo principal do container, definindo assim a direção que os flex items são colocados no flex container.

row (default): Esquerda para Direta.

row-reverse.

column.

column-reverse.

## Flex-wrap

Define se os itens devem ou não quebrar a linha. Por padrão não quebram as linhas, flex itens são compactados além do limite do conteúdo.

nowrap (default): Não permite quebra de linha.

wrap.

wrap-reverse.

## Flex-flow

Atalho para as propriedades flex-direction/flex-wrap.

Não muito utilizado, devido que quando o flex-direction é setado em column mantemos o padrão do flex-wrap == nowrap

## Justify Content

Se encarrega de alinhar itens do container de acordo com a direção pretendida e trata da distrubuição de  espaçamento entre eles. Obs.: Não se aplica caso itens estejam ocupando 100% do container.

## Align-items

Trata do alinhamento dos flex itens de acordo com o eixo do container. O alinhamento é diferente quando os itens estão em colunas ou linhas.

Permite o alinhamento caeantral no eixo vertical.

### Tipos de alinhamento

* center: alinhamento dos itens ao centro;

* stretch (default): flex itens crescem igualmente.

* flex-start: itens no início.

* flex-end: itens no final.

* baseline: alinhamento de acordo com a linha base da tipografia dos itens. 

## Align-content

Trata alinhamento de  linhas do container em relação ao eixo vertical do container.

### Requisitos

* Container utilize quebra de linhas;

* Altura do container seja maior que a soma das linhas dos itens.

### Tipos de alinhamento

- center: alinhamento dos itens ao centro;

- stretch (default): flex itens crescem igualmente.

- flex-start: itens no início.

- flex-end: itens no final.

- space-between: cria espaço igual entre elementos.

- space-around: espaçamentos do meio são 2x maiores que o inicial e o final.

## Flex-grow

Define a proporcionalidade de crescimento dos itens, respeitando o tamanho de seus conteúdos internos. Não funciona em conjunto com justify-content.

## Flex-basis

Estabelece tamanho inicial do item antes da distribuição de espaço restante dentro dele, usando como base o conteúdo interno disposto.

## Flex-shrink

Estabelece capacidade de redução ou compressão de um item.

## Flex

abreviação para as propriedades: grow, shink e basis.

## Align-self

alinhamento de modo individual sobre determinado item.

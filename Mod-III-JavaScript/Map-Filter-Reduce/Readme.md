# Map, Filter e Reduce

## Map

-   Cria novo array / Não modifica array original.
-   Realiza operações ordenadamente

```javascript
array.map(Callback, thisArg);
```

Callback = Função a ser executada em cada elemento.

ThisArg (opcional) = valor "this" dentro da função de callback.

```
callback(item, index, array)
```

```javascript
// Usando map
const array = [1, 2, 3, 4, 5];

array.map((item) => item * 2); // retorno: [2, 4, 6, 8, 10];

// Usando forEach
const array = [1, 2, 3, 4, 5];

array.forEach((item) => item * 2); // retorno: undefined
```

## Filter

-   Cria novo array / Não modifica array original.

```javascript
array.filter(Callback, thisArg);
```

Callback = Função a ser executada em cada elemento.

ThisArg (opcional) = valor "this" dentro da função de callback.

```javascript
const frutas = ["maçã fuji", "maçã verde", "laranja", "abacaxi"];

frutas.filter((fruta) => fruta.includes("maçã"));
// retorno: ['maçã fuji', 'maçã verde"];
```

## Atividades

### Map

-   Pratique a sintaxe de multiplicação de números, uma vez utilizando o parâmetro `this` de um objeto criado por você, e depois sem ele.

### Filter

-   Filtre e retorne todos os números pares de um array.

### Reduce

1. Some todos os números de um array
2. Crie uma função que recebe uma lista de preços e um número representando o saldo disponível. Calcule qual será o saldo final após subtrair todos os preços da lista enviada.

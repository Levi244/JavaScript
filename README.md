# Fundamentos do JavaScript clássico

## INTEGRAÇÕES

### Integrar JavaScript de forma interna

~~~ html
./index.html

<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>JavaScript</title>
</head>
<body>

    
    <script>
        console.log("Hello World!");
    </script>
</body>
</html>
~~~

### Integrar JavaScript de forma externa

- Criar diretório ***src*** na raiz do projeto
- Criar arquivo ***script.js*** na raiz do diretório ***src***
- Integrar de forma externa o arquivo ***script.js*** no arquivo ***index.html***

~~~ html
./index.html

<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>JavaScript</title>
</head>
<body>

    <script src="./src/script.js"></script>
</body>
</html>
~~~

## COMENTÁRIOS

### Comentários de linha

~~~ JavaScript
./src/script.js

//Comentário de linha

~~~

### Comentário de blocos simples

~~~ JavaScript
./src/script.js

/* Comentário de blocos simples */

~~~

### Comentários de blocos com marcadores

~~~ JavaScript
./src/script.js

/**
 * Comentário com bloco de marcador
 */

~~~

## VARIÁVEIS

### Declaração

~~~ JavaScript
./src/script.js

var number;

~~~

### Declaração e atribuição de valor

~~~ JavaScript
./src/script.js

var number;
number = 5;

~~~

### Reatribuição de valor

~~~ JavaScript
./src/script.js

var number =5;

number = 10;

~~~

### Nomenclaturas

- Caracteres Permitidos para iniciar a nomeclatura de um identificador

~~~ JavaScript
./src/script.js

// Letras 
var number;
var Number;

// Sublinhado 
var _number;

// Cifrão
var $number;

~~~

- Case-sensitive

~~~ JavaScript
./src/script.js

// "number" é diferente de "Number"

~~~

- Nomenclatura Compostas

~~~ JavaScript
./src/script.js

// Camel case
var myName;

// Pascal case
var MyName;

// Snake case
var my_name;

~~~

## TIPOS DE DADOS

### Primitivos

### Reatribuição de valor

~~~ JavaScript
./src/script.js

// String
var name = "Levi";
var surname = "Ribeiro"

// Number
var age = 21;
var weight = 69;

// Boolean
var active = true;
var permission = false;

// Undefined
var contains;
console.log(contains)

~~~

### Não primitivos

~~~ javascript
./src/script.js

// - array

var values = [1, "Alex", true, null];

// object literal literal

var person = (name: "Levi", age:21);

var person = {
    name: "Levi"
    age: 21
};

~~~

// Fuction

var message = fuction(){};

~~~

### Inspercionar Tipo

~~~ JavaScript
./src/script.js

//typeof

var age = 21;
console.log(typeof age);

~~~

### Coerção de Tipo
- Implícita

~~~ JavaScript
./src/script.js

//typeof

var agr = 21;
var weight= "86.5";
var result = age + weight;
console.log(typeof result);

~~~

- Explícita 

~~~ JavaScript
./src/script.js

// Number()
var weight = Number ("86.5")
console.log(typeof age);

// 
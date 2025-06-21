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

//Comentário de linha

~~~

### Comentário de blocos simples

~~~ JavaScript

/* Comentário de blocos simples */

~~~

~~~ JavaScript

/**
 * Comentário com bloco de marcador
 */

~~~~

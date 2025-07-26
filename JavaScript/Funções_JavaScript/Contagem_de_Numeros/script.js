function contarAte(numero) {
    if (typeof numero !== 'number' || numero <= 0 || !Number.isInteger(numero)) {
      console.log("Número inválido");
      return;
    }
  
    for (let i = 1; i <= numero; i++) {
      console.log(i);
    }
  }

  contarAte();
  
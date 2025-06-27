function detectar(dado) {
  if (typeof(dado) === 'number') {
    return "É um número.";
  }

  else if (typeof(dado) === 'string') {
    return "É uma string.";
  
  }
  
  else if (typeof(dado) === 'boolean') {
    return "É um booleano.";
  }
    else {
    return "É de outro tipo de dado.";
  }
}

console.log(detectar(10));
console.log(detectar(false));
console.log(detectar("Hola"));
function multiplicarTresNumeros(x, y, z) {
  return x * y * z;
}

console.log(multiplicarTresNumeros(2, 3, 4));

const mult = multiplicarTresNumeros(5, 4, 8);

console.log("0 valor de mult é " + mult);

function podeDirigir(idade, cnh) {
  if (idade >= 18 && cnh == true) {
    console.log("Pode dirigir");
  } else {
    console.log("Não pode dirigir");
  }
}

console.log(podeDirigir(18, true));
console.log(podeDirigir(18, false));
console.log(podeDirigir(17, 1));
console.log(podeDirigir(17, 0));

let carro = {
  portas: 2,
  portaMalas: "200L",
  motor: "2.0"
};

let adicionais = {
  tetosolar: true,
  arcondicionado: true
};

console.log(carro);

Object.assign(carro, adicionais);

console.log(carro);



function imprimirNoConsole() {
  console.log("Olá, Mundo!");
}

imprimirNoConsole();

function imprimirUmNumeroAleatorio(num) {
  console.log("O numéro é: " + num);
}

imprimirUmNumeroAleatorio(4);
imprimirUmNumeroAleatorio(8);
imprimirUmNumeroAleatorio(12);
imprimirUmNumeroAleatorio(24);

const numeroAleatorio = function () {
  console.log(Math.random());
};
numeroAleatorio();
numeroAleatorio();
numeroAleatorio();
numeroAleatorio();

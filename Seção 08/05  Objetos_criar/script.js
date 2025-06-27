let pessoa = {
  nome: "Guilherme",
  idade: 25,
  profissão: "Programador"
};

console.log(pessoa.nome);
console.log(pessoa.idade);

delete pessoa.idade;

console.log(pessoa.profissão)

pessoa.casado = false;

console.log(pessoa.casado);
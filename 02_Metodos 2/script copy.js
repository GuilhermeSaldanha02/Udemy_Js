class Livro {
  constructor(titulo, autor) {
    this.titulo = titulo;
    this.autor = autor;
    this.disponivel = true; 
  }

  emprestar() {
    if (this.disponivel) {
      this.disponivel = false; 
      return `O livro "${this.titulo}" foi emprestado.`;
    } else {
      return `O livro "${this.titulo}" não está disponível para empréstimo.`;
    }
  }

  devolver() {
    if (!this.disponivel) {
      this.disponivel = true; 
      return `O livro "${this.titulo}" foi devolvido e está disponível.`;
    } else {
      return `O livro "${this.titulo}" já está na biblioteca.`;
    }
  }

  consultarDisponibilidade() {
    return this.disponivel;
  }
}

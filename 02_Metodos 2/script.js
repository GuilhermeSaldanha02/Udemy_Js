const cachorro = {
  uivar: function() {
    console.log('au au');
  },
  rosnar: function() {
    console.log('grrrrrr');
  },
  setRaca: function(raca) {
    this.raca = raca;
  }, 
  getRaca: function() {
    return "A raça do cachorro é " + this.raca;
  }
};

console.log(cachorro.raca);

cachorro.setRaca("Pastor alemão");

console.log(cachorro.raca);

console.log(cachorro.getRaca());
function idadeAutoEscola(idade,cnh){
  if(idade >= 18 && cnh == true){
    console.log("Pode dirigir");
  } else {
    console.log("Não pode dirigir");
  }
}

idadeAutoEscola(18,true);
idadeAutoEscola(18,false);
idadeAutoEscola(17,1);
idadeAutoEscola(17,0);
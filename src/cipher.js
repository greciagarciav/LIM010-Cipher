const asciiInicio = 65;
const alfabetoRango = 26;

window.cipher = {
   /*Es el objeto*/
  encode: (offset, string) => {
    /* offset y string son los parametros*/
   /* Encode es el método*/
    let ascii = string.charCodeAt(0);
    let cifrar = (ascii - asciiInicio + offset) % alfabetoRango + asciiInicio;
    let letraCifrada = String.fromCharCode(cifrar);

      console.log(letraCifrada);

  },
  decode: (offset, string) => {
    /* Acá va tu código que descifra*/
  },
  practicaFor: (palabra, desplazamiento) => {

    let letraNormal = '';
    for(let i= 0; i < palabra.length; i++){
        let letraAscii = palabra.charCodeAt(i);
        let cifrar = (letraAscii - asciiInicio + desplazamiento) % alfabetoRango + asciiInicio;
        
        letraNormal = letraNormal + String.fromCharCode(cifrar);
    }

    console.log(letraNormal);

    // for (let i= 0; i<=10; i+=2){
    //   if(i>5){
    //     console.log(i);
    //   }
       
    // }


  }
};

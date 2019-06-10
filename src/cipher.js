const asciiInicio = 65;
const alfabetoRango = 26;

window.cipher = {
   /*Es el objeto*/
  encode: (offset, string) => {
    /* Acá va tu código que cifra*/
    /* offset y string son los parametros*/
   /* Encode es el método*/
    
   
   
    let ascii = string.charCodeAt(0);
    let cifrar = (ascii - asciiInicio + offset) % alfabetoRango + asciiInicio;
    let letraCifrada = String.fromCharCode(cifrar);

    console.log(letraCifrada);
  },
  
  decode: (offset, string) => {
    /* Acá va tu código que descifra*/
  }
};


/* Método Saludar - Ejemplo*/

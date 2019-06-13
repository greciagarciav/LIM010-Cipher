const asciiInicio = 65;
const asciiFin = 90;
const alfabetoRango = 26;

window.cipher = {
  encode: (offset, string) => {

    let palabraCifrada = '';
    for (let indiceLetraCifrar = 0; indiceLetraCifrar<string.length; indiceLetraCifrar++){
      if (string.charCodeAt(indiceLetraCifrar) >= asciiInicio && string.charCodeAt(indiceLetraCifrar)<=asciiFin){
          let ascii = string.charCodeAt(indiceLetraCifrar);
          let cifrar = (ascii - asciiInicio + Number(offset)) % alfabetoRango + asciiInicio;
          
          palabraCifrada = palabraCifrada + String.fromCharCode(cifrar);

          }
          else if (string.charCodeAt(indiceLetraCifrar)===32) {
            palabraCifrada = palabraCifrada + " ";
          }
        }
           
        return palabraCifrada;
  },
        

  
  decode: (offset, string) => {

    let palabraDescifrada = '';
    for (let indiceLetraDescifrar= 0; indiceLetraDescifrar<string.length; indiceLetraDescifrar++){
      if   (string.charCodeAt(indiceLetraDescifrar) >= asciiInicio && string.charCodeAt(indiceLetraDescifrar)<=asciiFin){ 
          let asciiDes = string.charCodeAt(indiceLetraDescifrar);
          let descifrar = (asciiDes - asciiFin - Number(offset)) % alfabetoRango + asciiFin;
          
          palabraDescifrada = palabraDescifrada + String.fromCharCode(descifrar);
          }
      
          else if(string.charCodeAt(indiceLetraDescifrar)===32){
            palabraDescifrada = palabraDescifrada + " ";
          }
        }
        
    return palabraDescifrada;
  },
  
}; 
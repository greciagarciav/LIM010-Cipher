const asciiInicio = 65;
const asciiFin = 90;
const alfabetoRango = 26;

window.cipher = {
  encode: (offset, string) => {
    let palabraCifrada = '';
    for (let indiceLetraCifrar = 0; indiceLetraCifrar<string.length; indiceLetraCifrar++){
      if (string.charCodeAt(indiceLetraCifrar) >= asciiInicio && string.charCodeAt(indiceLetraCifrar)<=asciiFin){
          let ascii = string.charCodeAt(indiceLetraCifrar);
          let cifrar = (ascii - asciiInicio + offset) % alfabetoRango + asciiInicio;
          
          palabraCifrada = palabraCifrada + String.fromCharCode(cifrar);

          }
          else if (string.charCodeAt(indiceLetraCifrar)===32) {
            palabraCifrada = palabraCifrada + " ";
          }
        }
          
          console.log(palabraCifrada); 

          },
        

  
  decode: (offset, string) => {
    let palabraDescifrada = '';
    for (let indiceLetraDescifrar= 0; indiceLetraDescifrar<string.length; indiceLetraDescifrar++){
      if   (string.charCodeAt(indiceLetraDescifrar) >= asciiInicio && string.charCodeAt(indiceLetraDescifrar)<=asciiFin){ 
          let asciiDes = string.charCodeAt(indiceLetraDescifrar);
          let descifrar = (asciiDes - asciiFin - offset) % alfabetoRango + asciiFin;
          
          palabraDescifrada = palabraDescifrada + String.fromCharCode(descifrar);
          }
      
          else if(string.charCodeAt(indiceLetraCifrar)===32){
          }
        }
    console.log(palabraDescifrada);
  },
  
}; 
const asciiInicio = 65;
const asciiFin = 90;
const asciiMinInicio= 97;
const asciiMinFin= 122;
const asciiNumInicio= 48;
const asciiNumFin= 57;
const alfabetoRango = 26;
const numerosRango= 10;

window.cipher = {
  encode: (offset, string) => {

    let palabraCifrada = '';
    for (let indiceLetraCifrar = 0; indiceLetraCifrar<string.length; indiceLetraCifrar++){

      let ascii = string.charCodeAt(indiceLetraCifrar);

      if (ascii >= asciiInicio && ascii<=asciiFin){
          let cifrar = (ascii - asciiInicio + Number(offset)) % alfabetoRango + asciiInicio;
          palabraCifrada = palabraCifrada + String.fromCharCode(cifrar);
         
        } else if ( ascii>=asciiMinInicio && ascii<=asciiMinFin)   {
          let cifrarMin = (ascii- asciiMinInicio + Number(offset))% alfabetoRango + asciiMinInicio;
          palabraCifrada = palabraCifrada + String.fromCharCode(cifrarMin);
        
        } else if (ascii>=asciiNumInicio && ascii<=asciiNumFin){
          let cifrarNum = (ascii- asciiNumInicio + Number(offset))% numerosRango + asciiNumInicio;
          palabraCifrada = palabraCifrada + String.fromCharCode(cifrarNum);

        }else if (ascii===32) {
          palabraCifrada = palabraCifrada + " ";
        }else if (ascii===46) {
          palabraCifrada = palabraCifrada + ".";
        }else if (ascii===44) {
          palabraCifrada = palabraCifrada + ",";
        }else if (ascii===209 || ascii==241){
          palabraCifrada = palabraCifrada + String.fromCharCode(ascii);

        }
      }        
        return palabraCifrada
  },
        
  
  decode: (offset, string) => {

    let palabraDescifrada = '';
    for (let indiceLetraDescifrar= 0; indiceLetraDescifrar<string.length; indiceLetraDescifrar++){

      let asciiDes = string.charCodeAt(indiceLetraDescifrar);

        if(asciiDes >= asciiInicio && asciiDes<=asciiFin){ 
          let descifrar = (asciiDes - asciiFin - Number(offset)) % alfabetoRango + asciiFin;
          palabraDescifrada = palabraDescifrada + String.fromCharCode(descifrar);
          
          }else if (asciiDes >= asciiMinInicio && asciiDes<=asciiMinFin){ 
            let descifrarMin = (asciiDes - asciiMinFin - Number(offset)) % alfabetoRango + asciiMinFin;
            palabraDescifrada = palabraDescifrada + String.fromCharCode(descifrarMin);

          }else if (asciiDes >= asciiNumInicio && asciiDes<=asciiNumFin) {
            let descifrarNum = (asciiDes - asciiNumFin - Number(offset)) % numerosRango + asciiNumFin;
            palabraDescifrada = palabraDescifrada + String.fromCharCode(descifrarNum);

          }else if (asciiDes===32){
            palabraDescifrada = palabraDescifrada + " ";
          }else if (asciiDes===46){
            palabraDescifrada = palabraDescifrada + ".";
          }else if (asciiDes===44){
          palabraDescifrada = palabraDescifrada + ",";
          }else if (asciiDes===209 || asciiDes==241){
            palabraDescifrada = palabraDescifrada + String.fromCharCode(asciiDes);
          }
        }
    return palabraDescifrada
    },
}; 
/* Acá va tu código */
let intentos = 0;

const btnSiguiente = document.getElementById('btnContrasena');
const enterBtnSiguiente = document.getElementById('contrasena');
const btnCifrarDedicatoria = document.getElementById('btnCifrar');
const btnVerificarResultadoCifrado = document.getElementById('btnVerificarCifrado');
const btnDescifrarDedicatoria = document.getElementById('btnDescifrar');
const btnFinalizar = document.getElementById('btnResultadoDescifrado');



enterBtnSiguiente.addEventListener('keypress', (event)  =>{

    if (event.keyCode===13) {
        btnContrasena.click(contrasena.value);
        }

});

btnContrasena.addEventListener('click', () =>{

        if (contrasena.value == 'LABORATORIA') {
        
            document.getElementById('inicio').classList.add("ocultar");
            document.getElementById('cifrar').classList.remove("ocultar");  
        }

        else{
            if(intentos >= 3){
                document.getElementById('inicio').classList.add("ocultar");
                document.getElementById('bloquearIntentos').classList.remove("ocultar");
            }

            else{
                alert("La contraseña no es correcta");
                document.getElementById('contrasena').value = '';
            };
            
            intentos++;
            console.log(intentos);
        }
    });
  
    
btnCifrar.addEventListener('click', () =>{
    let palabraCifrar = document.getElementById('textodedicatoria').value; 
    let desplazamientoCifrar = document.getElementById('desplazamientoCifrar').value;       
        document.getElementById('cifrar').classList.add("ocultar");
        document.getElementById('resultadoCifrado').classList.remove("ocultar");
          console.log('palabraCifrar ' + palabraCifrar);
          console.log('desplazamientoCifrar ' + desplazamientoCifrar);  

         let ejecutarCifrado = cipher.encode(desplazamientoCifrar, palabraCifrar);

         console.log(ejecutarCifrado);

         document.getElementById('txtresultadooriginal').value = document.getElementById('textodedicatoria').value; 
         document.getElementById('txtresultadocifrado').value = ejecutarCifrado;
        });



btnVerificarResultadoCifrado.addEventListener('click', () =>{

            document.getElementById('resultadoCifrado').classList.add("ocultar");
            document.getElementById('descifrar').classList.remove("ocultar"); 
            document.getElementById('textodescifrar').value = document.getElementById('txtresultadocifrado').value;  
            document.getElementById('desplazamientoDescifrar').value = document.getElementById('desplazamientoCifrar').value; 
        });

btnDescifrarDedicatoria.addEventListener('click', () =>{
    let palabraDescifrar = document.getElementById('textodescifrar').value;
    let desplazamientoDescifrar = document.getElementById('desplazamientoDescifrar').value; 
            document.getElementById('descifrar').classList.add("ocultar");
            document.getElementById('resultadoDescifrado').classList.remove("ocultar"); 
            console.log('palabraDescifrar' + palabraDescifrar);
            console.log('desplazamientoDescifrar' + desplazamientoDescifrar);

            let ejecutarDescifrado = cipher.decode(desplazamientoDescifrar, palabraDescifrar);

            document.getElementById('txtresultadodescifrado').value = document.getElementById('textodescifrar').value; 
            document.getElementById('textoresultadooriginal2').value = ejecutarDescifrado;
        });

btnFinalizar.addEventListener('click', () =>{
    document.getElementById('resultadoDescifrado').classList.add("ocultar");
    document.getElementById('inicio').classList.remove("ocultar"); 
    document.getElementById('contrasena').value = ''; 
});

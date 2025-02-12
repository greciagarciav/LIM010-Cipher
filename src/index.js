
let intentos = 0;

const btnContrasena = document.getElementById('btnContrasena');
const contrasena = document.getElementById('contrasena');
const btnCifrarDedicatoria = document.getElementById('btnCifrar');
const btnVerificarResultadoCifrado = document.getElementById('btnVerificarCifrado');
const btnDescifrarDedicatoria = document.getElementById('btnDescifrar');
const btnFinalizar = document.getElementById('btnResultadoDescifrado');
const txtdedicatoria = document.getElementById('textodedicatoria');
const offsetCifrar = document.getElementById('desplazamientoCifrar');
const txtdedicatoriaCifrada = document.getElementById('textodescifrar');
const offsetDescifrar = document.getElementById('desplazamientoDescifrar');

contrasena.addEventListener('keypress', (event)  =>{
    
    document.getElementById('msjConstrasenaIncorrecta').classList.add("ocultar");
    
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
                document.getElementById('msjConstrasenaIncorrecta').classList.remove("ocultar")
                document.getElementById('contrasena').value = '';
            }
            
            intentos++;
        }
});
  
txtdedicatoria.addEventListener('keypress', ()=>{
        document.getElementById('debesEscribirTuDedicatoria').classList.add("ocultar");
        document.getElementById('desplazamientoCifrar').value = '';
     })
    

btnCifrarDedicatoria.addEventListener('click', () =>{
    let palabraCifrar = document.getElementById('textodedicatoria').value; 
    let desplazamientoCifrar = document.getElementById('desplazamientoCifrar').value; 
   
    if (txtdedicatoria.value !== '' && offsetCifrar.value !== ''){  
        document.getElementById('cifrar').classList.add("ocultar");
        document.getElementById('resultadoCifrado').classList.remove("ocultar");


         let ejecutarCifrado = cipher.encode(desplazamientoCifrar, palabraCifrar);

         document.getElementById('txtresultadooriginal').value = document.getElementById('textodedicatoria').value; 
         document.getElementById('txtresultadocifrado').value = ejecutarCifrado;

        }
        else {

            document.getElementById('debesEscribirTuDedicatoria').classList.remove("ocultar");
            document.getElementById('textodedicatoria').value = '';
        }   
});


btnVerificarResultadoCifrado.addEventListener('click', () =>{

            document.getElementById('resultadoCifrado').classList.add("ocultar");
            document.getElementById('descifrar').classList.remove("ocultar"); 

});


txtdedicatoriaCifrada.addEventListener('keypress', () =>{
        document.getElementById('debesPegarTuDedicatoria').classList.add("ocultar");
        document.getElementById('desplazamientoDescifrar').value = '';
})

btnDescifrarDedicatoria.addEventListener('click', () =>{
    let palabraDescifrar = document.getElementById('textodescifrar').value;
    let desplazamientoDescifrar = document.getElementById('desplazamientoDescifrar').value;
    
    if (txtdedicatoriaCifrada.value !=='' && offsetDescifrar.value !==''){
            document.getElementById('descifrar').classList.add("ocultar");
            document.getElementById('resultadoDescifrado').classList.remove("ocultar"); 


            let ejecutarDescifrado = cipher.decode(desplazamientoDescifrar, palabraDescifrar);

            document.getElementById('txtresultadodescifrado').value = document.getElementById('textodescifrar').value; 
            document.getElementById('textoresultadooriginal2').value = ejecutarDescifrado;
        }
        else{
            document.getElementById('debesPegarTuDedicatoria').classList.remove("ocultar");
            document.getElementById('textodescifrar').value = '';
    }
});


btnFinalizar.addEventListener('click', () =>{
    document.getElementById('resultadoDescifrado').classList.add("ocultar");
    document.getElementById('inicio').classList.remove("ocultar"); 
    document.getElementById('contrasena').value = '';
    document.getElementById('msjConstrasenaIncorrecta').classList.add("ocultar");
    document.getElementById('textodedicatoria').value = '';
    document.getElementById('desplazamientoCifrar').value = '';
    document.getElementById('txtresultadooriginal').value = '';
    document.getElementById('txtresultadocifrado').value = '';
    document.getElementById('textodescifrar').value = '';
    document.getElementById('desplazamientoDescifrar').value = '';
    document.getElementById('txtresultadodescifrado').value = '';
    document.getElementById('textoresultadooriginal2').value = '';
});

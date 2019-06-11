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
            document.getElementById('cifrar').classList.add("ocultar");
            document.getElementById('resultadoCifrado').classList.remove("ocultar");
        });



btnVerificarResultadoCifrado.addEventListener('click', () =>{

            document.getElementById('resultadoCifrado').classList.add("ocultar");
            document.getElementById('descifrar').classList.remove("ocultar");  
        });

btnDescifrarDedicatoria.addEventListener('click', () =>{
    document.getElementById('descifrar').classList.add("ocultar");
    document.getElementById('resultadoDescifrado').classList.remove("ocultar");  
        });

btnFinalizar.addEventListener('click', () =>{
    document.getElementById('resultadoDescifrado').classList.add("ocultar");
    document.getElementById('inicio').classList.remove("ocultar"); 
    document.getElementById('contrasena').value = ''; 
});

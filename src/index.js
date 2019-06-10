/* Acá va tu código */
let intentos = 0;

const btn = document.getElementById('btnContrasena');
let contrasena = document.getElementById('contrasena');
let inputEnter = document.getElementById('contrasena');

inputEnter.addEventListener("keyup", ()  =>{

    if (contrasena.value == 'LABORATORIA') {
        document.getElementById('btnContrasena').click;  
    }

   else{
       // if(intentos >= 3){
         //   document.getElementById('inicio').classList.add("ocultar");
           // document.getElementById('bloquearIntentos').classList.remove("ocultar")

     //   else{
         //   alert("La contraseña no es correcta");
       // };
        
      //  intentos++;
        //console.log(intentos);
    }
});

btnContrasena.addEventListener("click", () =>{

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
            };
            
            intentos++;
            console.log(intentos);
        }
    });
  
const btn2 = document.getElementById('btnCifrar');

btn2.addEventListener('click', () =>{
    let dedicatoria = document.getElementById('dedicatoria').value;

    CifrarDedicatoria();

    console.log("cifrando");

})



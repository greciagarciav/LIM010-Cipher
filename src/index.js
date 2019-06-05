/* Acá va tu código */
let intentos = 0;

const btn = document.getElementById('btnContrasena');

btn.addEventListener('click', () =>{
    let contrasena = document.getElementById('contrasena').value;

    ValidarContrasena(contrasena);

    console.log(contrasena);
});

function ValidarContrasena(cons){
    if (cons == 'LABORATORIA') {
        document.getElementById('inicio').style.display="none";
        document.getElementById('cifrar').style.display="block";
    }
    else{
        if(intentos >= 3){
            alert("Agotaste tus intentos");
            //Código para bloquear el input
        }
        else{
            alert("La contraseña no es correcta");
        };
        intentos++;
        console.log(intentos);
    }
}

const btn2 = document.getElementById('btnCifrar');

btn2.addEventListener('click', () =>{
    let dedicatoria = document.getElementById('dedicatoria').value;

    CifrarDedicatoria();

    

})




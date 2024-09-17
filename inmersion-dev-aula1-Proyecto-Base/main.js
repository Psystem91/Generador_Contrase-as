let cantidad = document.getElementById("cantidad");
let cantidad2 = 8;
let boton = document.getElementById("generar");
let boton2 = document.getElementById("limpiar");
let contrasena = document.getElementById("contrasena");

let caracteres = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
let password = "";

function generar(){

    let numDigital = parseInt(cantidad.value);
    

    if (numDigital < 8){
        alert("El numero debe ser mayor que 8");
        cantidad.value = "";
        contrasena.value = password;
    } else {

        for(i=0; i < numDigital; i++){

            let caracAlea = caracteres[Math.floor(Math.random() * caracteres.length)];
    
            password += caracAlea;
    
        }

        contrasena.value = password;

    }


}

function limpiar(){

    let password = "";

    cantidad.value = "";
    contrasena.value = password;

    alert("Campos liberados");

}









for (let i = 1; i <= 5; i++) {
/*Pedir Nombre y apellido*/
let nombre = prompt("Ingrese su nombre");
let apellido = prompt("Ingrese su apellido");

alert("Bienvenido " + nombre + " " + apellido );

/*Pedir Edad */
let edad = parseInt(prompt("Ingrese su edad"));
    
if(edad >=18){
    alert("Sos mayor de edad!!");
}else{
    alert("No sos mayor de edad!!");
}

/*For*/
    
    let ingresarMail = prompt("Ingresar Mail");
    let ingresarDni = parseInt(prompt("Ingrese su DNI"));
    alert(" Entrada N° " + i);
    
    
/*While*/
    
    let comentario = prompt("¿Desea dejar un comentario?");
    while(comentario != "no"){
        alert("Comentario ingresado: "+ comentario);
        comentario = prompt("¿Deseas agregar otro comentario?");
    }
}
alert("Se terminaron las entradas, hasta la proxima")
    














   

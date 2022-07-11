

/*for(let i = 1 ; i < 10 ; i++){

    let nombre = prompt("Ingrese su nombre");
    alert("Bienvenido a mi página " + nombre);


    let edad = parseInt(prompt("ingrese su edad:"));
    if(edad >= 18){
    alert("Sos mayor de edad!");
}
    else{
    alert("No sos mayor de edad!");
}

    let dniIngresado = prompt("Ingrese su DNI:");

    alert("DNI " + dniIngresado + "." + "\nSu entrada es la N:" + i);
    alert("Gracias por su visita")
    break;
}*/


let usuario = "bucleAdmin";
let pass = "programacionFacil";
let introduceUsuario;
let introducePass;

introduceUsuario = prompt("Introduce el nombre de un usuario autorizado para ejecutar el bucle.");
introducePass = prompt("Introduce una contraseña.");

if (introduceUsuario != usuario || introducePass != pass) {
	alert("Error. Usuario y/o contraseña no válidos.");
}

else {
alert("El bucle va a comenzar.");

for(i=10;i>=-19;i--){
	if (i == 0) {
		continue;
	}
	document.write("El valor del bucle es: " + i + "<br>");
	if (i == -10) {
		break;
	}
}

document.write("El bucle ha finalizado.");
}
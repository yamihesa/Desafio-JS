let nombre = prompt("Ingrese su nombre");
alert("Bienvenido a mi página " + nombre);

let edad = parseInt(prompt("ingrese su edad:"));
if(edad >= 18){
    alert("Sos mayor de edad!");
}
else{
    alert("No sos mayor de edad!");
}

/*-----------------*/

for(let i = 1 ; i < 50 ; i++){

    if(i == 1){

        alert("Apurate, esta es la ultima entrada")

    }

    let dniIngresado = prompt("Ingrese su DNI:")

    alert("DNI " + dniIngresado + "." + "\nSu entrada es la N:" + i)

}

alert("Nos quedamos sin entradas por hoy")
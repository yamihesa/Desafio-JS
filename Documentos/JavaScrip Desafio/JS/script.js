

for(let i = 1 ; i < 10 ; i++){

    if(i == 1){
       
}
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
}


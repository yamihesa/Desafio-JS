



    let nombre = prompt("Ingrese su nombre");
    let apellido = prompt("Ingrese su apellido")
    alert("Bienvenido a mi página " + nombre + "" + apellido);


    let edad = parseInt(prompt("ingrese su edad:"));
    if(edad >= 18){
    alert("Sos mayor de edad!");
}
    else{
    alert("No sos mayor de edad!");
}

let dniIngresado = prompt("Ingrese su DNI:");

for(let i = 1 ; i < 10 ; i++){
    alert("\nSu entrada es la N:" + i);
}


let mail = prompt("Ingrese su mail");
//Repetimos con While hasta que el usuario ingresa "ESC"
while(mail != "ESC" ){
    alert("El usuario ingresó "+ mail);
    //Volvemos a solicitar un dato. En la próxima iteración se evalúa si no es ESC.
    mail = prompt("Ingresar otro mail si tiene");
    alert("Gracias por su visita")
    break;
}



/*let i = 0;       // el inicializador
while (i <= 20) { // la condición
  console.log("El numero es " + i);
  i = i + 2;      // el incrementador
}*/
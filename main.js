//alert('Hola Mundo!'); //alertas

var nombre = "Yesenia Campos";
var altura = 160;
/*
var concatenacion = nombre + " " + altura;

//document.write(concatenacion);
var datos = document.getElementById("datos");

datos.innerHTML = `
    <h1> Soy la caja de datos </h1>
    <h2> Mi nombre es: ${nombre} </h2>
    <h3>Mido: ${altura} cm </h3>
`;

if (altura >= 190) {
    datos.innerHTML += `
    <h1> Eres una persona alta </h1>`;
} else {
    datos.innerHTML += `
    <h1> Eres una persona bajita </h1>`;
}

for(var i = 1996; i <=2023; i++) {
    datos.innerHTML += "<h2> Estamos en el año " + i + "</h2>";
}*/



function muestrMiNombre(nombre, altura) {
 
    var misDatos = `
    <h1> Soy la caja de datos </h1>
    <h2> Mi nombre es: ${nombre} </h2>
    <h3>Mido: ${altura} cm </h3>
    `;
    
    return misDatos;
}

function imprimir(){
    var datos = document.getElementById("datos");

    datos.innerHTML = muestrMiNombre("Ana", 190);
}

imprimir();

var nombres = ['Victor', 'Antonio', 'Juan'];

document.write(`<h1> Listado de Nombres </h1>`);
/*
for( i = 0; i < nombres.length; i++ ) {
    document.write(nombres[i] +  `<br />`);
}
*/

/*nombres.forEach(function(nombre){
    document.write(nombre + `<br/>`)
});*/
nombres.forEach((nombre) =>{
    document.write(nombre + `<br/>`)
});

// OBJETOS JSON

var coche = {
    modelo: 'Mercedes Clase A',
    maxima: 500,
    antiguedad: 2020,
    mostrarDatos(){
        console.log(this.modelo,this.maxima, this.antiguedad);
    },
    propiedad1: "Valor aleatorio"
}

document.write(`<h1> ${coche.modelo} </h1>`);
coche.mostrarDatos(); 

//PROMESAS//
var saludar = new Promise((resolve, reject) => {
    
    setTimeout(() => {
        let saludo = "Hola muy buenas a todos!";

        if(saludo){
            resolve(saludo);
        }else{
            reject("Nohay saludo disponible");
        }
    }, 2000);

});

saludar.then(resultado => {
    alert(resultado);
})
.catch( err => {
    alert(err);
});



class Coche {
    constructor(modelo, velocidad, antiguedad){
        this.modelo = modelo;
        this.velocidad = velocidad;
        this.antiguedad= antiguedad;
    }

    aumentarVelocidad(){
        this.velocidad += 1;
    }

    reducirvelocidad(){
        this.velocidad -= 1;
    }
}

class Autubus extends Coche {
    constructor(modelo, velocidad, antiguedad){
        super(modelo, velocidad, antiguedad);
        this.altura = 5;
    }

    mostrarAltura(){
        return "La altura del bus es: " + this.altura;
    }
}

var autobus1 = new Autubus('PEGASUS', 200, 2015);
console.log(autobus1.mostrarAltura());


var coche1 = new Coche('BMW', 200, 2017);
var coche2 = new Coche('Audi', 100, 2018);
var coche3 = new Coche('Mercedes', 200, 2017);
var coche4 = new Coche('Ford', 200, 2017);


console.log(coche1);
coche1.aumentarVelocidad();
coche1.aumentarVelocidad();
console.log(coche1);
//Objetos en javascript

let jugador1 = {

 nombre:'Cristiano Ronaldo',

 apellidos:'Dos Santos Aveiro',

 dorsal:7,

 equipos: [

   {
    nombre:"Real Madrid",
    ciudad:"Madrid" 
   },
   {
    nombre:"City",
    ciudad:"Manchester" 
   }

 ], 

 goles:8,

 marcarGol() {

     this.goles++;

 }

}


jugador1.marcarGol();
jugador1.dorsal=9;

console.log(jugador1);


//2forma


let jugador2 = new Object();
jugador2.nombre="lionel"
jugador2.goles=2
jugador2.dorsal=7

jugador2.marcarGol = function() {

   this.goles++;

}


console.log(jugador2);


//3forma

function Jugador(nombre,apellidos,dorsal,goles){

this.nombre=nombre;
this.apellidos=apellidos;
this.dorsal=dorsal;
this.goles=goles;

this.marcarGol = function () {

  this.goles++;
  alert("GOL DE " + this.nombre + "-" + this.apellidos + "-" + this.marcarGol());
  

}

 
}

let Jugador3 = new Jugador("pepe","pp",4,6);

 console.log(Jugador3);


//4 forma
class Jugador5 {
    constructor(nombre, apellidos, dorsal, goles) {
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.dorsal = dorsal;
        this.goles = goles;
        this.marcarGol = function () {
            this.goles++;
            alert("GOL DE " + this.nombre + "-" + this.apellidos + "-" + this.marcarGol());
        };
    }
}

let Jugador6 = new Jugador5("hhh","kkkkkkk",67,6);
console.log(Jugador6);




class Vehiculo {

   nombre;
   modelo;
   color;
   stock;


    constructor(nombre,modelo,color) {
        this.nombre = nombre;
        this.modelo = modelo;
        this.color = color;
   
        
        this.dameStock = function () {
            this.stock++;
        };
   
    }

    cambioColor(color){

        this.color=color;
    }
}

 let Vehiculo1=new Vehiculo(undefined,"JJJJOJJJ",undefined);
 console.log(Vehiculo1);
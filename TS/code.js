var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
console.log('Hola mundo desde TS');
var nombre = 'Juan';
var edad = 32;
var casado = false;
var fechaNacimiento = new Date();
var vacio = undefined;
var nulo = null;
var indefinido = undefined;
var x = 'hola';
var transmilenio = ["hola", "mundo", 4, true, {}, []];
var numeros = [1, 2, 3, 4, 5];
var metro = [
    ['hola', 1, 'mundo'],
    ['hola', 2, 'mundo'],
    ['hola', 3, 'mundo'],
    ['hola', 4, 'mundo'],
    ['hola', 5, 'mundo']
];
var Hermione = {
    nombre: 'Hermione',
    apellido: 'Granger',
    edad: 20,
    casa: 'Gryffindor',
    hechizos: [
        { nombre: 'Expelliarmus', poder: 10, damage: 5 },
        { nombre: 'Expecto Patronum', poder: 15, damage: 10 },
        { nombre: 'Wingardium Leviosaaaaa', poder: 5, damage: 2 }
    ],
    muggle: false
};
var Ron = {
    nombre: 'Ron',
    apellido: 'Weasley',
    edad: 20,
    casa: 'Gryffindor',
    hechizos: [
        { nombre: 'Expelliarmus', poder: 10, damage: 5 },
        { nombre: 'Expecto Patronum', poder: 15, damage: 10 },
        { nombre: 'Wingardium Leviosaaaaa', poder: 5, damage: 2 }
    ],
    muggle: false
};
function prisioneroAzkaban(personajes) {
    var la_banda = [];
    personajes.forEach(function (personaje) {
        la_banda.push(personaje.nombre);
    });
    return la_banda;
}
prisioneroAzkaban([Hermione, Ron]);
var Mago = /** @class */ (function () {
    function Mago(nombre, apellido, edad, casa, hechizos, muggle) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.casa = casa;
        this.hechizos = hechizos;
        this.muggle = muggle;
    }
    Mago.prototype.prisioneroAzkaban = function () {
        var la_banda = [];
        this.hechizos.forEach(function (hechizo) {
            la_banda.push(hechizo.nombre);
        });
        return la_banda;
    };
    Mago.prototype.esta_vivo = function () {
        return true;
    };
    return Mago;
}());
var conjuros = /** @class */ (function (_super) {
    __extends(conjuros, _super);
    function conjuros(nombre, apellido, edad, casa, hechizos, muggle) {
        return _super.call(this, nombre, apellido, edad, casa, hechizos, muggle) || this;
    }
    conjuros.prototype.esta_vivo = function () {
        return false;
    };
    return conjuros;
}(Mago));
var pelicula = new conjuros('Harry', 'Potter', 20, 'Gryffindor', Hermione.hechizos, false);
console.log(pelicula.esta_vivo());

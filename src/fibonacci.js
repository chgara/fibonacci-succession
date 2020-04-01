"use strict";
exports.__esModule = true;
var Fibonacci = /** @class */ (function () {
    function Fibonacci(nom, num) {
        this.name = nom;
        this.size = num;
    }
    Fibonacci.prototype.getName = function () {
        return this.name;
    };
    Fibonacci.prototype.getSize = function () {
        return this.size;
    };
    Fibonacci.prototype.fibonacci = function (n) {
        if (n > 1) {
            return this.fibonacci(n - 1) + this.fibonacci(n - 2);
        }
        else if (n === 1)
            return 1;
        else if (n === 0)
            return 0;
        else
            return -1;
    };
    Fibonacci.prototype.showSerie = function () {
        console.log(this.name + " with the size of " + this.size);
        for (var i = 0; i < this.size; i++) {
            this.serie.push('Hola');
        }
        return this.serie;
    };
    return Fibonacci;
}());
exports.Fibonacci = Fibonacci;

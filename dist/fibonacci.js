"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Fibonacci {
    constructor(nom, num) {
        this.name = nom;
        this.size = num + 1;
        this.serie = [];
    }
    getName() {
        return this.name;
    }
    getSize() {
        return this.size;
    }
    fibonacci(n) {
        if (n > 1) {
            return this.fibonacci(n - 1) + this.fibonacci(n - 2);
        }
        else if (n === 1)
            return 1;
        else if (n === 0)
            return 0;
        else
            return -1;
    }
    showSerie() {
        console.log(`${this.name.toUpperCase()} with the size of ${this.size}`);
        for (let i = 0; i < this.size; i++) {
            this.serie.push(`A${i} = ${this.fibonacci(i)}`);
        }
        return this.serie;
    }
}
exports.Fibonacci = Fibonacci;
//# sourceMappingURL=fibonacci.js.map
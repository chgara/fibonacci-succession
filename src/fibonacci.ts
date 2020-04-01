import { red, cyan, bold } from 'colors';

export class Fibonacci {
    private name: string;
    private size: number;
    private serie: Array<string>;

    constructor(nom: string, num: number) {
        this.name = nom;
        this.size = num + 1;
        this.serie = [];
    }
    public getName(): string {
        return this.name;
    }
    public getSize(): number {
        return this.size;
    }
    private fibonacci(n: number): number {
        if (n > 1) {
            return this.fibonacci(n - 1) + this.fibonacci(n - 2);
        } else if (n === 1) return 1;
        else if (n === 0) return 0;
        else return -1;
    }
    public showSerie(): Array<string> {
        console.log(`${this.name.toUpperCase()} with the size of ${this.size}`);

        for (let i: number = 0; i < this.size; i++) {
            this.serie.push(`A${i} = ${this.fibonacci(i)}`);
        }
        return this.serie;
    }
}

import CalculatorInterface from "./calculatorInterface";

export default class Calculator implements CalculatorInterface {
    public add(a: number, b: number): number {
        return a + b;
    }
    public subtract(a: number, b: number): number {
        return a - b;
    }
    public mulitply(a: number, b: number): number {
        return a * b;

    }
    public divide(a: number, b: number): number | void {
        if (b != 0) return a / b;
        console.error("Divisor is Zero");
    }

    public pretty_print(a:number, b:number, op: Function) : void{
        let sym: string;
        switch(op){
            case this.add: sym = "+";
            break;
            case this.subtract: sym = '-';
            break;
            case this.mulitply: sym = '*';
            break;
            case this.divide: sym = '/';
            break;
        }
        console.log(`${a} ${sym} ${b} = ${op(a,b)}`);
    }
}
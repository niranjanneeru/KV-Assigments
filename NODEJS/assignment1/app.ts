import Calculator from "./calculator";

const calculator = new Calculator();

calculator.pretty_print(160, 132, calculator.add);
calculator.pretty_print(2023, 2002, calculator.subtract);
calculator.pretty_print(10, 2, calculator.mulitply);
calculator.pretty_print(1971, 12, calculator.divide);
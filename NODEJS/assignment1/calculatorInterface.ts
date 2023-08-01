export default interface CalculatorInterface {
  add(a: number, b: number): number;
  subtract(a: number, b: number): number;
  mulitply(a: number, b: number): number;
  divide(a: number, b: number): number | void;
}
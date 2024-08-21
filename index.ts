export class Calculator {
  private result: number = 0;

  public add(value: number): this {
    this.result += value;
    return this;
  }

  public subtract(value: number): this {
    this.result -= value;
    return this;
  }

  public multiply(value: number): this {
    this.result *= value;
    return this;
  }

  public divide(value: number): this {
    if (value === 0) {
      throw new Error("Cannot divide by zero");
    }

    this.result /= value;
    return this;
  }

  public value(): number {
    return this.result;
  }
}

const calculator = new Calculator();

const result = calculator.add(5).subtract(2).multiply(3).divide(2).value();

console.log(result); // 4.5

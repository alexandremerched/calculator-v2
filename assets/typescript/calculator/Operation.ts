interface OptionsOperation {

  onCalculated: any;

}

export default class Operation {

  private onCalculated: any;
  
  constructor(
    opts: OptionsOperation,
    private operation: string[] = []
  ) {

    this.onCalculated = opts.onCalculated;

  }

  add(value: string): number {

    if (this.operation.length === 3) {
      this.calculate();
    }

    this.operation.push(value);

    console.log(this.operation);

    return this.length;

  }

  getResult(): string {

    let result: string = "0";

    try {
      result = (eval(this.operation.join(""))).toString();
    } catch (error) {
      result = "ERRO";
    }

    return result;

  }

  calculate(): void {

    let result = this.getResult();

    if (result.length > 12) {
      result = result.substring(0, 12);
    }

    this.operation = [result];

    this.onCalculated(result);

  }

  get lastPosition(): string {

    return this.operation.length ? this.operation[this.operation.length - 1] : "0";

  }

  set lastPosition(value: string) {

    const lastIndex = this.operation.length ? this.operation.length - 1 : 0;

    this.operation[lastIndex] = value;

  }

  get length(): number {

    return this.operation.length;

  }

}
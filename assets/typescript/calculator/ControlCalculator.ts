import DateHour from "./DateHour.js";
import Operation from "./Operation.js";
import Screen from "./Screen.js";

export default class ControlCalculator {

  constructor(
    private screen = new Screen(),
    private operation = new Operation({
      onCalculated: (result: string) => this.screen.content = result
    })
  ) {

    new DateHour();

    this.buttonsEvents();

  }

  buttonsEvents(): void {

    document.querySelectorAll("#keyboard button").forEach(element => {

      element.addEventListener("click", (event: Event) => {

        const target = event.target as HTMLButtonElement;

        switch (target.id) {
          case "zero":
          case "one":
          case "two":
          case "three":
          case "four":
          case "five":
          case "six":
          case "seven":
          case "eight":
          case "nine":
            this.addNumber(Number(target.dataset.value));
            break;

          case "addition":
          case "subtraction":
          case "division":
          case "multiplication":
            this.addOperator(target.dataset.value as string)
            break;

          case "point":

            break;

          case "clean":

            break;

          case "undo":

            break;

          case "percentage":

            break;

          case "equal":
            this.calculate();
            break;
        }

      });

    });

  }

  calculate(): void {


    this.operation.calculate();

  }

  addOperation(value: string): void {

    this.operation.add(value);

    console.log(this.operation.length);

  }

  addNumber(number: number): void {

    if (isNaN(Number(this.operation.lastPosition))) {

      this.addOperation(number.toString());

    } else {

      number = Number(this.operation.lastPosition.toString() + number.toString()); 

      this.operation.lastPosition = number.toString();

    }

    this.screen.content = number.toString();

  }

  addOperator(operator: string): void {

    if (isNaN(Number(this.operation.lastPosition))) {
    
      this.operation.lastPosition = operator
    
    } else {

      if (this.operation.length === 0) {
        this.addOperation("0");
      }

      this.addOperation(operator);

    }

  }

}
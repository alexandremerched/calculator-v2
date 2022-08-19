import DateHour from "./DateHour.js";
import Operation from "./Operation.js";
import Screen from "./Screen.js";
export default class ControlCalculator {
    screen;
    operation;
    constructor(screen = new Screen(), operation = new Operation({
        onCalculated: (result) => this.screen.content = result
    })) {
        this.screen = screen;
        this.operation = operation;
        new DateHour();
        this.buttonsEvents();
    }
    buttonsEvents() {
        document.querySelectorAll("#keyboard button").forEach(element => {
            element.addEventListener("click", (event) => {
                const target = event.target;
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
                        this.addOperator(target.dataset.value);
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
    calculate() {
        this.operation.calculate();
    }
    addOperation(value) {
        this.operation.add(value);
        console.log(this.operation.length);
    }
    addNumber(number) {
        if (isNaN(Number(this.operation.lastPosition))) {
            this.addOperation(number.toString());
        }
        else {
            number = Number(this.operation.lastPosition.toString() + number.toString());
            this.operation.lastPosition = number.toString();
        }
        this.screen.content = number.toString();
    }
    addOperator(operator) {
        if (isNaN(Number(this.operation.lastPosition))) {
            this.operation.lastPosition = operator;
        }
        else {
            if (this.operation.length === 0) {
                this.addOperation("0");
            }
            this.addOperation(operator);
        }
    }
}
//# sourceMappingURL=ControlCalculator.js.map
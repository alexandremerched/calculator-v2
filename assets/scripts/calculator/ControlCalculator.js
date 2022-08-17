import DateHour from "./DateHour.js";
import Screen from "./Screen.js";
export default class ControlCalculator {
    screen;
    constructor(screen = new Screen()) {
        this.screen = screen;
        new DateHour();
    }
}
//# sourceMappingURL=ControlCalculator.js.map
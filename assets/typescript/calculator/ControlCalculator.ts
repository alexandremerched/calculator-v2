import DateHour from "./DateHour.js";
import Screen from "./Screen.js";

export default class ControlCalculator {

  constructor(
    private screen = new Screen()
  ) {

    new DateHour();

  }

}
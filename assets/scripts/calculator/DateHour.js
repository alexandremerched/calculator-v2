export default class DateHour {
    dateElement;
    hourElement;
    constructor(dateElement = document.querySelector("#datetime > div:nth-child(2)"), hourElement = document.querySelector("#datetime time")) {
        this.dateElement = dateElement;
        this.hourElement = hourElement;
        this.render();
        setInterval(() => this.render(), 1000);
    }
    render() {
        const actualDate = new Date();
        const day = actualDate.getDate();
        const month = actualDate.toLocaleDateString("pt-BR", {
            month: "long"
        });
        const year = actualDate.getFullYear();
        const hour = actualDate.getHours();
        const minute = actualDate.getMinutes().toString().padStart(2, '0');
        const twoPoints = actualDate.getSeconds() % 2 === 0 ? ":" : " ";
        this.date = `${day} ${month} ${year}`;
        this.hour = `${hour}${twoPoints}${minute}`;
    }
    set date(content) {
        if (this.dateElement) {
            this.dateElement.innerHTML = content;
        }
    }
    set hour(content) {
        if (this.hourElement) {
            this.hourElement.innerHTML = content;
        }
    }
}
//# sourceMappingURL=DateHour.js.map
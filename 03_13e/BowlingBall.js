class BowlingBall {
    constructor(name, manufacturer) {
        this.name = name;
        this.manufacturer = manufacturer;
    }

    printBall() {
        console.log("Ball: " + this.name + ", made by " + this.manufacturer);
    }
}

export default BowlingBall;

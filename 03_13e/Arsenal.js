
class Arsenal {
    constructor(bowlingBall) {
        this.bowlingBall = bowlingBall;
    };

    printArsenal() {
        console.log("I have a " + this.bowlingBall.printBall());
        console.log("Here is my arsenal");
    }
}

export default Arsenal;
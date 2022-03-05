class Arsenal {
  constructor(bowlingBalls) {
    this.bowlingBalls = bowlingBalls;
  }

  addToArsenal(bowlingBall) {
    this.bowlingBalls.push(bowlingBall);
  }

  printArsenal() {
    console.log("I have a " + this.bowlingBall.printBall());
    console.log("Here is my arsenal");
  }
}

export default Arsenal;

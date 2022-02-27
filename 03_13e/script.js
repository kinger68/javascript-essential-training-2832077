/**
 * Use the global Date() object to transform dates.
 * @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date
 */

import Arsenal from "./Arsenal.js";
import Backpack from "./Backpack.js";
import BowlingBall from "./BowlingBall.js";

const everydayPack = new Backpack(
  "Everyday Backpack",
  30,
  "grey",
  15,
  26,
  26,
  false,
  "December 5, 2018 15:00:00 PST"
);

const hyRoad = new BowlingBall("HyRoad", "Storm");
const myArsenal = new Arsenal(hyRoad);

console.log("The everydayPack object:", everydayPack);
console.log("The pocketNum value:", everydayPack.pocketNum);
console.log("Days since aquired:", everydayPack.backpackAge());

hyRoad.printBall();
myArsenal.printArsenal();

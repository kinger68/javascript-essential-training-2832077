/**
 * Challenge: Build and modify an array
 * - Build an array with 8 items
 * - Remove the last item
 * - Add the last item as the first item on the array
 * - Sort the items by alphabetical order
 * - Use the find() method to find a specific item in the array
 * - Remove the item you found using the find method from the array.
 */

import Arsenal from "./Arsenal.js";
import BowlingBall from "./BowlingBall.js";

const hyRoad = new BowlingBall("HyRoad", "Storm");
const reality = new BowlingBall("Reality", "Global 900");
const myArsenal = new Arsenal([]);

myArsenal.addToArsenal(hyRoad);
myArsenal.addToArsenal(reality);

console.log(myArsenal);

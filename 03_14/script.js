/**
 * Challenge: Create a new object type
 * 
 * - Create a new object type "Book" using a class or an object constructor function.
 * - Add at least 5 book objects.
 */

import Backpack from "./Backpack.js";
import Book from "./Book.js";

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

const book1 = new Book("Vixen03", "Clive Cussler", "1978")
const book2 = new Book("Don Quixote", "Miguel de Cervantes", "1615")
const book3 = new Book("Madame Bovary", "Gustave Flaubert", "1856")

book1.printBook();
console.log("Years since published: " + book1.bookAge());
book2.printBook();
console.log("Years since published: " + book2.bookAge());
book3.printBook();
console.log("Years since published: " + book3.bookAge());

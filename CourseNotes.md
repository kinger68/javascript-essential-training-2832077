Template Literals (Chap 4) - This is how you can bridge the gap between JavaScript and HTML. For example :

<code>
const content = `
  <main>
    <article>
      <h1>${everydayPack.name}</h1>
      <ul>
        <li>Volume: ${everydayPack.volume}</li>
        <li>Color: ${everydayPack.color}</li>
        <li>Age: ${everydayPack.backpackAge()}</li>
        <li>Number of pockets: ${everydayPack.pocketNum}</li>
        <li>Left strap length: ${everydayPack.strapLength.left}</li>
        <li>Right strap length: ${everydayPack.strapLength.right}</li>
        <li>Lid status: ${everydayPack.lidOpen}</li>
      </ul>
    </article>
  </main>
`;

document.body.innerHTML = content;
</code>

## Using querySelector and querySelectorAll to get objects from the DOM (Document Object Model)

document.querySelect("main"); // Gets the main object from the document

// Get the list in the main document object and traverse over each element
document.querySelectorAll("main li").forEach(item => { item.style.color="white"; item.style.backgroundColor = "blue" });

Working with Attributes - Attributes are returned in a Node

- Element.hasAttribute(string)
- Element.getAttribute(string)
- Element.setAttribute(string, value)
- Element.removeAttribute(string)

Adding new DOM elements :

Variables

- Rule of thumb is to use "let" (Especially if variable is mutable and changed)
- Quite rare that you want to use var
- var - global scope
- let - local scope
- const - unmutable
- "==" -> Javascript tries to determine if the variables are symbiotically equal. Thus 5 == "5" as javascript thinks you want
  to have an integer number when double quoting
- "===" -> Absolutle equality, determines if values are same type AND are same value
- "!=" and "!==" exist as well.
- "\*\*" is exponentiation
- "++" and "--" work the same way with pre-pending doing the increment/decrement first before whatever the use is.
  -- post-pending will do the increment/decrement after the variable is used.

Functions

- The preferred way to define a function is as a function expression

---

const doMoreMath = function (a = 3, b = 2) {
let c = a \* b;
return c;
};

console.log("Do more math:", doMoreMath(5, 6));

---

// Immediately Invoked Function Expression (IIFE)
// These functions are executed as soon as they are hit. They can be useful for making sure something gets run before
// something else gets run.
(function () {
let a = 7;
let b = 6;
let c = doSomeMath(a, b);
console.log(`The sum of a and b is: ${c}`);
})();

Example 8.03 is very interesting in using a function to create the HTML to be rendered to the browser page.

Arrow functions do not have a "this" which means it will use any variable in the closest scope to what it is declared in

- Example 8.05

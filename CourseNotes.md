

Template Literals (Chap 4) - This is how you can bridge the gap between JavaScript and HTML.  For example :

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


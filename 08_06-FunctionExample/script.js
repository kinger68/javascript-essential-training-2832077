/**
 * A standard function
 * @link https://developer.mozilla.org/en-US/docs/Glossary/Function
 */

const bowlingBall = {
  manufacturer: "Storm",
  name: "Hy-Road",
  image: "../assets/images/HyRoad.png",
  color: "Black/Ultramarine Blue",
  fragrance: "Combination Berry",
  releaseDate: "November 2008",
  sku: "BBMTTY12",
  toggleColor: function (newColor) {
    this.color = newColor;
  },
};

// function updateBallColor(bowlingBall, newColor) {
//   let main = document.querySelector(bowlingBall);
//   main.innerHTML = markup(backpack);
// }

const addBowlingBall = function (bowlingBall) {
  const newArticle = document.createElement("article");
  newArticle.classList.add(bowlingBall.name);
  newArticle.innerHTML = `
    <h1>${bowlingBall.manufacturer} ${bowlingBall.name}</h1>
    <img src=${bowlingBall.image} alt=${bowlingBall.name} width="500" height="600">
    <ul>
      <li>Fragrance: ${bowlingBall.fragrance}</li>
      <li>Color: ${bowlingBall.color}</li>
      <li>Release Date: ${bowlingBall.releaseDate}</li>
      <li>SKU number: ${bowlingBall.sku}</li>
    </ul>
  `;
  return newArticle;
};

const theArticle = addBowlingBall(bowlingBall);
console.log(theArticle);
("");

const main = document.querySelector("main");
main.append(addBowlingBall(bowlingBall));

bowlingBall.toggleColor("Red/Black");
main.replaceWith(addBowlingBall(bowlingBall));

/**
 * Practice: Building objects
 *
 * - Create JavaScript objects based on objects in your current environment.
 * - Give each object an identifiable name.
 * - Create properties to describe the objects and set their values.
 * - Find an object that has another object inside of it to create a nested object.
 * - Test your objects in the browser console by accessing the entire object and its specific properties.
 */

const light = {
  numLights: 1,
  type: "lamp",
  color: "black",
};

const seating = {
  type: "Couch",
  color: "blue",
};

const livingRoom = {
  lighting: light,
  thingsToSitOn: seating,
};

console.log("My lamp looks like :", light);
console.log("What is in my living room : ", livingRoom);

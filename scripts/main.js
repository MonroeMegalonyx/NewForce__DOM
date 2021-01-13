// LIGHTNING EXERCISE
// Hello, world
///In your index.html file, add an h1 element with an id of #hello-container.
// In your JavaScript file, declare a new variable called greeting and give it a value of "Hello, world"

let greeting = "Hello, world";

// Use document.querySelector to target your #hello-container

let targetHelloContainer = document.querySelector("#hello-container");

// Use the .innerHTML property to insert the value of your greeting variable into your #hello-container element.

targetHelloContainer.innerHTML = greeting;

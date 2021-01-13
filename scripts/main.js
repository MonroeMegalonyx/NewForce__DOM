///  / LIGHTNING EXERCISE
//  // Hello, world
//  // In your index.html file, add an h1 element with an id of #hello-container.
//  // In your JavaScript file, declare a new variable called greeting and give it a value of "Hello, world"
//
//  ////let greeting = "Hello, world";
//
//  // Use document.querySelector to target your #hello-container
//
//  ////let targetHelloContainer = document.querySelector("#hello-container");
//
//  // Use the .innerHTML property to insert the value of your greeting variable into your #hello-container element.
//
//  ////targetHelloContainer.innerHTML = greeting;
//
//  // The contents of this object will change depending on what today's special is
//  let currentSpecial = {
//      name: "Fried Green Tomato BLT",
//      description: "So good you'll cry",
//      price: 9.99,
//  };
//
//  // We'll use the object to build up an HTML string
//  let htmlString = `
//      <h3 class="dish-name">${currentSpecial.name}</h3>
//      <p class="dish-description">
//        ${currentSpecial.description}
//      </p>
//      <h5 class= "dish-price">${currentSpecial.price}</h5>
//    `;
//
//  // Then we'll put the html string in the #daily-special div
//  document.querySelector("#daily-special").innerHTML = htmlString;
//
//  let menuItemsArray = [
//      "Chicken tenders",
//      "pizza",
//      "spaghetti",
//      "french fries",
//      "pie",
//  ];
//
//  for (let i = 0; i < menuItemsArray.length; i++) {
//      // target the menu items container and add a bullet for each item in the array
//      document.querySelector(
//          "#menu-items-container"
//      ).innerHTML += `<li>${menuItemsArray[i]}</li>`;
//  }
//
//  // LIGHTNING EXERCISE
//
//  // Keeping track of chores
//  // In your index.html file, create an empty <ul> element and give it an id of #chores-container
//  // In your JavaScript file, declare a new variable called choresArray. This should be an array of chores you do regularly.
//
//  let choresArray = [
//      "Clean litterbox",
//      "Take out trash",
//      "Do laundry",
//      "Empty the dishwasher",
//  ];
//
//  // Loop through your choresArray. For each chore, create a new <li> element and insert it into the #chores-container element.
//  // You should end up with a bulleted list of all your regular chores.
//
//  for (let i = 0; i < choresArray.length; i++) {
//      document.querySelector(
//          "#chores-container"
//      ).innerHTML += `<li>${choresArray[i]}</li>`;
//  }
//

// PRACTICE EXERCISES
// 1. Movie Poster
let movieObject = {
    title: "Star Wars: A New Hope",
    genre: "Science Fiction",
    releaseDate: "May 25, 1977",
};

// Use document.querySelector() to grab a reference to each element in your HTML.
// Use the .innerHTML property to set the text of each element to the matching value in your object. (For example, the h1 with the id of "title" should contain the title property of your movieObject, etc).

document.querySelector("#title").innerHTML = `${movieObject.title}`;
document.querySelector("#genre").innerHTML = `${movieObject.genre}`;
document.querySelector("#release-date").innerHTML = `${movieObject.releaseDate}`;

// 2. Downtown Restuarants


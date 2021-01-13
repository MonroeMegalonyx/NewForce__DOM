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

let downtownRestaurants = ["Backyard Pizza and Raw Bar", "The Bodega", "Surin of Thailand", "Bahnhof", "Jim's Steak and Spaghetti House", "The Peddler", "Jewel City Seafood Market", "Black Sheep Burritos & Brews", "La Famiglia", "Le Bistro", "Charlie Graingers", "The Cellar Door"];

// Loop over the downtownRestaurants array.
// Use the loop to create an <li> element for each item in the array.
// Use document.querySelector and .innerHTML to add each new <li> element to the #restaurants-list container.
// You should see a bulleted list of restaurants in the DOM.

for (let i = 0; i < downtownRestaurants.length; i++) {
    document.querySelector(
        "#restaurants-list"
    ).innerHTML += `<li>${downtownRestaurants[i]}</li>`;
}

// 3. Sandwich Toppings

let sandwichToppings = ["pickles", "extra cheese", "lettuce", "tomatoes", "avocado", "bacon", "mayo", "mustard"]

// Write a function that does the following things:
// Loop through sandwichToppings
// Build an <li> element for each item in the array.
// Use document.querySelector and .innerHTML to print your HTML string to the "#sandwich-container".

function sandwichTopper(){
    for (let i = 0; i < sandwichToppings.length; i++) {
        document.querySelector(
            "#sandwich-container"
        ).innerHTML += `<li>${sandwichToppings[i]}</li>`;
    }
}

// Call the function. You should see a bulleted list of all the sandwich toppings in the DOM.

sandwichTopper()

// 4. Movie Schedule
// You've been hired to build an app for a movie theater. You need to list all of the movies that are currently playing.

let movieSchedule = [
    {
      title: "Ralph Breaks the Internet",
      rating: "PG",
      currentlyPlaying: true,
      poster: "https://lumiere-a.akamaihd.net/v1/images/r_ralphbreakstheinternet_header_ddt-17403_08ef6d92.jpeg?region=0,0,1024,1274&optimize=true"
    },
    {
      title: "The Grinch",
      rating: "G",
      currentlyPlaying: true,
      poster: "https://images-na.ssl-images-amazon.com/images/I/71vgX4VFdiL._SY679_.jpg"
    },
    {
      title: "A Star is Born",
      rating: "R",
      currentlyPlaying: false,
      poster: "https://images-na.ssl-images-amazon.com/images/I/718zWbDKmvL._SY606_.jpg"
    },
     {
      title: "Bohemian Rhapsody",
      rating: "PG-13",
      currentlyPlaying: true
    },
    {
      title: "Fantastic Beasts: The Crimes of Grindlewald",
      rating: "PG-13",
      currentlyPlaying: true,
      poster: "https://images-na.ssl-images-amazon.com/images/I/716fk%2BBZ-NL._SY606_.jpg"
    },
    {
      title: "Robin Hood",
      rating: "PG-13",
      currentlyPlaying: false,
      poster: "https://images-na.ssl-images-amazon.com/images/I/61K%2BTyGjsCL.jpg"
    },
    {
      title: "Spider-Man: Into the Spider-Verse",
      rating: "PG-13",
      currentlyPlaying: true,
    }
  ]

// Use a for loop to loop through the movies, build an HTML representation of each movie, and insert it into the #movie-schedule container in the DOM.
// You can use any elements you like in your HTML string as long as all the data in the movieSchedule object is included.

// I will need to get the output similar to exercise 1, but by using loops:
// document.querySelector("#title").innerHTML = `${movieObject.title}`;
// document.querySelector("#genre").innerHTML = `${movieObject.genre}`;
// document.querySelector("#release-date").innerHTML = `${movieObject.releaseDate}

for (let i = 0; i < movieSchedule.length; i++) {
    // If its currently playing and has a poster, add it to index
    if (movieSchedule[i].hasOwnProperty("poster") && movieSchedule[i].currentlyPlaying) {
        document.querySelector("#movie-schedule").innerHTML += 
        `<section class="moviemovie"><h1>${movieSchedule[i].title}</h1><p>RATING: ${movieSchedule[i].rating}</p><b>GET YOUR TICKETS NOW</b><img src=${movieSchedule[i].poster} class="${movieSchedule[i].rating}">`        
    } else
        // If its currently playing but has no poster, add a placeholder and put it on the index
        if (movieSchedule[i].currentlyPlaying) {
            document.querySelector("#movie-schedule").innerHTML += 
            `<section class="moviemovie"><h1>${movieSchedule[i].title}</h1><p>RATING: ${movieSchedule[i].rating}</p><b>GET YOUR TICKETS NOW</b><img src="https://www.snhrc.com/wp-content/uploads/2018/09/Image-Coming-Soon.png">`;
        }; // If its not currently playing then dont add it to the index
    };

// Exercise 5. Movie Scheduling cont. I made the edits above for this part.

// Revisit your movie schedule exercise from above.
// Add a conditional so that you only print movies where the currentlyPlaying property is equal to true.
// Use flexbox to arrange your movie schedule side by side on your web page.
// If a movie does not have a poster property, give it a placeholder image like this
// Give all G-rated movies a dotted green border that's 2px wide.
// Give all PG-rated movies a dotted yellow border that's 2px wide.
// Give all PG-13 movies a dotted orange border that's 2px wide.
// Give all R-rated movies a dotted red border that's 2px wide.
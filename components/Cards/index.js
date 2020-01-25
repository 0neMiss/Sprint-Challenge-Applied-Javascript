// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:

// Create a card for each of the articles and add the card to the DOM.



let card_container = document.querySelector('.cards-container');
//creating container array fcor newcards
let newcard_list = [];
let cardCreate = (array) => {
  //creating elements
  //for loop creating a card element for each item inside the array
  for (i = 0; i < array.length; i++) {
    let card = document.createElement('div');
    let headline = document.createElement('div');
    let author = document.createElement('div');
    let img_container = document.createElement('div');
    let img = document.createElement('img');
    let author_name = document.createElement('span');

    //adding classes
    card.classList.add('card');
    headline.classList.add('headline');
    author.classList.add('author');
    img_container.classList.add('img-container');

    //appending children
    card.appendChild(headline);
    card.appendChild(author);
    author.appendChild(img_container);
    author.appendChild(author_name);
    img_container.appendChild(img);

    //assigning content from the array being passed
    headline.innerHTML = array[i].headline;
    img.src = array[i].authorPhoto;
    author_name.textContent = array[i].authorName;
    //pushing completed card component to newcard_list
    newcard_list.push(card);
  }





  //returning newcard_list
  return newcard_list;
};
//creating promise
axios.get('https://lambda-times-backend.herokuapp.com/articles')
  //applying .then to response if successfull
  .then((response) => {
    //iterating through the length of nested articles object
    for (i = 0; i < Object.keys(response.data.articles).length; i++) {
      //selecting .cards-container
      let card_container = document.querySelector('.cards-container');
      //creating variable for the array of objects
      let array = Object.values(response.data.articles);
      //passing current instantce of array to cardCreate
      let newcard = cardCreate(array[i]);

    }
    //looping through completed cards and appending to card_container
    for (i = 0; i < newcard_list.length; i++) {
      card_container.appendChild(newcard_list[i]);
    }
  });


//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
//returned object
// {
//   "articles": {
//     "javascript": [{
//       "headline": "ES8: The Next Step in the Evolution of Javascript and What it Means For Your Projects",
//       "authorPhoto": "./assets/sir.jpg",
//       "authorName": "SIR RUFF'N'STUFF"
//     }, {
//       "headline": "Type Coercion: Why Does NaN !== NaN? and Other Strange Occurrences",
//       "authorPhoto": "./assets/bones.jpg",
//       "authorName": "BONES R. LIFE"
//     }, {
//       "headline": "When to Rest, When to Spread: Why There Are Two Meanings Behind '...'",
//       "authorPhoto": "./assets/puppers.jpg",
//       "authorName": "PUPPER S. DOGGO"
//     }, {
//       "headline": "Typescript: Ten Things you Should Know Before Building Your Next Angular Application",
//       "authorPhoto": "./assets/sir.jpg",
//       "authorName": "SIR RUFF'N'STUFF"
//     }],
//     "bootstrap": [{
//       "headline": "Bootstrap 5: Get a Sneak Peak at all the New Features",
//       "authorPhoto": "./assets/fido.jpg",
//       "authorName": "FIDO WALKSALOT"
//     }, {
//       "headline": "UI Frameworks: A Comparison, Which Made Our List? (Hint: Bootstrap is on it)",
//       "authorPhoto": "./assets/max.jpg",
//       "authorName": "MAX GOODBOYE"
//     }, {
//       "headline": "The Hottest New Bootstrap 4 Components Every Developer Needs to Know About",
//       "authorPhoto": "./assets/max.jpg",
//       "authorName": "MAX GOODBOYE"
//     }],
//     "technology": [{
//       "headline": "AI: What Are the Ethical Ramifications of the Future?",
//       "authorPhoto": "./assets/max.jpg",
//       "authorName": "MAX GOODBOYE"
//     }, {
//       "headline": "AR or VR: How We Will See the World Through a Digital Lense",
//       "authorPhoto": "./assets/max.jpg",
//       "authorName": "MAX GOODBOYE"
//     }, {
//       "headline": "Quantum Computing: Where we Are Now, and Where We Will Be Very Soon",
//       "authorPhoto": "./assets/max.jpg",
//       "authorName": "MAX GOODBOYE"
//     }],
//     "jquery": [{
//       "headline": "History of Javascript Libraries: from jQuery to React",
//       "authorPhoto": "./assets/puppers.jpg",
//       "authorName": "PUPPER S. DOGGO"
//     }, {
//       "headline": "jQuery Animations: When and Where to Use Them, and Not CSS",
//       "authorPhoto": "./assets/fido.jpg",
//       "authorName": "FIDO WALKSALOT"
//     }, {
//       "headline": "Why I Use jQuery in Every Application I Create and Why You Should Too",
//       "authorPhoto": "./assets/fido.jpg",
//       "authorName": "FIDO WALKSALOT"
//     }],
//     "node": [{
//       "headline": "Node.js in 2018: Which Framework? Express, Sails, Hapi?",
//       "authorPhoto": "./assets/sir.jpg",
//       "authorName": "SIR RUFF'N'STUF"
//     }, {
//       "headline": "MongoDB: NoSQL vs. SQL, the Debate Continues..",
//       "authorPhoto": "./assets/bones.jpg",
//       "authorName": "BONES R. LIFE"
//     }]
//   }
// }

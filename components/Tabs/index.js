// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

  //calling the promise from axios
  axios.get('https://lambda-times-backend.herokuapp.com/topics')
  //creating .then statement to apply the following function to the response object.
  .then((response) => {
    for (i = 0; i < response.data.topics.length; i++) {
      //selecting .topics
      let topics = document.querySelector('.topics')
      console.log(response);
      let topic_element = tabsCreate(response.data.topics[i]);

      topics.appendChild(topic_element);
    }
  });

let tabsCreate = (topics) => {
  //creatting div element
  let tab = document.createElement('div');
  //adding classes
  tab.classList.add('tab');
  tab.innerHTML = topics;
  console.log(tab);
  return tab;

};

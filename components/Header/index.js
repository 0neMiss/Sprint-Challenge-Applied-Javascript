// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component

const headerCreate = () => {

  //creating elements
  let header = document.createElement('div');
  let date = document.createElement('span');
  let title = document.createElement('h1');
  let temp = document.createElement('span');


  //adding classes
  header.classList.add('header');
  date.classList.add('date');
  temp.classList.add('temp');

  //applying innerHTML
  date.innerHTML = 'SMARCH 28, 2019';
  title.innerHTML = 'Lambda Times';
  temp.innerHTML = '98°';

  //appending children
  header.appendChild(date);
  header.appendChild(title);
  header.appendChild(temp);

  return header;

};
let header_container = document.querySelector('.header-container');
let header_element = headerCreate()
header_container.appendChild(header_element);

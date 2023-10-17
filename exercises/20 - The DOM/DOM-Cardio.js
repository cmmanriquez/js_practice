// Make a div
const makeDiv = document.createElement('div');
makeDiv.classList.add('wrapper');

// Add a class of wrapper to it
makeDiv.classList.add('wrapper');

// Put it into the body
document.body.appendChild(makeDiv);

// Make an unordered list
const ulList = document.createElement('ul');

// Add three list items with the words "one, two, three" in them
const liOne = document.createElement('li');
liOne.textContent = ('One');

const liTwo = liOne.cloneNode(true);
liTwo.textContent = ('Two');

const liThree = liOne.cloneNode(true);
liThree.textContent = ('Three');
ulList.appendChild(liOne);
ulList.appendChild(liTwo);
ulList.appendChild(liThree);

// Put that list into the above wrapper
makeDiv.appendChild(ulList);

// Create an image
const myImage = document.createElement('img');

// Set the source to an image
myImage.src = 'https://placekitten.com/600/300';

// Set the width to 250
myImage.width = 250;

// Add a class of cute
myImage.classList.add('cute');

// Add an alt of Cute Puppy
myImage.alt = 'Cute cat';

// Append that image to the wrapper
makeDiv.appendChild(myImage);

// With HTML string, make a div, with two paragraphs inside of it
const myHTML = `
  <div class="myDiv">
    <p>Some text</p>
    <p>More text after the "some text"</p>
  </div>
`;

const ulElement = makeDiv.querySelector('ul');

// Put this div before the unordered list from above
ulElement.insertAdjacentHTML('beforeBegin', myHTML);

// Add a class to the second paragraph called warning
const secondDiv = makeDiv.querySelector('.myDiv');
secondDiv.children[1].classList.add('warning');

// Remove the first paragraph
secondDiv.children[0].remove();

// Create a function called generatePlayerCard that takes in three arguments: name, age, and height
// have that function return html that looks like this:
// <div class="playerCard">
//   <h2>NAME — AGE</h2>
//   <p>They are HEIGHT and AGE years old. In Dog years this person would be AGEINDOGYEARS. That would be a tall dog!</p>
// </div>
function generatePlayerCard(name, age, height) {
	const html = `
  <div class="playerCard">
    <h2>${name} - ${age}</h2>
    <p>Their height is: ${height}cm. and ${age} years old. In Dog years this person would be ${age * 7}. That would be a tall dog!</p>
    <button class="delete" type="button">&times; Delete</button>
  </div>
  `;
	return html;
}

// Make a new div with a class of cards
const newDiv = document.createElement('div');
newDiv.classList.add('cards');

// Make 4 player cards using generatePlayerCard
let cardsHTML = generatePlayerCard('Camila', 34, 156);
cardsHTML += generatePlayerCard('FRan', 34, 173);
cardsHTML += generatePlayerCard('Boris', 1, 10);
cardsHTML += generatePlayerCard('Ramona', 2, 17);
// Append those cards to the div
newDiv.innerHTML = cardsHTML;

// Put the div into the DOM just before the wrapper element
makeDiv.insertAdjacentElement('beforebegin', newDiv);

// Bonus, put a delete Button on each card so when you click it, the whole card is removed
// select all the buttons!
const btn = document.querySelectorAll('.delete');
console.log(btn);

// Make out delete function
function deleteCard(event) {
  const btnThatGotClicked = event.currentTarget;
  btnThatGotClicked.closest('.playerCard').remove();
}

// Loop over them and attach a listener
btn.forEach(button => button.addEventListener('click', deleteCard));

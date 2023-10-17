console.log('it works!');

const myParagraph = document.createElement('p');
myParagraph.classList.add('special');
myParagraph.textContent = 'I am a P';
console.log(myParagraph);

const myImage = document.createElement('img');
myImage.src = 'https://source.unsplash.com/random/300x300';
myImage.alt = 'Nice pic';
console.log(myImage);

const myDiv = document.createElement('div');
myDiv.classList.add('wrapper');
console.log(myDiv);

myDiv.appendChild(myParagraph);
myDiv.appendChild(myImage);
document.body.appendChild(myDiv);

const heading = document.createElement('h2');
heading.classList.add('heading');
heading.textContent = 'I\'m a heading';
console.log(heading);

myDiv.insertAdjacentElement('afterbegin', heading);

const myList = document.createElement('ul');
console.log(myList);
const oneLi = document.createElement('li');
const twoLi = document.createElement('li');
const threeLi = document.createElement('li');
const fourLi = document.createElement('li');
const fiveLi = document.createElement('li');
oneLi.textContent = 'I\'m one list item';
twoLi.textContent = 'I\'m another list item';
threeLi.textContent = 'I\'m another another list item';
fourLi.textContent = 'I\'m another another another list item';
fiveLi.textContent = 'I\'m another another another another list item';
myList.appendChild(oneLi);
myList.appendChild(twoLi);
myList.insertAdjacentElement('afterbegin', threeLi);
myList.appendChild(fourLi);
myList.appendChild(fiveLi);
document.body.appendChild(myList);

const list = document.createElement('ul');
const li1 = document.createElement('li');
li1.textContent = ('One');
const li2 = li1.cloneNode(true);
li2.textContent = 'Two';
const li3 = li1.cloneNode(true);
li3.textContent = 'Two';
const li4 = li1.cloneNode(true);
li4.textContent = 'Three';
const li5 = li1.cloneNode(true);
li5.textContent = 'Five';
list.appendChild(li1);
list.appendChild(li2);
list.appendChild(li3);
list.appendChild(li4);
list.appendChild(li5);
document.body.insertAdjacentElement('afterbegin', list);


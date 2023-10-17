const p = document.querySelector('p');
const divs = document.querySelectorAll('div');
console.log(p);
console.log(divs);

// Puedo buscar un elemento que está dentro

const itemsTwo = document.querySelector('.itemsTwo');
const itemsPhoto = itemsTwo.querySelector('img');
console.log(itemsPhoto);
const h2 = document.querySelector('h2');
console.dir(h2.textContent);
h2.textContent = 'Camila Rulz';
console.dir(h2.textContent);
const nuevoTxt = 'esto es un texto';
const h3 = document.querySelector('h3');
h3.textContent = `${nuevoTxt} que cambió`;

const pic = document.querySelector('.nice');
pic.classList.add('newClass');
pic.classList.remove('cool');
console.log(pic.classList);

function toggleRound() {
	pic.classList.toggle('round');
}

pic.addEventListener('click', toggleRound);
pic.alt = 'Cute something';
pic.width = 300;
pic.title = 'este es un título';

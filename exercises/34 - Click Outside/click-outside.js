// Capture the btns
const cardButtons = document.querySelectorAll('.card button');
console.log(cardButtons);
const modalOuter = document.querySelector('.modal-outer');
const modalInner = document.querySelector('.modal-inner');

// The machine
function handleCardButtonClick(event) {
	const button = event.currentTarget;
	const card = button.closest('.card');
	// Grab the image src
	const imgSrc = card.querySelector('img').src;
	const desc = card.dataset.description;
	const name = card.querySelector('h2').textContent;
	// Populate the modal with the new info
	modalInner.innerHTML = `
  <img src="${imgSrc.replace('200', '500')}" alt="${name}"/>
  <p>${desc}</p>
  `;
	// Show the modal
	modalOuter.classList.add('open');
}

// Loop all the buttons and listen for a click
cardButtons.forEach(button => button.addEventListener('click', handleCardButtonClick));

// Close the modal
function closeModal(){
  modalOuter.classList.remove('open');
}

modalOuter.addEventListener('click', function(event){
  const isOutside = !event.target.closest('.modal-inner');
  if (isOutside){
    closeModal();
  }
});

window.addEventListener('keydown', (event) =>{
  if (event.key === 'Escape'){
    closeModal();
  }
})

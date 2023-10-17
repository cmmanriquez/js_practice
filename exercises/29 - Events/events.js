const btn = document.querySelector('.butts');
const coolButton = document.querySelector('.cool');
function handleClick() {
	console.log('it was clicked!');
}

// 3 steps
// Get something
// Listen for something
// And then do something
btn.addEventListener('click', handleClick);
coolButton.addEventListener('click', handleClick);

btn.removeEventListener('click', handleClick);

// Listen on multiple items
// Query selector selecciona el primero
// Query selector all selecciona todos
const buyButtons = document.querySelectorAll('button.buy');

// No podemos usar add event listener para elementos múltiples
// Vamos a usar forEach

// Tengo sólo una función, cómo puedo saber cuál botón fue clickeado?
// Parametro.target!!!
// Puedo captar el precio mediante el atributo en html data-price y lo puedo capturar luego de target.dataset
// Puedo agregarle además el atributo en sí: event.target.dataset.price
// Lo puedo parsear para tener el número y no un String, uso parseFloat para tener un número con decimales, a diferencia de parseInt
function handleBuyButtonClick(event) {
  const button = event.target;
  console.log(button.textContent);
  console.log('You are buying it!');
  console.log(parseFloat(button.dataset.price));
// Puedo darle stop a la propagación, es decir, puedo elegir que sólo se dispare el evento elegido: el button
  event.stopPropagation();
}
// Puedo usar también event.currentTatget, la diferencia dependerá de la sintaxis de html, si hay un elemento anidado dentro del elemento escuchado. ej: un button con un strong dentro.
// Event.target será LO QUE FUE CLICKEADO, ej: strong tag
// Event.currentTarget será lo que disparó el evento: el button




buyButtons.forEach(function(buyButton) {
  buyButton.addEventListener('click', handleBuyButtonClick);
});

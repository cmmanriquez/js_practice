const camila = document.querySelector('.camila');

// Sólo muestra los elementos hijos
console.log(camila.children);
// Muestra los nodos (contenido y elementos)
console.log(camila.childNodes);

// Propiedades para elementos
console.log(camila.firstElementChild);
console.log(camila.lastElementChild);
console.log(camila.previousElementSibling);
console.log(camila.nextElementSibling);
console.log(camila.parentElement);

// Propiedades para nodos
console.log(camila.childNodes);
console.log(camila.firstChild);
console.log(camila.lastChild);
console.log(camila.previousSibling);
console.log(camila.nextSibling);
console.log(camila.parentNode);

// Remove
const remover = document.querySelector('.remove');
console.log(remover);
remover.remove();

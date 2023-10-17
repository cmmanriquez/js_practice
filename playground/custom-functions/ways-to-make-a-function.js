console.log("funciona");

// -----Funcion
// function doctorizar(nombre) {
// 	return `Dr. ${nombre}`;
// }

// -----Funcion anonima
// function (nombre) {
// 	return `Dr. ${nombre}`;
// }

// -----Expresion de la funcion
// const doctorizar = function (nombre) {
// 	return `Dr. ${nombre}`;
// };

// -----Arrow function
// function inchToCm(inches) {
// 	const cm = inches * 2.54;
// 	return cm;
// }

// function inchToCM(inches) {
// 	return inches * 2.54;
// }

// -----Anon arrow
// const inchToCM = inches => inches * 2.54;

// function agregar(a, b = 3) {
// 	const total = a + b;
// 	return total;
// }

// const agregar = (a, b = 3) => a + b;

// Retornar un objeto

// function makeABaby(first, last) {
// 	const baby = {
// 		name: `${first} ${last}`,
// 		age: 0,
// 	};
// 	return baby;
// }

// const makeABaby = (first, last) =>
// 	({name: `${first} ${last}`, age: 0});

// IIFE
// Immediately Invoked Function Expression

(function () {
	console.log('Running the Anon unction');
	return 'U are cool';
})();

// Metodos
const camila = {
	name: 'Camila Muñoz',
	sayHi: function() {
    console.log('Hola Camila');
    return 'Hola Camila';
  },
	// Short hand método
	yellHi() {
		console.log('CAMILAAA');
  },
}

// Function definition
function calculadoraBill(cuenta, impuesto = 1.13, propina = 0.1) {
	// eslint-disable-next-line no-mixed-operators
	const total = cuenta + cuenta * impuesto + cuenta * propina;
	return total;
}

// Function call or **run**
const miTotal = calculadoraBill(100, 0.13, undefined);
console.log(`Tu total es $${miTotal}`);

function diHola(nombre) {
	return `Hola ${nombre}`;
}

const saludar = diHola('Camila');
console.log(saludar);

function doctorize(apellido) {
	return `Dr. ${apellido}`;
}

function gritar(apellido) {
	return `HEY ${apellido.toUpperCase()}`;
}

const cuenta1 = calculadoraBill(100, undefined, 0.50);
console.log(`El total de la cuenta es $${cuenta1}`);

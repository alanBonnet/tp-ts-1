// interfaz que se usará tanto de entrada como salida de la fn de tablaMultiplicar()
export interface interfaceTablaMultiplicar {
	numeroBase: number;
	numerosFactores: Array<number>;
	numerosProducto: Array<number>;
}
// se encarga de hacer los calculos según el número multiplo y un rango según el usuario
export function tablaMultiplicar({
	numero,
	inicio,
	fin,
}: {
	numero: number;
	inicio: number;
	fin: number;
}): interfaceTablaMultiplicar {
	const tablaMultiplicar: interfaceTablaMultiplicar = {
		numeroBase: inicio,
		numerosFactores: [],
		numerosProducto: [],
	};
	for (let factor: number = inicio; factor <= fin; factor++) {
		//for carga a tablaMultiplicar cada producto y factor que va usando para
		// la creación de la tabla de multiplicar
		const producto: number = factor * numero;

		tablaMultiplicar.numerosFactores.push(factor); //adiciona un factor
		tablaMultiplicar.numerosProducto.push(producto);
	}
	return tablaMultiplicar;
}

// va creando la tabla de multiplicar y concatenando en formato string
export function mostrarTabla({
	numeroBase,
	numerosFactores,
	numerosProducto,
}: interfaceTablaMultiplicar): string {
	let textoSalida: string = "";
	for (let numeroMultiplo in numerosFactores) {
		textoSalida += `
        <p>${numeroBase} * ${numerosFactores[numeroMultiplo]} = ${numerosProducto[numeroMultiplo]}</p>`;
	}
	return textoSalida;
}

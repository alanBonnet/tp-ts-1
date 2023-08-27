export enum Operaciones {
	SUMA, //0
	RESTA, //1
	MULTIPLICACION, //2
	DIVISION, //3
}
export function segunOperacion({
	numero1,
	numero2,
	operacion,
}: {
	numero1: number;
	numero2: number;
	operacion: number;
}): string {
	if (operacion === Operaciones.SUMA) {
		return `${numero1} + ${numero2} = ${numero1 + numero2}`;
	}
	if (operacion === Operaciones.RESTA) {
		return `${numero1} - ${numero2} = ${numero1 - numero2}`;
	}
	if (operacion === Operaciones.MULTIPLICACION) {
		return `${numero1} * ${numero2} = ${numero1 * numero2}`;
	}
	if (operacion === Operaciones.DIVISION) {
		return `${numero1} / ${numero2} = ${numero1 / numero2}`;
	}
	return "";
}

export function mostrarMsj({
	element,
	mensaje,
}: {
	element: HTMLElement;
	mensaje: string;
}): void {
	element!.innerText = `${mensaje}`;
}

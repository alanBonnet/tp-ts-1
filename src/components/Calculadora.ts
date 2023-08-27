import {
	Operaciones,
	mostrarMsj,
	segunOperacion,
} from "./helpers/calculadora.helper";

export function Calculadora() {
	document.getElementById("Calculadora")!.innerHTML = `
    <h2>Calculadora</h2>
    <input type="number" value="" name="numero1"></input>
    <select id="Operaciones" name="Operaciones">
        <option value="${Operaciones.SUMA}">+</option>
        <option value="${Operaciones.RESTA}">-</option>
        <option value="${Operaciones.MULTIPLICACION}">*</option>
        <option value="${Operaciones.DIVISION}">/</option>
    </select>
    <input type="number" value="" name="numero2"></input>
    <button type="submit"> =</button>

    <p id="resultadoCalculadora"></p>
`;
	document
		.querySelector<HTMLFormElement>("#Calculadora")!
		.addEventListener("submit", (e) => {
			e.preventDefault();
			const elemento = e?.currentTarget as HTMLFormElement;
			const formData = new FormData(elemento);
			const numero1 = parseFloat(formData.get("numero1")!.toString());
			const numero2 = parseFloat(formData.get("numero2")!.toString());
			const operacion = parseFloat(
				formData.get("Operaciones")!.toString()
			);
			mostrarMsj({
				element: document.getElementById("resultadoCalculadora")!,
				mensaje: segunOperacion({ numero1, numero2, operacion }),
			});
		});
}

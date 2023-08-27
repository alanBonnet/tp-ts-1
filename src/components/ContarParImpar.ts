import { mostrarMsj } from "./helpers/calculadora.helper";
import { contarParImparDesdeUnRango } from "./helpers/contarParImpar.helper";

export function ContarParImpar() {
	document.getElementById("ContarParImpar")!.innerHTML = `
    <h2>Contador de Par e Impares según rango</h2>
    <label for="min">Min: </label>
    
    <input type="number" value="" name="min"></input>
    <label for="max">Max: </label>
    <input type="number" value="" name="max"></input>
    <button type="submit"> Contar</button>
    
    <p id="mostrarParImpar"></p>
`;

	document
		.querySelector<HTMLFormElement>("#ContarParImpar")!
		.addEventListener("submit", (e) => {
			e.preventDefault();
			const elemento = e?.currentTarget as HTMLFormElement;
			const formData = new FormData(elemento);
			const min = formData.get("min")!.toString();
			const max = formData.get("max")!.toString();
			const numeroParImpar = contarParImparDesdeUnRango({
				min: parseFloat(min),
				max: parseFloat(max),
			});
			mostrarMsj({
				element: document.getElementById("mostrarParImpar")!,
				mensaje: `Numero Par: ${numeroParImpar.par} Número Impar: ${numeroParImpar.impar}`,
			});
		});
}

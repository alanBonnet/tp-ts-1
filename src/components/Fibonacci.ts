import {
	calcularFibonacci,
	mostrarFibonacci,
} from "./helpers/fibonacci.helper";

export function Fibonacci() {
	const fibonacciElement = document.getElementById("Fibonacci");
	fibonacciElement!.innerHTML = `
        <h2>Fibonacci</h2>
        <label for="fibonacci">Cantidad N de números fibonacci</label>
        <input type="number" min="1" name="maxFibonacci"/>
        <button type="submit">Mostrar secuencia</button>

        <p id="mensajeFibonacci"></p>
    `;
	fibonacciElement?.addEventListener("submit", (e) => {
		e.preventDefault();
		const formData = new FormData(e.target! as HTMLFormElement);
		const maxFibonacci = parseInt(formData.get("maxFibonacci")!.toString());
		mostrarFibonacci(
			calcularFibonacci(maxFibonacci),
			document.getElementById("mensajeFibonacci")!
		);
	});
}

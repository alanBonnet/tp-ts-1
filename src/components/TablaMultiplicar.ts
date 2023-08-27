import {
	interfaceTablaMultiplicar,
	mostrarTabla,
	tablaMultiplicar,
} from "./helpers/tablaMultiplicar.helper";

export const TablaMultiplicar = () => {
	const FormTablaMul = document.getElementById("TablaMultiplicar");
	FormTablaMul!.innerHTML = `
    <h2>Tabla de multiplicar de un número según rango</h2>
    <label for="inicio">Inicio: </label>
    <input type="number" value="" name="inicio"></input>

    <label for="fin">Fin: </label>
    <input type="number" value="" name="fin"></input>
    <br />
    <label for="numeroTablaMul">Número de la tabla de multiplicar </label>
    <input type="number" value="" name="numeroTablaMul"></input>

    <button type="submit"> Contar</button>

    <div id="mostrarTablaMultiplicar"></div>
`;
	FormTablaMul?.addEventListener("submit", (e): void => {
		e?.preventDefault();
		const formData: FormData = new FormData(e.target! as HTMLFormElement);
		const inicio: number = parseFloat(formData.get("inicio")!.toString());
		const fin: number = parseFloat(formData.get("fin")!.toString());
		const numeroTablaMul: number = parseFloat(
			formData.get("numeroTablaMul")!.toString()
		);
		if (isNaN(inicio) || isNaN(fin) || isNaN(numeroTablaMul)) {
			alert("Alguno de los campos contiene una letra o está vacío");
			return;
		}
		const tabla: interfaceTablaMultiplicar = tablaMultiplicar({
			numero: numeroTablaMul,
			inicio,
			fin,
		});

		document.getElementById("mostrarTablaMultiplicar")!.innerHTML =
			mostrarTabla({
				numeroBase: numeroTablaMul,
				numerosFactores: tabla.numerosFactores,
				numerosProducto: tabla.numerosProducto,
			});
	});
};

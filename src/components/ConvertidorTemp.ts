enum MedicionTemperatura {
    CELSIUS,
    FAHRENHEIT,
}

export function ConvertidorTemp() {
    const convertidorTempForm = document.getElementById("ConvertidorTemp");
    convertidorTempForm!.innerHTML = `
    <h2>Convertidor de Temperatura</h2>
    <select id="temperaturaOrigen" name="temperaturaOrigen">
    <option value="${MedicionTemperatura.CELSIUS}">Celsius</option>
    <option value="${MedicionTemperatura.FAHRENHEIT}">Fahrenheit</option>
    </select>
    <input type="number" value="" name="tempAconvertir"></input>
    <select id="temperaturaFin" name="temperaturaFin">
        <option value="${MedicionTemperatura.CELSIUS}">Celsius</option>
        <option value="${MedicionTemperatura.FAHRENHEIT}">Fahrenheit</option>
    </select>
    <button type="submit">Convertir</button>
    <p id="temperaturaSalida"></p>
    `;

    convertidorTempForm?.addEventListener("submit", (e) => {
        e.preventDefault();
        const formData = new FormData(e.target! as HTMLFormElement);
        const temperaturaOrigen = parseFloat(
            formData.get("temperaturaOrigen")!.toString()
        );
        const temperaturaFin = parseFloat(
            formData.get("temperaturaFin")!.toString()
        );
        const tempAconvertir = parseFloat(
            formData.get("tempAconvertir")!.toString() || "0"
        );
        const convertirTemperatura = convertirTemp({
            tempAconvertir,
            temperaturaFin,
            temperaturaOrigen,
        });
        document.getElementById(
            "temperaturaSalida"
        )!.innerText = `${convertirTemperatura}`;
    });
}

interface convertidorTempInterface {
    temperaturaOrigen: number;
    tempAconvertir: number;
    temperaturaFin: number;
}
function convertirTemp({
    temperaturaFin,
    tempAconvertir,
    temperaturaOrigen,
}: convertidorTempInterface): number {
    if (
        temperaturaOrigen === MedicionTemperatura.CELSIUS &&
        temperaturaFin === MedicionTemperatura.FAHRENHEIT
    ) {
        /* (0 °C × 9/5) + 32 = 32 °F */
        return tempAconvertir * (9 / 5) + 32;
    }
    if (
        temperaturaOrigen === MedicionTemperatura.FAHRENHEIT &&
        temperaturaFin === MedicionTemperatura.CELSIUS
    ) {
        /* (0 °F − 32) × 5/9 = -17.78 °C*/
        return (tempAconvertir - 32) * (5 / 9);
    }
    return tempAconvertir;
}

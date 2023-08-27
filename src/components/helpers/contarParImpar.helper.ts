
interface parImparObject {
    par: number;
    impar: number;
}
export function contarParImparDesdeUnRango({
    min,
    max,
}: {
    min: number;
    max: number;
}): parImparObject {
    const parImpar: parImparObject = {
        par: 0,
        impar: 0,
    };
    for (let number:number = min; number <= max; number++) {
        // uso el objeto parImparObject para ir guardando como contador de si es Par/Impar
        number % 2 === 0 && number !== 0 ? parImpar.par++ : parImpar.impar++;
    }
    return parImpar;
}
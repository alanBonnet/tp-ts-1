export function calcularFibonacci(maximo: number): Array<number> | string{
    if (maximo >= 1) {
        let Fibonacci: Array<number> = [0, 1];
        for (let index: number = 0; index < maximo; index++) {
            Fibonacci.push(Fibonacci[index] + Fibonacci[index + 1])
        }
        return Fibonacci
    }
    return ""// porque quiero que no muestre mensaje
}
export function mostrarFibonacci(fibonacci: Array<number> | string, divElement: HTMLElement){
    if(typeof fibonacci === "string"){//muestra el mensaje vacío ""
        divElement!.innerText = fibonacci;
        return;
    }
    let msjSalida:string = ""
    for(let fiboNumero of fibonacci){// para mostrar la secuencia fibonacci 
        msjSalida += `${fiboNumero} - `
    }
    divElement!.innerText = msjSalida;
}
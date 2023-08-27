export function ContadorPalabras() {
    const contadorPalabraElement = document.getElementById("ContadorPalabras");
    contadorPalabraElement!.innerHTML = `
    <h2>Contador de palabras</h2>
    <input type="text" value="" name="contarPalabras"></input>
    <button type="submit">Contar</button>
    <p id="palabrasContadas"></p>
    `;
    contadorPalabraElement?.addEventListener('submit',
    e => {
        e.preventDefault();
        const formData = new FormData(e.target! as HTMLFormElement);
        const contarPalabras = formData.get('contarPalabras')!.toString();
        const contar = contadorPalabras({texto:contarPalabras})
        document.getElementById('palabrasContadas')!.innerText = `Número de palabras: ${contar}.`
    })
}

function contadorPalabras({texto}:{texto:string}):number{
    if(!texto.trim())return 0;// para que no cuente 1 en caso de ""
    const contador = texto.trim().split(' ')//separo el texto en un array que va separando a cada palabra por el "espacio"
    return contador.length;// la longitud de contador depende de los espacios que hayan en el texto
}

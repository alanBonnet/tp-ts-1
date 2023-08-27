import { Calculadora } from "./components/Calculadora";
import { ContadorPalabras } from "./components/ContarPalabra";
import { ContarParImpar } from "./components/ContarParImpar";
import { ConvertidorTemp } from "./components/ConvertidorTemp";
import { Fibonacci } from "./components/Fibonacci";
import { TablaMultiplicar } from "./components/TablaMultiplicar";
import "./style.css";
document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
    <form id="Calculadora"></form>
    <br />
    <form id="ContarParImpar"></form>
    <br />
    <form id="TablaMultiplicar"></form>
    <br />
    <form id="Fibonacci"></form>
    <br />
    <form id="ConvertidorTemp"></form>
    <br />
    <form id="ContadorPalabras"></form>

`;

Calculadora();
ContarParImpar();
TablaMultiplicar();
Fibonacci();
ConvertidorTemp();
ContadorPalabras()
/* Convertidor de Temperatura:
Crear un programa que convierta entre grados Celsius y Fahrenheit según la elección
del usuario. */

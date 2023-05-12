const displayValorAnterior = document.getElementById("valor-anterior")
const displayValorActual = document.getElementById("valor-actual")
const botonesNumeros = document.querySelectorAll(".num")
const botonesOperadores = document.querySelectorAll(".operador")
const igual = document.getElementById("igual")
const deleteBtn = document.getElementById("delete")
const back = document.getElementById("back")

let primerosNumeros = []
let operador
let segundosNumeros = []

botonesNumeros.forEach(boton =>{
    boton.addEventListener("click", (e) =>{
        primerosNumeros.push(parseInt(e.target.textContent));
        primerosNumeros.toString()
        primerosNumeros.join("");
        displayValorActual.textContent=primerosNumeros.join("")
    })
})

botonesOperadores.forEach(boton =>{
    boton.addEventListener("click", (e) =>{
        operador = e.target.textContent
        displayValorActual.textContent += operador
        displayValorAnterior.textContent = displayValorActual.textContent
        displayValorActual.textContent = ""
        segundosNumeros = primerosNumeros
        primerosNumeros = []
    })
})

class Calculadora {
    sumar(num1, num2){
        return num2 + num1
    }

    restar(num1, num2){
        return num1 - num2
    }

    dividir(num1, num2){
        return num1 / num2
    }

    multiplicar(num1, num2){
        return num2 * num1
    }

    potencia(num1){
        return Math.pow(num1, 2)
    }
}


class Display{
    constructor(displayValorAnterior, displayValorActual){
        this.displayValorAnterior = displayValorAnterior,
        this.displayValorActual = displayValorActual,
        this.calculadora = new Calculadora(),
        this.valorActual = "",
        this.valorAnterior = ""
    }
    agregarNumero(numero){
        this.valorActual = numero;
    }
}

const calculadora = new Calculadora();

igual.addEventListener("click", (e)=>{

    if(operador == "+"){
        segundosNumeros.toString()
        displayValorActual.textContent = ""
        displayValorAnterior.textContent = calculadora.sumar(parseInt(primerosNumeros.join("")),parseInt(segundosNumeros.join("")) )
        displayValorAnterior.textContent=== "NaN" ? displayValorAnterior.textContent = "Error": displayValorAnterior.textContent = calculadora.sumar(parseInt(segundosNumeros.join("")),parseInt(primerosNumeros.join("")) );
        primerosNumeros = []
        operador = ""
    }else if(operador == "-"){
        displayValorActual.textContent = ""
        segundosNumeros.toString()
        segundosNumeros.join("");
        displayValorActual.textContent = ""
        displayValorAnterior.textContent = calculadora.restar(parseInt(primerosNumeros.join("")),parseInt(segundosNumeros.join("")) )
        displayValorAnterior.textContent=== "NaN" ? displayValorAnterior.textContent = "Error": displayValorAnterior.textContent = calculadora.restar(parseInt(segundosNumeros.join("")),parseInt(primerosNumeros.join("")) );
        primerosNumeros = []
       operador = ""

    }else if(operador == "x"){
        displayValorActual.textContent = ""
        segundosNumeros.toString()
        segundosNumeros.join("");
        displayValorActual.textContent = ""
        displayValorAnterior.textContent = calculadora.multiplicar(parseInt(primerosNumeros.join("")),parseInt(segundosNumeros.join("")) )
        displayValorAnterior.textContent=== "NaN" ? displayValorAnterior.textContent = "Error": displayValorAnterior.textContent = calculadora.multiplicar(parseInt(segundosNumeros.join("")),parseInt(primerosNumeros.join("")) );
        primerosNumeros = []
        operador = ""

    }else if(operador == "%"){
        displayValorActual.textContent = ""
        segundosNumeros.toString()
        segundosNumeros.join("");
        displayValorActual.textContent = ""
        displayValorAnterior.textContent = calculadora.dividir(parseInt(segundosNumeros.join("")),parseInt(primerosNumeros.join("")) )
        displayValorAnterior.textContent=== "NaN" ? displayValorAnterior.textContent = "Error": displayValorAnterior.textContent = calculadora.dividir(parseInt(segundosNumeros.join("")),parseInt(primerosNumeros.join("")) );
        primerosNumeros = []
        operador = ""

    }


})




deleteBtn.addEventListener("click", ()=>{
    displayValorActual.textContent = ""
    displayValorAnterior.textContent = ""
    primerosNumeros = []
    segundosNumeros = []
    operador = ""
})
back.addEventListener("click", ()=>{
    primerosNumeros.pop()
    primerosNumeros.toString()
    displayValorActual.textContent = primerosNumeros.join("")
    console.log(primerosNumeros);
})
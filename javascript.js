const persona = {
    nombre: "Solange",
    apellido: "Fano",
    edad: 33
}

if (persona.edad >= 18){
    console.log("es mayor de edad")
} else (
    console.log ("es menor de edad")
)

// EJERICIO Nº1
// Dada una variable "y" que puede contener un número de 1 a 7, determinar a que día de la semana corresponde. 
// Incluir la opción si la variable toma un valor no válido (por ejemplo 0 u 8).

const dia = 5

if (dia === 1){
    console.log ("1 corresponde a Lunes")
} else if (dia === 2) {
    console.log ("2 corresponde a Martes")
} else if (dia === 3) {
    console.log ("3 corresponde a Miércoles")
} else if (dia === 4) {
    console.log ("4 corrresponde a Jueves")
} else if (dia === 5) {
    console.log ("5 corresponde a Viernes")
} else if ( dia === 6) {
    console.log ("6 corresponde a Sábado")
} else if ( dia === 7) {
    console.log ("7 corresponde a Domingo")
} else {
    console.log ("no corresponde a un día de la semana")
}

// Otra opción:

const dias = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"]

dias[3]


// EJERCICIO Nº2
// Dada una variable donde se ingresa el nombre del mes, devolver la cantidad de días correspondiente.

const mes = "Septiembre"

if (mes === "Enero"){
    console.log (mes + " tiene 31 días")
} else if (mes === "Febrero"){
    console.log (mes + " tiene 28 días")
} else if (mes === "Marzo"){
    console.log (mes + " tiene 31 días")
} else if (mes === "Abril"){
    console.log (mes + " tiene 30 días")
} else if (mes === "Mayo"){
    console.log (mes + " tiene 31 días")
} else if (mes === "Junio"){
    console.log (mes + " tiene 30 días")
} else if (mes === "Julio"){
    console.log (mes + " tiene 31 días")
} else if (mes === "Agosto"){
    console.log (mes + " tiene 31 días")
} else if (mes === "Septiembre"){
    console.log (mes + " tiene 30 días")
} else if (mes === "Octubre"){
    console.log (mes + " tiene 31 días")
} else if (mes === "Noviembre"){
    console.log (mes + " tiene 30 días")
} else if (mes === "Diciembre"){
    console.log (mes + " tiene 31 días")
}


//EJERCICIO Nº3
// Dada una variable "x" la cual contiene un numero, determinar si ese numero es positivo o negativo.
// Si es cero, mostrar otro mensaje

let x=2

if (x > 0){
    console.log ("el número es positivo")
} else if (x < 0){
    console.log ("el número es negativo")
} else {
    console.log ("el numero es 0")
}


//EJERCICIO Nº4
// Dada una variable "x" la cual contiene una letra, determinar si es una vocal.

let letra = "a"

if (letra == "a" || letra == "e" || letra == "i" || letra == "o" || letra == "u"){
    console.log ("es una vocal")
} else {
    console.log ("no es una vocal")
}


//EJERCICIO Nº5
// Dadas dos variables ("x" e "y") las cuales contienen un numero, determinar cual es mayor.

let y = 2
let x = 3

if ( y > x ){
    console.log ("el valor de y que equivale a " + y + ", es mayor")
} else if ( x > y ){
    console.log ("el valor de x que equivale a " + x + ", es mayor")
} else {
    console.log ("ambos valores son iguales")
}


//EJERCICIO Nº6
//Imprimir en pantalla los numeros del 1 al 10 utilizando un bucle "for"

const numero = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for (let i=0; i < numero.length; i++){
    console.log (numero[i])
}


//EJERCICIO Nª7
//Dada una variable "x" la cual contiene un numero, imprimir en consola todos los numeros que esten entre el valor 
//de la variable y 0.

//Ejemplo: Si la variable X es 3, imprimir en pantalla 3, 2, 1 y 0



for (let i=4 ; i >= 0 ; i--){
    console.log (i)
}


//EJERCICIO Nº8
//Dados distintas tarjetas de crédito, mostrar por consola la cantidad de cuotas sin interés según el siguiente criterio.

// Mastercard – hasta 6 cuotas s/interés
// Visa – hasta 9 cuotas s/interés
// Amex – hasta 3 cuotas sin interés
// Todas las demás - 1 cuota sin interés

let tarjetas = {
    Mastercard: "hasta 6 cuotas s/interés",
    Visa: "hasta 9 cuotas s/interés",
    Amex: "hasta 3 cuotas s/interés",
    Otras: "1 cuota sin interés"
}

let tarjeta = "Mastercard"

if (tarjeta != undefined || tarjeta != null){
    if (tarjeta == "Mastercard"){
        console.log (tarjetas.Mastercard)
    } else if (tarjeta == "Visa"){
        console.log (tarjetas.Visa)
    } else if (tarjeta == "Amex"){
        console.log (tarjetas.Amex)
    } else {
        console.log (tarjetas.Otras)
    }
} else {
    alert ("Por favor ingrese una tarjeta")
}




//EJERCICIO Nº9
// Imprimir en pantalla los numeros del 1 al 10 utilizando un bucle "while"



//EJERCICIO Nº10
//Imprimir los primeros 50 numeros pares
// 2, 4, 6, 8, 10, etc

let numerosParesHasta = 50

for(let i=0 ; i <= numerosParesHasta ; i++){
    console.log (i % 2)   
}


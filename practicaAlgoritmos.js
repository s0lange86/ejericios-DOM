// EJERCICIO NRO 1

// Crear una funcion que reciba como parametro un numero entero. 
// Esa funcion tiene que recorrer desde 0 hasta el numero recibido e imprimir en pantalla la palabra "Fizz" 
// si el numero actual es multiplo de 3, "Buzz" si el numero actual es multiplo de 5 o "Fizzbuzz" si el numero 
// actual es multiplo de 3 y 5. Si ninguna regla se cumple imprimir el numero.

// Ejemplo. 1 - 1 2 - 2 3 - Fizz 4 - 4 5 - Buzz 6 - Fizz 7 - 7 ... 15 - Fizzbuzz

function frases (number) {

    if (number === NaN ){
        console.log ("Por favor ingrese un número") //revisar comprobación
    } else {

        let roundnumber = Math.floor(number);
        console.log("El número ingresado es " + roundnumber)
    
        for(let i=0 ; i <= roundnumber ; i++){
            if(i % 3 == 0 && i % 5 == 0){
                console.log ("FizzBuzz");
            }else if (i % 3 == 0){
                console.log ("Fizz");
            }else if (i % 5 == 0){
                console.log("Buzz");
            }else{
                console.log(i)
            }
        }
    }    
}



//EJERCICIO 2
// Crear una funcion que devuelva el mayor numero dentro de un array
// Ejemplo
// const arr = [3,5,1,10,23,13] // 23

let array = [3,5,1,10,23,13]

function biggerNumber(array){
    let maxNum = Math.max.apply(null, array);
    console.log(maxNum)

}

biggerNumber([3,5,1,10,23,13])

//EJERCICIO 3
// Crear una funcion que devuelva los dos numeros mas grandes dentro de un array
// Ejemplo
// const arr = [3,5,1,10,23,13] // 23,13

let firstMax = 0
let secondMax = 0

function twoBiggerNumbers (array){

    array.forEach(function(element){
        if (element > firstMax){
            firstMax = element;
        } else if (element > secondMax && secondMax != firstMax){
            secondMax = element;
        }
    })
    console.log ("el primer nro mayor es " + firstMax)
    console.log ("el segundo nro mayor es " + secondMax)
}


//EJERICIO 4
// Crear una funcion que diga todos los elementos que aparecen mas de una vez en un array.
// Ejemplo:
// const arr = [1,2,3,2,3,4,1] // 2,3,1
let arr = [1,2,3,2,3,4,1]

function repeats (arr){

    arr.forEach (function(element){
        let numrepeat = numrepeat + element
        if (element == numrepeat){
            console.log (element) 
        }
    })
}


//EJERCICIO 5
// Crear una funcion que diga todos los elementos que aparecen solo una vez en un array.
// Ejemplo:
// const arr = [1,2,3,2,3,4,1] // 4



//EJERCICIO 6
// Crear una funcion que determine si una palabra es palindromo o no.
// Ejemplo
// palindrome('juani') // false palindrome('sugus') // true



//EJERCICIO 7
// Crear una funcion que devuelva el string que le enviamos pero invertido.
// reverse('juani') // inauj
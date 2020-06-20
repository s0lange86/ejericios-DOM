// Hacer una función que retorne AL AZAR, una palabra mal escrita y al lado su corrección, como por ejemplo:
// "Almondiga",
// "Setiembre",
// "Dentrífico",
// "Pastaflora",
// "Tergopol",
// "Murciégalo",
// "Estuatua",
// "Sambuche",
// "Captus",
// "Mondiola",
// "Picapuerta"
// "Zanagoria"
// "Picoparéntesis"
// "Me relaja"
// "Alverja"

// educandoAlSobrenano();
// > La palabra "Setiembre" se escribe "Septiembre"
// educandoAlSobrenano();
// > La palabra "Estuatua" se escribe "Estatua"
// educandoAlSobrenano();
// > La palabra "Picapuerta" se escribe "Picaporte"

let palabras = {
    Almondiga : "Albondiga",
    Setiembre : "Septiembre",
    Dentrífico : "Dentífrico",
    Pastaflora : "Pastafrola",
    Tergopol : "Telgopor",
    Murciégalo : "Murciélago",
    Estuatua : "Estatua",
    Sambuche : "Sandwich",
    Captus : "Cactus",
    Mondiola : "Bondiola",
    Picapuerta : "Picaporte",
    Zanagoria : "Zanahoria",
    Picoparéntesis : "Mayor que o Menor que",
    "Me relaja" : "Me empalaga",
    alverja : "arveja"
}



function listado (palabras){
    let aleatorio = Math.floor(Math.random()*Object.keys(palabras).length);
    let mal = Object.keys(palabras)[aleatorio];
    let bien = Object.values(palabras)[aleatorio];

    console.log("Esta mal decir "+mal+" porque se dice: "+bien)
}

listado (palabras);
listado (palabras);
listado (palabras);
listado (palabras);

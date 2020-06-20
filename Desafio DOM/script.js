// EJERCICIO 1:

const clean = () => {
    document.querySelectorAll(".inputText").forEach((input)=>{ //referenciamos a las clases .inputText de los 3 inputs de mi HTML 
        input.value = "" //elimino el contenido de los input
    })
}

//EJERCICIO 2: video

const textValue = document.querySelector ("#inputTextVideo") // referencio al input del ejercicio del video
const list = document.querySelector (".list") // referencio al "ul"

let additem = () =>{
    const addtext = document.createElement ("li")
    addtext.innerText = textValue.value; //para agregar el texto del input en el "li"
    
    list.appendChild(addtext) // para crear/agregar el hijo "li" al "ul"
    textValue.value = ""; //para borrar el contenido del input una vez que fue agregado al listado


    //aca agrego efectos de sombras con el evento "onclick"
    textValue.classList.remove("shadow")
    document.querySelector("#addButton").classList.add("shadow")
    document.querySelector("#clearButton").classList.remove("shadow")

}

let inputText = () =>{
    textValue.classList.add("shadow")
    document.querySelector("#addButton").classList.remove("shadow")
    document.querySelector("#clearButton").classList.remove("shadow")
}


//EJERCICIO 3:

let clearItem = () =>{
    list.innerHTML = null; //eliminamos todos los "li" de nuestro "ul"

    textValue.classList.remove("shadow")
    document.querySelector("#addButton").classList.remove("shadow")
    document.querySelector("#clearButton").classList.add ("shadow")
}
let conta = 0
let pessoas = 0

const containput = document.querySelector("#conta")
containput.addEventListener("input", recebervalorconta)

function recebervalorconta(evento) {
    conta = Number(evento.target.value)
}

const pessoasInput = document.querySelector("pessoas")
pessoasInput.addEventListener("input", )

function receberquantidadepessoas(evento) {
    const paragrafoERRO = document.querySelector(".pessoas #erro") 
    const divErro = document.querySelector(".pessoas .input-box")

    if(evento.target.value === "0") {
        paragrafoERRO.style.display = "block"
        divErro.setAttribute("id", "erro-div")
    } else{
        paragrafoERRO.style.display = "none"
        divErro.setAttribute("id", "")
        pessoas = Number(evento.target.value)
    }
}




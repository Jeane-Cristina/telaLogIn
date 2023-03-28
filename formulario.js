const formulario = document.querySelector("#formulario")
const nome = document.querySelector("#name")
const email = document.querySelector("#e-mail")
const botao = document.querySelector("#button")
var listaCadastros = []

botao.addEventListener("click",salvar)

function salvar(){
     
    cadastrados={
        "nome":nome.value,
        "email":email.value
    }
    listaCadastros.push(cadastrados)

    nome.value=""
    email.value=""

    sanvandoNoLS()
}


function sanvandoNoLS(){
  
    localStorage.setItem("item", JSON.stringify(listaCadastros))
}

console.log(listaCadastros)


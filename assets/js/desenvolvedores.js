var sol = document.querySelector('.sun')
var lua = document.querySelector('.moon')
var card = document.querySelector('.card')
var texto = document.querySelector('.texto')
var texto2 = document.querySelector('.texto2')

function light(){
    card.style.background = "#fff"
    lua.style.display = "block"
    sol.style.display = "none"
    texto.style.color = "#000"
    texto2.style.color = "#000"
}

function dark(){
    card.style.background = "#272727"
    sol.style.display = "block"
    lua.style.display = "none"
    texto.style.color = "#fff"
    texto2.style.color = "#fff"
}

var sun = document.querySelector('.sol')
var moon = document.querySelector('.lua')
var card2 = document.querySelector('.card2')
var text = document.querySelector('.text')
var text2 = document.querySelector('.text2')

function dia(){
    card2.style.background = "#fff"
    moon.style.display = "block"
    sun.style.display = "none"
    text.style.color = "#000"
    text2.style.color = "#000"
}

function noite(){
    card2.style.background = "#272727"
    sun.style.display = "block"
    moon.style.display = "none"
    text.style.color = "#fff"
    text2.style.color = "#fff"
}

var sol2 = document.querySelector('.sol2')
var lua2 = document.querySelector('.lua2')
var card3 = document.querySelector('.card3')
var texto3 = document.querySelector('.texto3')
var texto4 = document.querySelector('.texto4')

function claro(){
    card3.style.background = "#fff"
    lua2.style.display = "block"
    sol2.style.display = "none"
    texto3.style.color = "#000"
    texto4.style.color = "#000"
}

function escuro(){
    card3.style.background = "#272727"
    sol2.style.display = "block"
    lua2.style.display = "none"
    texto3.style.color = "#fff"
    texto4.style.color = "#fff"
}
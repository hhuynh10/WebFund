var imgElement = document.querySelector('#poke-img')

function ice(element){
    element.style.opacity = 0.5
    imgElement.src = 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/365.png'
}

function fire(element){
    element.classList.add('poke-btn')
    imgElement.src = 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/631.png'
}

var h2Element = document.querySelector('h2')
var count = 0

function like(element){
    count++
    h2Element.innerText = count + ' ' + 'like(s)'
    element.classList.add('like')
}
var nameElement = document.querySelector('.name')

function setName(element){
    nameElement.innerText = element.value
}

function chooseLunch(element) {
    alert("You picked " + element.value);
}
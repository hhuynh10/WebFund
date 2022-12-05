let changeColor = document.querySelectorAll(".color");

function colorChange(element){
    for (let i = 0; i < changeColor.length; i ++){
        changeColor[i].style.color = element.value;
    }
}
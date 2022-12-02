function hover(element){
    element.src = "assets/succulents-1.jpg";
}

function back(element){
    element.src = "assets/succulents-2.jpg";
}

var alertElement = document.querySelector("#alertbox");

function hide() {
    alertElement.remove();
}
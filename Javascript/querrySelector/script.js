var count = 0
var countELement = document.querySelector('h1')

function add(){
    count++;
    countELement.innerText = count + " " + "Like(s)"

}

function subtract(){
    count--;
    countELement.innerText = count + " " + "Like(s)"
}
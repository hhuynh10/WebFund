let currentUsername = ""

let cardsdiv  = document.querySelector("#cards")

function getUsername(element){
    console.log(element.value)
    currentUsername = element.value
}

async function search() {
    let res = await fetch("https://api.github.com/users/" + currentUsername);
    let coderData = await res.json();
    cardsdiv.innerHTML = makeCoderCard(coderData) + cardsdiv.innerHTML
}

function makeCoderCard(data){
    let res = `<div class="card">
                    <img src="${data.avatar_url}">
                    <h3>${data.login} - ${data.name}</h3>
                    <p>Location: ${data.location}</p>
                    <a href="${data.html_url}">GitHub</a> 
                </div>`
    return res
}
var sideSize = 16;

let playArea = document.querySelector('.playArea');

for(let i = 1 ; i <= sideSize; i++){
    playArea.appendChild(document.createElement('div')).setAttribute('id','row');

}
let row = playArea.querySelectorAll("div");

row.forEach(e => {
    for(let i = 1; i <= sideSize; i++){
        e.appendChild(document.createElement('div')).setAttribute('id','col');
    }
});

let col = playArea.querySelectorAll('#col');
col.forEach((e) => {
    e.onmouseover = () => {
        e.style['background-color'] = 'white'
    }
})

let rstrtButton = document.querySelector('#rstrtBtn');
rstrtButton.onclick = () => { 
    // sideSize = Number(prompt("What is the new size?").valueOf);
    let size = prompt("Whats the new SIZE?");
    sideSize = Number.parseInt(size);
    console.log(size);
}


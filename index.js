function changeColor(e){
    
}

let playArea = document.querySelector('.playArea');

for(let i = 1 ; i <= 16; i++){
    playArea.appendChild(document.createElement('div')).setAttribute('id','row');

}
let row = playArea.querySelectorAll("div");

row.forEach(e => {
    for(let i = 1; i <= 16; i++){
        e.appendChild(document.createElement('div')).setAttribute('id','col');
    }
});

let col = playArea.querySelectorAll('#col');
col.forEach((e) => {
    e.onmouseover = () => {
        e.style['background-color'] = 'white'
    }
})



//functions
function makePlayArea(sideSize){

    //makes the row
    for(let i = 1 ; i <= sideSize; i++){
        playArea.appendChild(document.createElement('div')).setAttribute('id','row');
    }
    let row = playArea.querySelectorAll("div");
    row.forEach(e => {
        for(let i = 1; i <= sideSize; i++){
            e.appendChild(document.createElement('div')).setAttribute('id','col');
            e.style.height =  `calc(100% / ${sideSize})`;            
        }
    });
    

    let col = playArea.querySelectorAll('#col');
        col.forEach((e) => {
            e.style.width =  `calc(100% / ${sideSize})`;            
            e.onmouseover = () => {
                e.style['background-color'] = 'white'
            }
        })
    }

//main
var sideSize = 16;
let playArea = document.querySelector('.playArea');

makePlayArea(sideSize);

let rstrtButton = document.querySelector('#rstrtBtn');
rstrtButton.onclick = () => { 
    let size = prompt("Whats the new SIZE? (1-100)");
    sideSize = Number.parseInt(size);
    while(sideSize < 1 || sideSize > 100){
        size = prompt("Whats the new SIZE? (1-100)");
    }
        playArea.replaceChildren("");
        makePlayArea(sideSize);
        
}


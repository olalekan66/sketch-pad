const container = document.querySelector('.container');
const redbtn = document.createElement('button');
const rgbbtn = document.createElement('button');
const bluebtn = document.createElement('button');
const resize = document.createElement('button');
const buttons = document.querySelector('.buttons');
redbtn.setAttribute('id', 'red');
rgbbtn.setAttribute('id', 'black');
bluebtn.setAttribute('id', 'blue');
resize.setAttribute('id', 'reset');
resize.textContent = 'RESET';
buttons.appendChild(resize).classList.add('btn');


function creategrid(squares){
    for (let i = 0; i < squares; i++){
        let column = document.createElement('div');
        column.classList.add('column');
        for (let j = 0; j <= squares; j++){
            let row = document.createElement('div');
            row.classList.add('row');
            column.appendChild(row);
        }
        container.appendChild(column);
    }
    redcolor();
    blackcolor();
    bluecolor();
}

function redcolor(){
    const boxes = document.querySelectorAll('.row')
    redbtn.textContent ='RED';
    redbtn.addEventListener('click', () =>{
        boxes.forEach(box => box.addEventListener('mouseover', () => {
            let r = Math.floor(Math.random() * 256);
            let redshade = `rgb(${r}, 0, 0)`;
            box.style.background = redshade;
        }));
    });
    buttons.appendChild(redbtn).classList.add('btn');
};


function blackcolor(){
    const boxes = document.querySelectorAll('.row')
    rgbbtn.textContent ='RGB';
    rgbbtn.addEventListener('click', () =>{
        boxes.forEach(box => box.addEventListener('mouseover', () => {
            let r = Math.floor(Math.random() * 256);
            let g = Math.floor(Math.random() * 256);
            let b = Math.floor(Math.random() * 256);
            rgb = `rgb(${r}, ${g}, ${b})`
            box.style.background = rgb;
        }));
    });
    buttons.appendChild(rgbbtn).classList.add('btn');
};


function bluecolor(){
    const boxes = document.querySelectorAll('.row')
    bluebtn.textContent ='BLUE';
    bluebtn.addEventListener('click', () =>{
        boxes.forEach(box => box.addEventListener('mouseover', () => {
            let r = Math.floor(Math.random() * 256);
            let blueshade = `rgb(0, 0, ${r})`;
            box.style.background = blueshade;
        }));
    });
    buttons.appendChild(bluebtn).classList.add('btn');
};


function Remove(){
    const boxes = document.querySelectorAll('.column');
    boxes.forEach(box => {
        box.remove();
    });
}

function reset(){
    resize.addEventListener('click', () => {
        let request = prompt('Specify grid size for reset');
        if (request === null || request < 1){
            Remove();
            creategrid(16);
        }
        else if(request < 100){
            Remove();
            creategrid(request);
        }
        else{
            alert('number too big, pls enter a number less than 100');
            reset();
        }
    });
}
creategrid(16);
reset();
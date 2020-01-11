const container = document.querySelector('#container');

createEAS();

function createEAS() {
    
    //Change Size Button
    const changeSize = document.createElement('button');
    changeSize.innerHTML = 'Choose grid size';
    changeSize.addEventListener('click', resizeGrid);
    container.appendChild(changeSize);
    //Reset Button
    const resetButton = document.createElement('button');
    resetButton.innerHTML = 'Click Here to reset';
    resetButton.addEventListener('click', clearGrids);
    container.appendChild(resetButton);
    //create Grid
    const EASGrid = document.createElement('div');
    EASGrid.id = 'EASgrid';
    container.appendChild(EASGrid);
    //create default grid
    let defaultSize = 16;
    createGrid(defaultSize);

    let box = document.querySelectorAll('.gridBox');
    box.forEach( box => {
    box.addEventListener('mouseover', drawOnGrid);
})

}

function createGrid(size) {
    //call grid
    const grid = document.querySelector('#EASgrid');

    for (let i = 0; i < size; i++){
        let row = document.createElement('div');
        row.classList = 'row';
        row.style.height = `${600/size}px`
        for (let x = 0; x < size; x++){
            const pixel = document.createElement('div');
            pixel.classList = 'gridBox';
            pixel.style.height = `${600/size}px`;
            pixel.style.width = `${600/size}px`;
            row.appendChild(pixel);
        }
        grid.appendChild(row);
    }
}


function clearGrids () {
    let box = document.querySelectorAll('.gridBox');
    box.forEach( box => {
    box.addEventListener('mouseover', drawOnGrid);
})

    //remove styling from grid boxes
    box.forEach( box => box.style.background = '');
}

function resizeGrid() {
    // ask for new grid size
    let newSize = prompt('New Grid Size?', );
    // clear current grid
    document.querySelector('#EASgrid').innerHTML = '';
    // create new grid
    createGrid(newSize);
    let box = document.querySelectorAll('.gridBox');
    box.forEach( box => {
    box.addEventListener('mouseover', drawOnGrid);
})

}
function drawOnGrid () {
    this.style.background = 'black';
    
}







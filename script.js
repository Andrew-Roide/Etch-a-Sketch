const gridSize = 16;
const clickedTiles = [];

function setUpGrid(gridSize) {
    const section = document.getElementsByTagName('section')[0];
    for (let row = 0; row < gridSize; row++) {
        const wrapper = document.createElement('div');
        wrapper.classList.add('wrapper');
        for (let col = 0; col < gridSize; col++ ) {
            const tile = document.createElement('div');
            tile.classList.add('tile');
            wrapper.appendChild(tile);
        }
        section.appendChild(wrapper);
    }
}

function clickEventListener() {
    document.addEventListener("click", function(event) {
        if (!event.target.classList.contains('tile')) return;
        if (clickedTiles.includes(event.target)) return;
        event.target.classList.add('selected');
        clickedTiles.push(event.target);
        console.log(clickedTiles);
    });
}
setUpGrid(gridSize);

clickEventListener(gridSize);
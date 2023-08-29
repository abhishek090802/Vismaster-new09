async function stairMaze() {
    inProgress = true;
    clearBoard(keepWalls = false);

    var below = true;
    var j = 0;
    while (j < totalCols - 1) {
        // this will be from top to bottom 
        if (below) {
            for (var i = 1; i < totalRows - 1; i++, j++) {
                cellsToAnimate.push([[i, j], "wall"]);
            }
            // starting from the first column and row 1 we are creating wall 
            below = false;
        } 
        // this will be from bottom to top 
        else {
            for (var i = totalRows - 2; i > 0; i--, j++) {
                cellsToAnimate.push([[i, j], "wall"]);
            }
            below = true;
        }
        // as soon as we reach the upward stair wall column then this else statemenet will encounter
    }
    await animateCells();
    inProgress = false;
    return;
}

// as soon as our column reaches the j==totalCols-1 means we reach the last column means cell wall is being made 


function inBounds(cell) {
    return (cell[0] >= 0 && cell[1] >= 0 && cell[0] < totalRows && cell[1] < totalCols);
}

// stair is in the form of \/\/

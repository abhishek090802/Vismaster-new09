async function spiralMaze() {
    inProgress = true;
    clearBoard(keepWalls = false);

    var length = 1;
    var direction = {
        "0": [-1, 1],  //northeast
        "1": [1, 1],   //southeast
        "2": [1, -1],  //southwest
        "3": [-1, -1], //northwest
    };
    var cell = [Math.floor(totalRows / 2), Math.floor(totalCols / 2)];
    // the middle cell from where the middle [row,col] the spiralmaze is being start 
    while (inBounds(cell)) {
        var i_increment = direction[length % 4][0];
        var j_increment = direction[length % 4][1];
    //    only one direction is being specified  for the whole one line maze 
    // with the length%4 it will be updated accordingly 
    
        for (var count = 0; count < length; count++) {
            var i = cell[0];
            var j = cell[1];
            cellsToAnimate.push([[i, j], "wall"]);
            cell[0] += i_increment;
            cell[1] += j_increment;
            if (!inBounds(cell)) { break; }
            // the bounding of the cell will only be cross when the whole length is being consumed so we hev not to worry about that the break before the length is being properly utilized
        }
        length += 1;
        // the length here represents the length of the walls in the leftist or rightist walls in the grid 
    }
    await animateCells();
    inProgress = false;
    return;
}


// below function will check for the bounding of the coordinates whether the cell is in the bound or not

function inBounds(cell) {
    return (cell[0] >= 0 && cell[1] >= 0 && cell[0] < totalRows && cell[1] < totalCols);
}






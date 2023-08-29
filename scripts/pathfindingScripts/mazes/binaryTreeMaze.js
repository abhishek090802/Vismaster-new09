// binary tree maze is based on the approach as if  possible for the down then we can easily move to right ward cells by moving columns 
async function binaryTreeMaze() {
    inProgress = true;
    clearBoard(keepWalls = false);

    for (y = 1; y < totalCols - 1; y += 2) {
        for (x = 1; x < totalRows - 1; x += 2) {
            let down = Boolean(Math.round(Math.random()))
            if (!isAvailable(x, y, down)) { down = !down }
            // it is necessary such there will be alternativity will be maintained after row maze blockages there can be column maze blockages as well 
            // or we can also say that if the row mazing is not valid then we will consider the column mazing by changing the down and again checking for isAvailable 
            if (isAvailable(x, y, down)) {
                if (down) {
                    cellsToAnimate.push([[x, y + 1], "wall"]);
                    cellsToAnimate.push([[x, y + 2], "wall"]);
                } else {
                    cellsToAnimate.push([[x + 1, y], "wall"]);
                    cellsToAnimate.push([[x + 2, y], "wall"]);
                }
            }
        }
    }

    await animateCells();
    inProgress = false;
    return;
}

function isAvailable(x, y, down) {
    if (down) {
        if (y < totalCols - 3) { return true }
        return false
    }
    else {
        if (x < totalRows - 3) { return true }
        return false
    }
}
// if -3 because as 1 indexing extra for the totalcols 1 based indexing if -3 is valid then definately -1 and -2 will also be valid 


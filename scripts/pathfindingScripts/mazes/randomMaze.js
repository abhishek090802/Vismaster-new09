// the random maze based on the approach that apart from ther first row,ol,last row,col other cells are being randomly being llocated as the maze or leave it as unvisited 

async function randomMaze() {
    inProgress = true;
    clearBoard(keepWalls = false);
    var visited = createVisited();
    var walls = makeWalls();
    var cells = [startCell, endCell];
    // initially coinsidering three 2-d matrix one for storing the visited cell other for the walls and last one for storing the cells indices

    walls[startCell[0]][startCell[1]] = false;
    walls[endCell[0]][endCell[1]] = false;
    visited[startCell[0]][startCell[1]] = true;
    visited[endCell[0]][endCell[1]] = true;
    
    while (cells.length > 0) {
// until there are no cells in the cells array in the array 
        var random = Math.floor(Math.random() * cells.length);
        // the random will generate the random number from 0 to cells.length()-1
        var randomCell = cells[random];
        cells[random] = cells[cells.length - 1];
        // the random cell that we have take from the matrix get  into randomcell and the last element cells[random] will and the last element being popped 
        cells.pop();
        var neighbors = getNeighbors(randomCell[0], randomCell[1]);
        if (neighborsThatAreWalls(neighbors, walls) <=2) { continue; }
        // if neighbours that have walls are greater than equals to 3 then we can make it wall and move ahead by pushing that cell into cell 
        walls[randomCell[0]][randomCell[1]] = false;
        for (var k = 0; k < neighbors.length; k++) {
            var i = neighbors[k][0];
            var j = neighbors[k][1];
            if (visited[i][j]) { continue; }
            visited[i][j] = true;
            cells.push([i, j]);
        }
    }

    // Animate cells
    var cells = $("#tableContainer").find("td");
    for (var i = 0; i < totalRows; i++) {
        for (var j = 0; j < totalCols; j++) {
            if (i == 0 || i == (totalRows - 1) || j == 0 || j == (totalCols - 1) || walls[i][j]) {
                cellsToAnimate.push([[i, j], "wall"]);
            }
        }
    }
    await animateCells();
    inProgress = false;
    return;
}
function BFS() {
    var pathFound = false;
    var myQueue = new Queue();
    var prev = createPrev();
    // it will store the previous cells from the current cell that will help us to backtrack the shortest path from destination to source 

    var visited = createVisited();
    myQueue.enqueue(startCell);
    cellsToAnimate.push(startCell, "searching");
    // searching cell will be represented as the light blue 
    visited[startCell[0]][startCell[1]] = true;
    while (!myQueue.empty()) {
        var cell = myQueue.dequeue();
        var r = cell[0];
        var c = cell[1];
        cellsToAnimate.push([cell, "visited"]);
        // visited cell will be represented as the light brown 
        if (r == endCell[0] && c == endCell[1]) {
            pathFound = true;
            break;
        }
        
        var neighbors = getNeighbors(r, c);
        // this will find out the neighbour of the current cell (r,c)  
        for (var k = 0; k < neighbors.length; k++) {
            var m = neighbors[k][0];
            var n = neighbors[k][1];
            if (visited[m][n]) { continue; }
            // once for one cell the neighbours are encounterred and marked it as visited then for neighbour current node will not be visit again as wwe mark it as visited previously
            visited[m][n] = true;
            prev[m][n] = [r, c];
            cellsToAnimate.push([neighbors[k], "searching"]);
            // searching is being represented as the light blue 
            myQueue.enqueue(neighbors[k]);
        }
    }

    while (!myQueue.empty()) {
        var cell = myQueue.dequeue();
        var r = cell[0];
        var c = cell[1];
        cellsToAnimate.push([cell, "visited"]);
    }
// the above while loop is because as soon as we reach the destination at that time of instance there were several countable number of searching cells of light blue color inorder such that those were also changed into visited we have to remove the remaining elements and mark them as visited 
    if (pathFound) {
        var r = endCell[0];
        var c = endCell[1];
        cellsToAnimate.push([[r, c], "success"]);
        // success cells are represented by the yellow color  
        while (prev[r][c] != null) {
            var prevCell = prev[r][c];
            r = prevCell[0];
            c = prevCell[1];
            cellsToAnimate.push([[r, c], "success"]);
        }
        // with the help of the prev[r][c] matrix we can able to reach the ssource by backtracking
        
    }
    return pathFound;
}
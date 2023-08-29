// standard dijkstra's algorithm 
function dijkstra() {
    var pathFound = false;
    var myHeap = new minHeap();
    var prev = createPrev();
    var distances = createDistances();
    var visited = createVisited();
    distances[startCell[0]][startCell[1]] = 0;
    myHeap.push([0, [startCell[0], startCell[1]]]);
    // min heap is in the form of the pair first contains the weight and second contains the pair {x,y} absica coordinate and y axis 
    cellsToAnimate.push([[startCell[0], startCell[1]], "searching"]);
    while (!myHeap.isEmpty()) {
        var cell = myHeap.getMin();
        var i = cell[1][0];
        var j = cell[1][1];
        if (visited[i][j]) { continue; }
        visited[i][j] = true;
        cellsToAnimate.push([[i, j], "visited"]);
        if (i == endCell[0] && j == endCell[1]) {
            pathFound = true;
            break;
        }
        var neighbors = getNeighbors(i, j);
        for (var k = 0; k < neighbors.length; k++) {
            var m = neighbors[k][0];
            var n = neighbors[k][1];
            if (visited[m][n]) { continue; }
            var newDistance = distances[i][j] + (weights.length != 0 ? weights[m][n] : 1);
// in order to update the newdistance for the current cell (m,n) from its  neighbour (i,j) and the edge weight if not equal to zero then weights[m][n] that is the wweight required to react weights[m][n] otherwise if weights[m][n]==0 then the edge weight will be considered as 1 

            if (newDistance < distances[m][n]) {
                distances[m][n] = newDistance;
                prev[m][n] = [i, j];
                myHeap.push([newDistance, [m, n]]);
                cellsToAnimate.push([[m, n], "searching"]);
            }
        }
    }
    
    while (!myHeap.isEmpty()) {
        var cell = myHeap.getMin();
        var i = cell[1][0];
        var j = cell[1][1];
        if (visited[i][j]) { continue; }
        visited[i][j] = true;
        cellsToAnimate.push([[i, j], "visited"]);
    }
    // if we have found the destination cell then the above loop will break out so the  current nodes those were in searching has to be considered as the visited node and make the node visited 

    if (pathFound) {
        var i = endCell[0];
        var j = endCell[1];
        cellsToAnimate.push([endCell, "success"]);
        while (prev[i][j] != null) {
            var prevCell = prev[i][j];
            i = prevCell[0];
            j = prevCell[1];
            cellsToAnimate.push([[i, j], "success"]);
        }
    }
    return pathFound;
}
function greedyBestFirstSearch() {
    var pathFound = false;
    var myHeap = new minHeap();
    var prev = createPrev();
    var costs = createDistances();
    var visited = createVisited();
    costs[startCell[0]][startCell[1]] = 0;
    myHeap.push([0, [startCell[0], startCell[1]]]);
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
            var newCost = Math.abs(endCell[0] - m) + Math.abs(endCell[1] - n);
            // the newcost will be calculated through the manhantan distance [x-m],[y-n] through row and column an if the cost[m][n] is larger than the newdistance then update the newdistance and update prev as well  
            if (newCost < costs[m][n]) {
                prev[m][n] = [i, j];
                costs[m][n] = newCost;
                myHeap.push([newCost, [m, n]]);
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
//  in order to update the visiting cell to visisted cell as the upper loop break when it encounters the destination cell 

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



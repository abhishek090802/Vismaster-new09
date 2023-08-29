// kind of the mixture of the  dijkstra and the greedy best first algorithm 

function AStar() {
    var pathFound = false;
    var myHeap = new minHeap();
    var prev = createPrev();
    var distances = createDistances();
    var costs = createDistances();
    var visited = createVisited();
    distances[startCell[0]][startCell[1]] = 0;
    costs[startCell[0]][startCell[1]] = 0;
    myHeap.push([0, [startCell[0], startCell[1]]]);
    // the min heap is in the form of the pair where the first is the distance aand second is the coordinate 
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
            if (newDistance < distances[m][n]) {
                distances[m][n] = newDistance;
                prev[m][n] = [i, j];
                cellsToAnimate.push([[m, n], "searching"]);
            }
        // the distance array is being updated here by using the almost a same concept as the dijkstra's algorithm 
            var newCost = distances[m][n] + Math.abs(endCell[0] - m) + Math.abs(endCell[1] - n);
            if (newCost < costs[m][n]) {
                costs[m][n] = newCost;
                myHeap.push([newCost, [m, n]]);
            }
        }
        // the cost array is being updated from the greedy best first search algorithm with the help of the distance array that we have already produced above in the if condition 
    }
   
    while (!myHeap.isEmpty()) {
        var cell = myHeap.getMin();
        var i = cell[1][0];
        var j = cell[1][1];
        if (visited[i][j]) { continue; }
        visited[i][j] = true;
        cellsToAnimate.push([[i, j], "visited"]);
    }

//    as soon as we get the destination cell we will break out the above while condition ad hence mark all the cell visited those were currently in the visiting position as we encounters the destination cell 
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
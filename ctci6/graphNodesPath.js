// time O(P), P is number of edges 
// space O(N), N is number of nodes
// Depth first search

function isConnected(graph, source, destination) {

    let visited = new Set();

    /**
     * Must find source node and destination node in graph
     * this can be implemented in graph class. Not implemented here
     */
    let s = graph.get(source);
    let d = graph.get(destination);

    return hasPath(s, d, visited);
    

    // do a search for toNode in fromNode adjacency list

    function hasPath(source, destination, seen) {

        if (source === destination) {
            return true;
        }

        seen.add(source);

        for (node of source.adjacent) {
            if (!visited.has(node)) {
                if (hasPath(node, destination, seen)) {
                    return true;
                }
            }
        }
        return false;
    }
}


// time O(P), P is number of edges 
// space O(N), N is number of nodes
// Breath first search

function isConnected(graph, source, destination) {

    let visited = new Set();

    /**
     * Must find source node and destination node in graph
     * this can be implemented in graph class. Not implemented here
     */
    let s = graph.get(source);
    let d = graph.get(destination);

    let queue = [];

    queue.push(s);
    
    while (queue.length > 0) {
        let node = queue.shift();
        
        if (!visited.has(node)) {
            if (node === destination) {
                return true;
            }
        }

        visited.add(node);

        for(neighbor in node.adjacent) {
            queue.push(neighbor);
        }
    }

    return false;
}
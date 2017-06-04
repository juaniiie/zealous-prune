/**
 * Input
 * projects: ['a', 'b', 'c', 'd', 'e', 'f']
 * dependencies: [['d', 'a'], ['b', 'f'], ['d', 'b'], ['a', 'f'], ['c', 'd']]
 * 
 * Output: ['f', 'e', 'a', 'b', 'd', 'c']
 */

/**
 * Solution
 * 
 */
function visit(project, visited, result, graph) { 
    if (result.indexOf(project) > -1) {
        return;
    }
    if (visited.has(project)) {
        throw new Error('dependencies are cyclic');
    }

    if (!graph.has(project)) {
        visited.add(project);
        result.unshift(project);
        return;
    }

    if (!visited.has(project)) {
        visited.add(project);
    }
    
    let edges = graph.get(project);
    
    for (let i = 0; i < edges.length; i++) {
      visit(edges[i], visited, result, graph);
    }
    
    if (result.indexOf(project) === -1) {
      result.unshift(project);
      return;
    }
}

function buildGraph(dependencies) {
    let graph = new Map();

    for (let i = 0; i < dependencies.length; i++) {
        let node = dependencies[i][1];
        let edge = dependencies[i][0];

        if (!graph.has(node)) {
            graph.set(node, [edge]);
        } else if (graph.has(node)) {
            let edges = graph.get(node);
            edges.push(edge);
            graph.set(node, edges);
        }
    }
    return graph;
}

function findBuildOrder(projects, dependencies) {
    let visited = new Set();
    let result = [];
    let graph = buildGraph(dependencies);
    
    for (let i = 0; i < projects.length; i++) {
        visit(projects[i], visited, result, graph);
    }
    console.log('result', result);
    return result;

}

const pro = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
const de = [
        [2, 1],
        [3, 1],
        [4, 2],
        [6, 2],
        [5, 3],
        [7, 3],
        [8, 4],
        [11, 8],
        [12, 8],
        [10, 6],
        [10, 5],
        [9, 7],
        [13, 10],
        [13, 9],
        [14, 13]
      ];
findBuildOrder(pro, de);

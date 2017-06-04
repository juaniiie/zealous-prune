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
    if (visited.has(project) || !graph.has(project)) {
        result.unshift(project);
        visited.add(project);
        return;
    }
    if (!visited.has(project)) {
        visited.add(project);
    }
    let edges = graph.get(project);
    for (let i = 0; i < edges.length; i++) {
        visit(edges[i], visited, result, graph);
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


    // console.log('graph entries', graph.entries());
    
    for (let i = 0; projects.length; i++) {
        visit(projects[i], visited, result, graph);
    }

    console.log('result');

}

const pro = ['a', 'b', 'c', 'd', 'e', 'f'];
const de = [['d', 'a'], ['b', 'f'], ['d', 'b'], ['a', 'f'], ['c', 'd']];
findBuildOrder(pro, de);

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
function visit(visitedSet, project, result) {

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
    

    console.log('graph entries', graph.entries());

}

const pro = ['a', 'b', 'c', 'd', 'e', 'f'];
const de = [['d', 'a'], ['b', 'f'], ['d', 'b'], ['a', 'f'], ['c', 'd']];
findBuildOrder(pro, de);

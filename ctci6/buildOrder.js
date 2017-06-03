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
function findBuildOrder(projects, dependencies) {
    let depend = new Map();
    let orderedList = [];

    for (let i = 0; i < dependencies.length; i++) {
        let duple = dependencies[i];
        if (!depend.has(duple[0])) {
            depend.set(duple[0], [duple[1]]);
        } else if (depend.has(duple[0])){
            let entry = depend.get(duple[0]);
            entry.push(duple[1]);
            depend.set(duple[0], entry);
        }
    }
    console.log('depend', depend.entries());

    let reqs = [];
    let originalItem;
    function findReqDependencies(item, map) {
        let itemDependencies = map.get(item);

        if (!itemDependencies) {
            if (reqs.indexOf(item) === -1) {
                reqs.unshift(item);
            }
            return;
        }
        //2
        for (var i = 0; i < itemDependencies.length; i++) {
            let dependency = itemDependencies[i];
            if (dependency === originalItem) {
                throw new Error('dependencies are cyclical');
            }
            findReqDependencies(itemDependencies[i], map);
            if (reqs.indexOf(dependency) === -1 && itemDependencies !== null) {
                reqs.push(dependency);
            }
        }
        //3
        if (reqs.indexOf(item) === -1) {
            reqs.push(item);
        }
    };

    for (let j = 0; j < projects.length; j++) {
        let project = projects[j];
        originalItem = project;
        findReqDependencies(project, depend);
    }
    
    return reqs;
}

const pro = [9, 1, 5, 6];
const de = [[6, 5], [5, 1], [1, 9], [9, 5]];
findBuildOrder(pro, de);

// add dependency
// check dependency's dependencies
// add those


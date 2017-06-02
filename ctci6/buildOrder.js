/**
 * Input
 * projects: ['a', 'b', 'c', 'd', 'e', 'f']
 * dependencies: [['d', 'a'], ['b', 'f'], ['d', 'b'], ['a', 'f'], ['c', 'd']]
 * 
 * Output: ['f', 'e', 'a', 'b', 'd', 'c']
 */
// let reqs = [];
function findReqDependencies(item, map, reqs) {
    let itemDependencies = map.get(item);

    if (!itemDependencies) {
        // console.log('dependencies is null', item);
        if (reqs.indexOf(item) === -1) {
            // console.log('unshifing', item);
            reqs.unshift(item);
            // console.log('resulting resp', reqs);
        }
        return;
    }
    
    for (var i = 0; i < itemDependencies.length; i++) {
        let dependency = itemDependencies[i];
        findReqDependencies(itemDependencies[i], map);
        if (reqs.indexOf(dependency) === -1 && itemDependencies !== null) {
            reqs.push(dependency);
        }
    }

    if (reqs.indexOf(item) === -1) {
        reqs.push(item);
    }

    return reqs;
};

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

    let r = [];
    for (let j = 0; j < projects.length; j++) {
        let project = projects[j];
        findReqDependencies(project, depend, r);
    }

}

const pro = ['a', 'b', 'c', 'd', 'e', 'f'];
const de = [['d', 'a'], ['b', 'f'], ['d', 'b'], ['a', 'f'], ['c', 'd']];
findBuildOrder(pro, de);

// add dependency
// check dependency's dependencies
// add those


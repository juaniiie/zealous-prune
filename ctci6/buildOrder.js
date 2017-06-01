/**
 * Input
 * projects: ['a', 'b', 'c', 'd', 'e', 'f']
 * dependencies: [['d', 'a'], ['b', 'f'], ['d', 'b'], ['a', 'f'], ['c', 'd']]
 * 
 * Output: ['f', 'e', 'a', 'b', 'd', 'c']
 */

function findDependency(list, item) {
    for (let d = 0; d < list.lenght; d++) {
        if (d[0] === item) {
            return d[1];
        }
    }
}

function findBuildOrder(projects, dependencies) {
    let depend = new Map();

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

    // console.log('depend entries', depend.entries());

}

const pro = ['a', 'b', 'c', 'd', 'e', 'f'];
const de = [['d', 'a'], ['b', 'f'], ['d', 'b'], ['a', 'f'], ['c', 'd']];
findBuildOrder(pro, de);
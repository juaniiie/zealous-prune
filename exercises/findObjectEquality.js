//Write a function that compares two objects

var deeEquals = function(obj1, obj2) {
    var obj1Props = Object.getOwnPropertyNames(obj1);
    var obj2Props = Object.getOwnPropertyNames(obj2);

    console.log('props1', obj1Props);
    console.log('props2', obj2Props);

if (obj1Props.length !== obj2Props.length) {
    return false;
}

for (var i = 0; i < obj1Props.length; i++) {
    var propName = obj1Props[i];

    console.log('propName', propName);
    console.log('obj2[propName]', obj2[propName]);
    console.log('obj1[propName]', obj1[propName]);

    if (obj2[propName] !== obj1[propName]) {
        return false;
    }
}

return true;

};


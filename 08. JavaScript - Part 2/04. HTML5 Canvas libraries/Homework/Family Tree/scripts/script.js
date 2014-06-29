/*globals window, Data, console */

window.onload = function () {
    var data = Data.familyMembers,
        rootNode = findRootNodePosition(data);
    var treeLevelsArray = prepareTreeLevels(data, rootNode);
};

function prepareTreeLevels(data, rootNode) {
    var treeLevelsArray = [],
        currentRoot = data[rootNode],
        level = 0;
    currentRoot.parent = null; // TODO: ???
    treeLevelsArray[level] = [currentRoot];

    for (var i, len = data.length; i < len; i++) {
        if (data[i] === rootNode) {
            continue;
        }

        treeLevelsArray[level] = getChildren(data, i);
        level++;
    }

    return treeLevelsArray;
}

function getChildren(data, i) {

}

function findRootNodePosition(data) {
    for (var i = 0, len = data.length; i < len; i++) {
        var currentNode = data[i],
            father = currentNode.father,
            mother = currentNode.mother,
            isRoot = true;
        for (var j = i + 1; j < len; j++) {
            var nextNodeNode = data[j].children;
            if (nextNodeNode.indexOf(father) > -1 || nextNodeNode.indexOf(mother) > -1) {
                isRoot = false;
                break;
            }
        }

        if (isRoot) {
            return i;
        }
    }

    return null;
}

//function getParentsPosition(data) {
//    var parentsPosition = [];
//    for (var i = 0, len = data.length; i < len; i++) {
//        var currentNode = data[i],
//            father = currentNode.father,
//            mother = currentNode.mother,
//            isRoot = true;
//        for (var j = i + 1; j < len; j++) {
//            var nextNodeNode = data[j].children;
//            if (nextNodeNode.indexOf(father) > -1 || nextNodeNode.indexOf(mother) > -1) {
//                isRoot = false;
//                break;
//            }
//        }
//
//        if (isRoot) {
//            return i;
//        }
//    }
//
//    return null;
//}

//function Node(father, mother, children) {
//    this.father = father;
//    this.mother = mother;
//    this.children = children || [];
//
//    return this;
//}
//
//Node.prototype.hasChild = function (name) {
//    
//}